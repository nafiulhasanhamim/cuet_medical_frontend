"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import { ADD_MEDICINE_TO_APPOINTMENT, GET_ALL_MEDICINES_INFO } from "@/utils/apis/endpoint";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Addprescription = ({_id}) => {
  const [medicinesInfo, setMedicinesInfo] = useState([]);
  const [flag, setFlag] = useState(true);
  const [prescribeMedicine, setPrescribeMedicine] = useState({
    medicine: "",
    piece: 0,
    note: "",
  });
  useEffect(() => {
    const result = axios.get(`${GET_ALL_MEDICINES_INFO}`).then((res) => {
      setMedicinesInfo(res.data.medicinesInfo);
      setPrescribeMedicine((prev) => ({
        ...prev,
        // medicine_id: res.data.medicinesInfo[0].medicine_id,
        medicine: res.data.medicinesInfo[0]._id,
        // medicine_mg: res.data.medicinesInfo[0].medicine_mg,
        // medicine_name: res.data.medicinesInfo[0].medicine_name,
      }));
    });
  }, [flag]);

  const handleChange = (e) => {
    if (e.target.name === "medicine") {
      setPrescribeMedicine((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name === "piece") {
      const val = e.target.value;

      if (val.length) {
        const convertPiece = parseInt(e.target.value);
        const { availableStock } = medicinesInfo.find(
          (med) => med._id === medicine
        );

        setPrescribeMedicine((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
        if (convertPiece > availableStock) {
          errorToast(`${convertPiece} piece is not available`);
        }
      } else {
        setPrescribeMedicine((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else {
      setPrescribeMedicine((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    const pattern = /\d+/g;
    const matches = note.match(pattern);
    if (matches) {
      if (matches.length!==3) {
        errorToast("Write the note in a correct format");
      } else if(matches.length === 3){
              const res = await axios
                .put(`${ADD_MEDICINE_TO_APPOINTMENT}/${_id}`, prescribeMedicine)
                .then((res) => {
                  if (res.data.message === "Medicine is saved successfully") {
                    successToast(res.data.message);
                    setFlag(!flag);
                  } else {
                    errorToast(res.data.message);
                  }
                });
        setPrescribeMedicine({
          medicine: "",
          piece: 0,
          note: "",
        });
        setFlag(!flag);
      }
    } else {
      errorToast("Write the note in a correct format");
    }
  };
  const { medicine, piece, note } = prescribeMedicine;

  return (
    <>
      <div className="add_new" style={{ marginBottom: "2rem" }}>
        <div className="add_product">
          <div className="top">
            <div className="add_text">Prescription:</div>

            <div className="products">
              <div className="p_name">Select Medicine :</div>

              <select
                name="medicine"
                value={medicine}
                onChange={handleChange}
                required
                className="shop_type"
              >
                {medicinesInfo?.map((medicine) => {
                  const {
                    _id,
                    medicine_id,
                    medicine_name,
                    medicine_mg,
                    availableStock,
                    medicine_image,
                  } = medicine;
                  return (
                    <>
                      <option
                        value={_id}
                      >{`${medicine_name} ${medicine_mg} mg (available ${availableStock} pieces)`}</option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="products">
              <div className="p_name"> Piece:</div>
              <input
                className="name_text"
                type="text"
                name="piece"
                value={piece}
                onChange={handleChange}
                placeholder={"Enter Piece"}
              />
            </div>

            <div className="products">
              <div className="p_name">Medicine Note:</div>
              <input
                className="name_text"
                type="text"
                name="note"
                value={note}
                onChange={handleChange}
                placeholder="Enter Note Like 1+0+1"
              />
            </div>

            <button onClick={handleSubmit} className="btn">
              Add Medicine
            </button>
          </div>
        </div>
      </div>
      <Link href={`/prescription/viewprescription/${_id}`}>
        {" "}
        <button
          className="btn"
          style={{ marginBottom: "3rem", width: "200px" }}
        >
          Generate Prescription
        </button>{" "}
      </Link>
    </>
  );
};

export default Addprescription;
