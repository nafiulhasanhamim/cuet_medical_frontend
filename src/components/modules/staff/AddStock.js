"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import { ADD_MEDICINE_STOCK, GET_PARTICULAR_MEDICINE_INFO } from "@/utils/apis/endpoint";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddStock = ({ medicine_id }) => {
  const [medicineData, setMedicineData] = useState({
    medicine_name: "",
    medicine_image: "",
    medicine_mg: 0,
    piece: "",
    price: "",
    _id: "",
  });
  const { medicine_name, medicine_image, medicine_mg, _id, piece, price } = medicineData;
  useEffect(() => {
    const result = axios
      .get(`${GET_PARTICULAR_MEDICINE_INFO}/${medicine_id}`)
      .then((res) => {
        setMedicineData(res.data.medicineInfo[0]);
        console.log(res.data.medicineInfo[0]);
      });
  }, []);

  const handleChange = e => {
      setMedicineData((prev)=> ({
        ...prev,
        [e.target.name] : e.target.value
      }))
  }

  const handleSubmit = async (e) => {
    console.log(medicineData)
     const res = await axios
       .post(
         `${ADD_MEDICINE_STOCK}`,
         {
           medicine_id,
           _id,
           price,
           piece
         },
       )
       .then((res) => {
         if (
           res.data.message ===
           "Medicine stock information is successfully added"
         ) {
           successToast(res.data.message);
           setMedicineData({
             medicine_name: "",
             medicine_image: "",
             medicine_mg: 0,
             piece: "",
             price: "",
             _id: "",
           });
         } else {
           errorToast(res.data.message);
         }
       });
  }
  return (
    <>
      <div className="add_new" style={{ marginBottom: "5rem" }}>
        <div className="add_product">
          <div className="top">
            <div className="add_text">Add Stock:</div>

            <div className="products">
              <div className="p_name">Medicine name:</div>
              <input
                className="name_text"
                type="text"
                name="medicine_name"
                value={medicine_name}
                onChange={handleChange}
                disabled
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">mg:</div>
              <input
                className="name_text"
                type="text"
                name="medicine_mg"
                value={medicine_mg}
                onChange={handleChange}
                disabled
                placeholder=""
              />
            </div>

            <div className="products">
              <div className="p_name">Piece:</div>
              <input
                className="name_text"
                type="number"
                name="piece"
                value={piece}
                onChange={handleChange}
                placeholder="Enter Piece"
              />
            </div>
            <div className="products">
              <div className="p_name">Price Per Piece:</div>
              <input
                className="name_text"
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                placeholder="Enter Price"
              />
            </div>
            <button onClick={handleSubmit} className="btn">Add Stock</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStock;
