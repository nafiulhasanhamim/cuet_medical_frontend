import React from "react";

const UpperHeader = () => {
  return (
    <>
      {/* <!--Header Upper--> */}
      <section className="header-uper">
        <div className="container clearfix">
          <div className="logo">
            <figure>
              <a href="index.html">
                <img src="images/logo.png" alt="" width="130" />
              </a>
            </figure>
          </div>
          <div className="right-side">
            <ul className="contact-info">
              <li className="item">
                <div className="icon-box">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <strong>Email</strong>
                <br />
                <a href="#">
                  <span>info@medic.com</span>
                </a>
              </li>
              <li className="item">
                <div className="icon-box">
                  <i className="fa fa-phone"></i>
                </div>
                <strong>Call Now</strong>
                <br />
                <span>+ (88017) - 123 - 4567</span>
              </li>
            </ul>
            <div className="link-btn">
              <a href="#" className="btn-style-one">
                Appoinment
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Header Upper--> */}
    </>
  );
};

export default UpperHeader;
