"use client"
import { GET_ALL_DOCTORS } from '@/utils/apis/endpoint';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Team = () => {
   const [doctors, setDoctors] = useState([]);
   const [staffs, setStaffs] = useState([]);
   useEffect(() => {
     const result = axios
       .get(`${GET_ALL_DOCTORS}`)
       .then((res) => {
         setDoctors(res.data.doctors);

       })
   }, []);
  return (
    <>
      {/* <!--team section--> */}
      <section className="team-section section">
        <div className="container">
          <div className="section-title text-center">
            <h3>
              Our Expert
              <span>Doctors</span>
            </h3>
          </div>
          <div className="row">
            {
              doctors?.map((doctor)=> {
                const {name, email, specialization, experience, user_image} = doctor
                return (
                  <>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="team-member">
                        <img
                          src={user_image}
                          alt="doctor"
                          className="img-responsive"
                        />
                        <div className="contents text-center">
                          <h4>{name}</h4>
                          <p>{specialization}</p>
                          <p>{experience}</p>
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
}

export default Team