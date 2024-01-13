"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import {
    All_APPOINTMENTS,
  All_APPOINTMENTS_FOR_PARTICULAR_DOCTOR,
  CHANGE_APPOINTMENT_STATUS,
  CHANGE_MEDICINE_SUPPLY_STATUS,
  PENDING_APPOINTMENTS_FOR_PARTICULAR_DOCTOR,
} from "@/utils/apis/endpoint";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const findMonth = (month) => {
  const getMonth = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return getMonth[month];
};
const AllAppointments = () => {
//   const session = useSession();
  const [appointments, setAppointments] = useState([]);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    // if (session?.data?.user) {
      const result = axios
        .get(
          `${All_APPOINTMENTS}`
        )
        .then((res) => {
          setAppointments(res.data.appointments);
        });
    // }
  }, [flag]);

  const handleMedicineStatusChange = async (_id) => {
    const res = await axios
      .put(`${CHANGE_MEDICINE_SUPPLY_STATUS}/${_id}`)
      .then((res) => {
        if (res.data.message === "Medicine supply Status is changed successfully") {
          successToast(res.data.message);
          setFlag(!flag);
        } else {
          errorToast(res.data.message);
        }
      });
  };
  return (
    <>
      <div className="admin-wrapper home-wrapper-2">
        <div className="order_product">
          <div className="top">
            <div className="add_text">All Appointments:</div>

            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Patient name</th>

                  {/* <th>Available Stock</th> */}

                  <th style={{ textAlign: "center" }}>Email</th>

                  <th style={{ textAlign: "center" }}>Phone No.</th>

                  <th style={{ textAlign: "center" }}>Problem Description</th>
                  <th style={{ textAlign: "center" }}>Prescription</th>
                  <th style={{ textAlign: "center" }}>Status</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                </tr>
              </thead>

              <tbody>
                {appointments?.map((appoinment) => {
                  const {
                    appointment_status,
                    problem_description,
                    medicine_supply_status,
                    _id,
                    doctor,
                    patient,
                    prescription,
                    createdAt,
                  } = appoinment;
                  const { name, email, user_image, phone_number } =
                    appoinment.patientDetails[0];
                  const dateObj = new Date(createdAt);
                  const year = dateObj.getFullYear();
                  const month = dateObj.getMonth() + 1; // Months are 0-indexed
                  const day = dateObj.getDate();
                  return (
                    <>
                      <tr>
                        <td data-label="Patient name">{name}</td>
                        {/* <td data-label="available stock">{availableStock}</td> */}
                        <td data-label="Email">{email}</td>
                        <td data-label="Phone no.">{phone_number}</td>
                        <td data-label="Problem Description">
                          {problem_description}
                        </td>
                        <td data-label="Prescription">
                          {prescription?.length > 0 ? (
                            <Link
                              href={`/prescription/viewprescription/${_id}`}
                            >
                              <button className="admin_btnAll">
                                View Prescription
                              </button>
                            </Link>
                          ) : (
                             "..."
                          )}
                        </td>
                        <td data-label="Status">
                          {/* {`${appointment_status}`} */}
                          {medicine_supply_status === "pending" ? (
                            <button
                              onClick={() => handleMedicineStatusChange(_id)}
                              class="order_now"
                            >
                              {medicine_supply_status}
                            </button>
                          ) : (
                            <button class="order_now">
                              {medicine_supply_status}
                            </button>
                          )}
                        </td>
                        <td data-label="Date">{`${findMonth(
                          month
                        )} ${day}, ${year}`}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAppointments;
