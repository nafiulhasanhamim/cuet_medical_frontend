"use client"
import { errorToast, successToast } from "@/components/common/Toast";
import { ADD_MEDICINE } from "@/utils/apis/endpoint";
import axios from "axios";
import React, { useState } from "react";

const AddMedicine = () => {

  const [medicine, setMedicine] = useState({
    medicine_name: "",
    medicine_mg: "",
    medicine_image: ""
  })
  const {medicine_name, medicine_mg, medicine_image} = medicine;
  const handleMedicineImage = async (e) => {
     const file = e.target.files[0];
     console.log(file);
     const formData = new FormData();
     formData.append("image", file);
     await axios
       .post(
         "https://api.imgbb.com/1/upload?key=2c48f4bcce671e360e4753aaec302c77",
         formData
       )
       .then((res) => {
         console.log(res.data.data);
         setMedicine((prev) => ({
           ...prev,
           medicine_image: res.data.data.url,
         }));
       });
  }
  const handleChange = async (e) => {
     setMedicine((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
     }))
  }
  const handleSubmit = async (e) => {
     const res = await axios
       .post(`${ADD_MEDICINE}`, medicine)
       .then((res) => {
         console.log(res.data);
         if (res.data.message === "Medicine is added in the list") {
           successToast(res.data.message);
           setMedicine({
             medicine_name: "",
             medicine_mg: "",
             medicine_image: "",
           });
           //  setFlag(!flag);
         } else {
           errorToast(res.data.message);
         }
       });
  }
  return (
    <>
      <div className="add_new" style={{marginBottom:'5rem'}}>
        <div className="add_product">
          <div className="top">
            <div className="add_text">Add new Medicine:</div>

            <div className="products">
              <div className="p_name">Medicine name:</div>
              <input
                className="name_text"
                type="text"
                name="medicine_name"
                  value={medicine_name}
                  onChange={handleChange}
                placeholder="Enter Medicine Name"
              />
            </div>

            <div className="products">
              <div className="p_name">Medicine mg:</div>
              <input
                className="name_text"
                type="text"
                name="medicine_mg"
                  value={medicine_mg}
                  onChange={handleChange}
                placeholder="Enter Medicine mg"
              />
            </div>

            <div className="products">
              <div className="p_name">Medicine Image:</div>
              <input
                className="name_text"
                  onChange={handleMedicineImage}
                type="file"
                placeholder=""
              />
            </div>

            <button className="btn" onClick={handleSubmit}>Add Medicine</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMedicine;
