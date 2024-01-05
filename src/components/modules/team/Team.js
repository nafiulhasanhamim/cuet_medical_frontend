import React from 'react'

const Team = () => {
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
                            <a href="#event-planning" data-toggle="tab">event planning</a>
                        </li>
                        <li role="presentation">
                            <a href="#lab" data-toggle="tab">lab</a>
                        </li>
                        <li role="presentation">
                            <a href="#marketing" data-toggle="tab">marketing</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in active row" id="doctor">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-1.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Emely Robert</h6>
                                <p>Bone Specialist</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-2.jpg" className="img-responsive" alt="team" /> 
                                <h6>Dr. Rag Jhon</h6>
                                <p>Eye Specialist</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/doctor-3.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Tent Richardson</h6>
                                <p>Skin Specialist</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End single tab content--> */}
                    {/* <!--Start single tab content--> */}
                    <div className="team-members tab-pane fade in row" id="event-planning">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/event-1.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Sheiring Ton</h6>
                                <p>Manager</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/event-2.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Rig Richard</h6>
                                <p>Sr. Manager</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-person text-center">
                                <img src="images/team/event-3.jpg" className="img-responsive" alt="team" />
                                <h6>Dr. Tom Moddy</h6>
                                <p>President</p>
                            </div>
                        </div>
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