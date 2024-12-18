import React from "react";

const PageSlider = () => {
  return (
    <>
      {/* Page Slider  */}
      <div className="hero-slider">
        {/* <!-- Slider Item --> */}
        <div
          className="slider-item slide1"
          style={{ backgroundImage: `url("images/slider/slider-bg-1.jpg")` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Slide Content Start --> */}
                <div className="content style text-center">
                  <h2 className="text-white text-bold mb-2">Our Best Surgeons</h2>
                  <p className="tag-text mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    sunt animi sequi ratione quod at earum. <br />
                    Quis quos officiis numquam!
                  </p>
                  <a href="#" className="btn btn-main btn-white">
                    explore
                  </a>
                </div>
                {/* <!-- Slide Content End --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Item --> */}
        <div
          className="slider-item"
          style={{ backgroundImage: `url("images/slider/slider-bg-2.jpg")` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Slide Content Start--> */}
                <div className="content style text-right">
                  <h2 className="text-white">
                    We Care About <br />
                    Your Health
                  </h2>
                  <p className="tag-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                  <a href="#" className="btn btn-main btn-white">
                    about us
                  </a>
                </div>
                {/* <!-- Slide Content End--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Item --> */}
        <div
          className="slider-item"
          style={{ backgroundImage: `url("images/slider/slider-bg-3.jpg")` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Slide Content Start --> */}
                <div className="content text-center style">
                  <h2 className="text-white text-bold mb-2">
                    Best Medical Services
                  </h2>
                  <p className="tag-text mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae deserunt,
                    <br />
                    eius pariatur minus itaque nostrum.
                  </p>
                  <a href="shop.html" className="btn btn-main btn-white">
                    shop now
                  </a>
                </div>
                {/* <!-- Slide Content End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--====  End of Page Slider  ====--> */}
    </>
  );
};

export default PageSlider;
