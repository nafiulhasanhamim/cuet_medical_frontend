import { GET_ALL_MEDICINES_INFO } from "@/utils/apis/endpoint";
import Link from "next/link";
import React from "react";
const medicineList = async () => {
  let medicineInfo = await fetch(GET_ALL_MEDICINES_INFO);
  medicineInfo = await medicineInfo.json();
  return medicineInfo.medicinesInfo;
};
const AllMedicines = async () => {
  const medicinesInfo = await medicineList();
  return (
    <>
      {/* <!--team section--> */}
      <section className="team-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>
              Medicines
              <span>List</span>
            </h3>
          </div>
          <div className="row">

            {
              medicinesInfo?.map((medicine)=> {
                const {_id, medicine_id, medicine_name, medicine_mg, availableStock, medicine_image} = medicine;
                return (
                  <>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="team-member">
                        <img
                          src={medicine_image}
                          alt="doctor"
                          className="img-responsive"
                        />
                        <div className="contents text-center">
                          <h4>Medicine Name: {medicine_name}</h4>
                          <p>mg : {medicine_mg}</p>
                          <p>mg : {availableStock}</p>
                          <button
                            style={{
                              backgroundColor: "rgb(110, 149, 199)",
                              padding: "0.7rem",
                            }}
                          >
                            <Link
                              href={`/staff/medicines/${_id}`}
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              See Stock Details
                            </Link>
                          </button>
                          <button
                            style={{
                              backgroundColor: "rgb(110, 149, 199)",
                              padding: "0.7rem",
                              margin: '1rem'
                            }}
                          >
                            <Link
                              href={`/staff/medicines/addstock/${medicine_id}`}
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Add Stock
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );

              })
            }
          </div>
        </div>
      </section>
      {/* <!--End team section--> */}
    </>
  );
};

export default AllMedicines;
