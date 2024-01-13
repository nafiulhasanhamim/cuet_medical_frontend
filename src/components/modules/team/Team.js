"use client"
import { GET_ALL_DOCTORS, GET_ALL_STAFFS } from '@/utils/apis/endpoint'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Team = () => {
    const [doctors, setDoctors] = useState([])
    const [staffs, setStaffs] = useState([])
    useEffect(()=> {
     const result = axios.get(`${GET_ALL_DOCTORS}`).then((res) => {
       setDoctors(res.data.doctors);
       return axios.get(`${GET_ALL_STAFFS}`)
     })
     .then((res)=> {
        setStaffs(res.data.staffs)
     })
    }, [])
  return (
    <>
    
<section className="team-section section">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title text-center">
                    <h3>Great
                        <span>Team</span>
                    </h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overv-
                        <br />iews. Iterative approaches to corporate strategy...</p>
                </div>
                {/* <!-- Nav tabs --> */}
                <div className="tabs">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#doctor" data-toggle="tab">doctor</a>
                        </li>
                        <li role="presentation">
                            <a href="#event-planning" data-toggle="tab">Staffs</a>
                        </li>
                        {/* <li role="presentation">
                            <a href="#lab" data-toggle="tab">lab</a>
                        </li>
                        <li role="presentation">
                            <a href="#marketing" data-toggle="tab">marketing</a>
                        </li> */}
                    </ul>
                </div>
                <div className="tab-content">
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in active row" id="doctor">
                       {
                        doctors?.map((doctor)=> {
                            const {name, email, user_image, specialization, experience} = doctor;
                            return (
                              <>
                                <div className="col-md-4 col-sm-6">
                                  <div className="team-person text-center">
                                    <img
                                      src={user_image}
                                      className="img-responsive"
                                      alt="team"
                                    />
                                    <h6>{name}</h6>
                                    {/* <h6>{email}</h6> */}
                                    <p>{specialization}</p>
                                    <p>{experience}</p>
                                  </div>
                                </div>
                              </>
                            );
                        })
                       }


                    </div>
                    {/* <!--End single tab content--> */}
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in row" id="event-planning">
                       {
                        staffs?.map((staff)=> {
                            const {name, email, user_image} = staff
                            return (
                              <>
                                <div className="col-md-4 col-sm-6">
                                  <div className="team-person text-center">
                                    <img
                                      src={user_image}
                                      className="img-responsive"
                                      alt="team"
                                    />
                                    <h6>{name}</h6>
                                    {/* <p>{email}</p> */}
                                  </div>
                                </div>
                              </>
                            );
                        })
                       }
                    </div>
                    {/* <!--End single tab content--> */}
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in row" id="lab">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-lab-1.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Maria Robert</h6>
                                <p>X-ray</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-lab-2.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. John Kelly</h6>
                                <p>ultrasound therapy</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-lab-3.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Simran Toe</h6>
                                <p>bone therapy</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single tab content--> */}
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in row" id="marketing">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-2.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Rag Jhon</h6>
                                <p>Eye Specialist</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-lab-2.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. John Kelly</h6>
                                <p>ultrasound therapy</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/event-1.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Sheiring Ton</h6>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single tab content--> */}
                </div>
            </div>
        </div>
    </div>
</section>

    
    
    </>
  )
}

export default Team