import React from "react";

const About = () => {
  return (
    <>
      {/* <!--about section--> */}
      <section className="feature-section section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="image-content">
                <div className="section-title text-center">
                  <h3>
                    Best Features
                    <span>of Our Hospital</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam magni in at debitis <br />
                    nam error officia vero tempora alias? Sunt?
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="item">
                      <div className="icon-box">
                        <figure>
                          <a href="#">
                            <img src="images/resource/1.png" alt="" />
                          </a>
                        </figure>
                      </div>
                      <h6>Orthopedics</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil ducimus veniam illo quibusdam pariatur ex sunt,
                        est aspernatur at debitis eius vitae vel nostrum dolorem
                        labore autem corrupti odit mollitia?
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item">
                      <div className="icon-box">
                        <figure>
                          <a href="#">
                            <img src="images/resource/2.png" alt="" />
                          </a>
                        </figure>
                      </div>
                      <h6>Diaginostic</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil ducimus veniam illo quibusdam pariatur ex sunt,
                        est aspernatur at debitis eius vitae vel nostrum dolorem
                        labore autem corrupti odit mollitia?
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item">
                      <div className="icon-box">
                        <figure>
                          <a href="#">
                            <img src="images/resource/3.png" alt="" />
                          </a>
                        </figure>
                      </div>
                      <h6>Psycology</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil ducimus veniam illo quibusdam pariatur ex sunt,
                        est aspernatur at debitis eius vitae vel nostrum dolorem
                        labore autem corrupti odit mollitia?
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item">
                      <div className="icon-box">
                        <figure>
                          <a href="#">
                            <img src="images/resource/4.png" alt="" />
                          </a>
                        </figure>
                      </div>
                      <h6>General Treatment</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil ducimus veniam illo quibusdam pariatur ex sunt,
                        est aspernatur at debitis eius vitae vel nostrum dolorem
                        labore autem corrupti odit mollitia?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-tab-section section">
        <div className="outer-box clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <!-- Nav tabs --> */}
                <div className="tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a href="#dormitory" data-toggle="tab">
                        dormitory
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#orthopedic" data-toggle="tab">
                        orthopedic
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#sonogram" data-toggle="tab">
                        sonogram
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#x-ray" data-toggle="tab">
                        x-ray
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#diagnostic" data-toggle="tab">
                        diagnostic
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Start single tab content--> */}
                <div className="tab-content">
                  <div
                    className="service-box tab-pane fade in active row"
                    id="dormitory"
                  >
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src="images/services/service-one.jpg"
                        alt="service-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contents">
                        <div className="section-title">
                          <h3>dormitory</h3>
                        </div>
                        <div className="text">
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                        </div>
                        <ul className="content-list">
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Whitening is among
                            the most popular dental
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                        </ul>
                        <a href="#" className="btn btn-style-one">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single tab content--> */}
                  {/* <!--Start single tab content--> */}
                  <div className="service-box tab-pane fade in" id="orthopedic">
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src="images/services/service-two.jpg"
                        alt="service-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contents">
                        <div className="section-title">
                          <h3>orthopedic</h3>
                        </div>
                        <div className="text">
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                        </div>
                        <ul className="content-list">
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Whitening is among
                            the most popular dental
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                        </ul>
                        <a href="#" className="btn btn-style-one">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single tab content--> */}
                  {/* <!--Start single tab content--> */}
                  <div className="service-box tab-pane fade in" id="sonogram">
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src="images/services/service-three.jpg"
                        alt="service-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contents">
                        <div className="section-title">
                          <h3>sonogram</h3>
                        </div>
                        <div className="text">
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                        </div>
                        <ul className="content-list">
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Whitening is among
                            the most popular dental
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                        </ul>
                        <a href="#" className="btn btn-style-one">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single tab content--> */}
                  {/* <!--Start single tab content--> */}
                  <div className="service-box tab-pane fade in" id="x-ray">
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src="images/services/service-four.jpg"
                        alt="service-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contents">
                        <div className="section-title">
                          <h3>x-ray</h3>
                        </div>
                        <div className="text">
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                        </div>
                        <ul className="content-list">
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Whitening is among
                            the most popular dental
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                        </ul>
                        <a href="#" className="btn btn-style-one">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single tab content--> */}
                  {/* <!--Start single tab content--> */}
                  <div className="service-box tab-pane fade in" id="diagnostic">
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src="images/services/service-five.jpg"
                        alt="service-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contents">
                        <div className="section-title">
                          <h3>diagnostic</h3>
                        </div>
                        <div className="text">
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                          <p>
                            The implant fixture is first placed, so that it
                            ilikely to osseointegrate, then a dental prosthetic
                            is added. then a dental prosthetic is added.then a
                            dental pros- thetic is added.
                          </p>
                        </div>
                        <ul className="content-list">
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Whitening is among
                            the most popular dental
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                          <li>
                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is
                            part of oral hygiene and involves
                          </li>
                        </ul>
                        <a href="#" className="btn btn-style-one">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single tab content--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End about us area--> */}
    </>
  );
};

export default About;
