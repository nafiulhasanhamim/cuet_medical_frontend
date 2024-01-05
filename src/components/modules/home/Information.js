import React from 'react'

const Information = () => {
  return (
    <>
    <section className="cta">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cta-block">
                  <div className="emmergency item">
                    <i className="fa fa-phone"></i>
                    <h2>Emegency Cases</h2>
                    <a href="#">1-800-700-6200</a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="top-doctor item">
                    <i className="fa fa-stethoscope"></i>
                    <h2>24 Hour Service</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Inventore dignissimos officia dicta suscipit vel eum
                    </p>
                    <a href="#" className="btn btn-main">
                      Read more
                    </a>
                  </div>
                  <div className="working-time item">
                    <i className="fa fa-hourglass-o"></i>
                    <h2>Working Hours</h2>
                    <ul className="w-hours">
                      <li>
                        Mon - Fri - <span>8:00 - 17:00</span>
                      </li>
                      <li>
                        Mon - Fri - <span>8:00 - 17:00</span>
                      </li>
                      <li>
                        Mon - Fri - <span>8:00 - 17:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

export default Information