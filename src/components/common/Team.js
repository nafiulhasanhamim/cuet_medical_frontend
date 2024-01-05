import React from 'react'

const Team = () => {
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem illo, rerum
              <br />
              natus nobis deleniti doloremque minima odit voluptatibus ipsam
              animi?
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-member">
                <img
                  src="images/team/doctor-2.jpg"
                  alt="doctor"
                  className="img-responsive"
                />
                <div className="contents text-center">
                  <h4>Dr. Robert Barrethion</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos, aspernatur.
                  </p>
                  <a href="#" className="btn btn-main">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-member">
                <img
                  src="images/team/doctor-lab-3.jpg"
                  alt="doctor"
                  className="img-responsive"
                />
                <div className="contents text-center">
                  <h4>Dr. Marry Lou</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos, aspernatur.
                  </p>
                  <a href="#" className="btn btn-main">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="team-member">
                <img
                  src="images/team/event-2.jpg"
                  alt="doctor"
                  className="img-responsive"
                />
                <div className="contents text-center">
                  <h4>Dr. Sansa Stark</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos, aspernatur.
                  </p>
                  <a href="#" className="btn btn-main">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End team section--> */}
    </>
  );
}

export default Team