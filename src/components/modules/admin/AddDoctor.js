"use client";
import { errorToast, successToast } from "@/components/common/Toast";
import { DOCTOR_REGISTRATION } from "@/utils/apis/endpoint";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const AddDoctor = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    user_image: "",
    phone_number: "",
    specialization: "",
    experience: ""
  });

  const { name, email, password, user_image, phone_number, specialization, experience } = userData;
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserImage = async (e) => {
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
        // console.log(res.data.data);
        setUserData((prev) => ({
          ...prev,
          user_image: res.data.data.url,
        }));
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const res = await axios
      .post(`${DOCTOR_REGISTRATION}`, userData)
      .then((res) => {
        if (
          res.data.message ===
          `Please go to your ${email} for completing your registration process`
        ) {
          successToast(
            "Please go to your email for completing your registration process"
          );
          setUserData({
            name: "",
            email: "",
            password: "",
            user_image: "",
            phone_number: "",
            specialization: "",
            experience: ""
          });
        } else {
          errorToast(res.data.message);
        }
      });
  };
  return (
    <>
      <section className="user-area ptb-100">
        <div className="container">
          <div className="user-form-content max-width-600">
            <form className="user-form" onSubmit={handleSubmit}>
              <h3>Add New Doctor</h3>

              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={name}
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phone_number"
                      value={phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Specialization</label>
                    <input
                      className="form-control"
                      type="text"
                      value={specialization}
                      onChange={handleChange}
                      name="specialization"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Experience</label>
                    <input
                      className="form-control"
                      type="text"
                      value={experience}
                      onChange={handleChange}
                      name="experience"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Doctor's Image</label>
                    <input
                      className="form-control"
                      //   value={user_image}
                      onChange={handleUserImage}
                      type="file"
                      name="user_image"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="default-btn"
                    style={{ border: "none", backgroundColor: "#48bdc5" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>

                <div className="col-12">
                  <p
                    className="create"
                    style={{ fontWeight: "bolder", color: "#48bdc5" }}
                  >
                    Already have an account? <Link href="/login">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddDoctor;