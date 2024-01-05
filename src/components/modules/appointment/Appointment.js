"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import {
  GET_ALL_ACTIVE_DOCTORS,
  TAKE_APPOINTMENT,
} from "@/utils/apis/endpoint";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
const Appointment = () => {
  const session = useSession();
  const [activeDoctors, setActiveDoctors] = useState([]);
  const [appointment, setAppointment] = useState({
    doctor: "",
    //   patient: session?.data?.user?._id,
    problem_description: "",
  });
  useEffect(() => {
    const result = axios.get(`${GET_ALL_ACTIVE_DOCTORS}`).then((res) => {
      setActiveDoctors(res.data.activeDoctors[0].doctorList);
      setAppointment((prev) => ({
        ...prev,
        doctor: res.data.activeDoctors[0].doctorList[0]._id,
      }));
    });
  }, []);

  const { doctor, problem_description } = appointment;
  const handleChange = (e) => {
    setAppointment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios
      .post(`${TAKE_APPOINTMENT}`, {
        doctor,
        patient: session?.data?.user?._id,
        problem_description,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Appointment is taking successfully") {
          successToast(res.data.message);
          setAppointment([]);
          //  setFlag(!flag);
        } else {
          errorToast(res.data.message);
        }
      });
  };
  return (
    <>
      {/* <!-- Contact Section --> */}
      <section className="blog-section section style-three pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="contact-area style-two">
                <div className="section-title">
                  <h3>
                    Request <span>Appointment</span>
                  </h3>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="default-form contact-form"
                >
                  <div className="row">
                    {/* <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <input type="text" name="Name" placeholder="Name" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="Email" placeholder="Email" required="" />
                                </div>
                                <div className="form-group">
                                    <select name="subject">
                                        <option>Departments</option>
                                        <option>Diagnostic</option>
                                        <option>Psychological</option>
                                    </select>
                                </div>                            
                            </div> */}
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      {/* <div className="form-group">
                                    <input type="text" name="Phone" placeholder="Phone" required="" />
                                </div> */}
                      {/* <div className="form-group">
                                    <input type="text" name="Date" placeholder="Date" required="" id="datepicker" />
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </div>  */}
                      <div className="form-group">
                        <lable>Select Doctor</lable>
                        <select
                          name="doctor"
                          value={doctor}
                          onChange={handleChange}
                        >
                          {/* <option>Doctor</option> */}
                          {/* <option>Diagnostic</option> */}
                          {activeDoctors?.map((doctor) => {
                            const { name, _id } = doctor;
                            return (
                              <>
                                <option value={_id}>{name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <textarea
                          name="problem_description"
                          value={problem_description}
                          onChange={handleChange}
                          placeholder="Problem Description"
                          required
                        ></textarea>
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn-style-one">
                          submit now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="appointment-image-holder">
                <figure>
                  <img
                    src="images/background/appoinment.jpg"
                    alt="Appointment"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
};

export default Appointment;
