import React from 'react'

const TopHeader = () => {
  return (
    <>
      {/* <!--header top--> */}
      <div className="header-top">
        <div className="container clearfix">
          <div className="top-left">
            <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
          </div>
          <div className="top-right">
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!--header top--> */}
    </>
  );
}

export default TopHeader