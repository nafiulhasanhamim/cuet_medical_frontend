"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import { ADD_ACTIVE_DOCTOR, REMOVE_ACTIVE_DOCTOR } from "@/utils/apis/endpoint";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const ActiveStatus = () => {
  const [activeStatus, setActiveStatus] = useState("on");
  const session = useSession();
  const handleChange = (e) => {
    setActiveStatus(e.target.value);
  };
  const handleSubmit = async (e) => {
    const _id = session?.data?.user?._id;
    if (activeStatus === "on") {
      const res = await axios
        .post(`${ADD_ACTIVE_DOCTOR}`, { _id })
        .then((res) => {
          if (res.data.message === `Active status is on successfully`) {
            successToast(res.data.message);
          } else {
            errorToast(res.data.message);
          }
        });
    } else if(activeStatus === "off") {
         const res = await axios
           .delete(`${REMOVE_ACTIVE_DOCTOR}/${_id}`)
           .then((res) => {
             if (res.data.message === `Active status is off successfully`) {
               successToast(res.data.message);
             } else {
               errorToast(res.data.message);
             }
           });
    }
  };
  return (
    <>
      <div className="add_new" style={{ marginBottom: "5rem" }}>
        <div className="add_product">
          <div className="top">
            <div className="add_text"></div>

            <div className="products">
              <div className="p_name">Active Status :</div>

              <select
                name="available_status"
                value={activeStatus}
                onChange={handleChange}
                required
                className="shop_type"
              >
                <option value="on">ON</option>
                <option value="off">OFF</option>
              </select>
            </div>

            <button onClick={handleSubmit} className="btn">
              Chage Status
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveStatus;
