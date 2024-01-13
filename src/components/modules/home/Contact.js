import React from "react";
import Appointment from "../appointment/Appointment";

const Contact = () => {
  return (
    <>
      {/* <!-- Contact Section --> */}
      <section className="appoinment-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="accordion-section">
                <div className="section-title">
                  <h3>FAQ</h3>
                </div>
                <div className="accordion-holder">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Why Should I choose Medical Health
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          Choosing medical health is an investment in your
                          well-being, offering preventive care, financial
                          security, and access to expert guidance. It enhances
                          your quality of life, supports emotional well-being,
                          and fosters a sense of community. Prioritizing medical
                          health ensures a proactive approach to longevity,
                          productivity, and a fulfilling future.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I schedule an appointment?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          You can easily schedule an appointment by calling our
                          office or using our online appointment booking system
                          available on our website. We strive to accommodate
                          your preferred date and time.
                        </div>
                      </div>
                    </div>
                    {/* <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingThree"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How many visitors are allowed?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="contact-area">
                <div className="section-title">
                  {/* <h3>
                    Request
                    <span>Appointment</span>
                  </h3> */}
                </div>
              <Appointment />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
};

export default Contact;
