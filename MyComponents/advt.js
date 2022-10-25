import React from 'react'

export default function advt() {
  return (
    <>
    <>
  <div className="container">
    <h5 style={{ padding: 20 }} className="section-title h1">
      Advertisement Form
    </h5>
    <div className="row">
      <div className="col-lg-10 col-lg-offset-1">
        <form
          className="contactform"
          id="contact-form"
          encType="multipart/form-data"
          method="post"
        >
          {"{"}% csrf_token %{"}"}
          {/* <div class="messages"></div>*/}
          <div className="controls">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_name">Firstname *</label>
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Please enter your firstname *"
                    required="required"
                    data-error="Firstname is required."
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_lastname">Lastname *</label>
                  <input
                    id="form_lastname"
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Please enter your lastname *"
                    required="required"
                    data-error="Lastname is required."
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_email">Email *</label>
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Please enter your email *"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_phone">Phone</label>
                  <input
                    id="form_phone"
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Please enter your phone"
                    required="required"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="form_message">About Advertisement *</label>
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control"
                    placeholder="Write here*"
                    rows={4}
                    required=""
                    data-error="Please,leave us a message."
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                  <label htmlFor="form_message">Advertisement Content *</label>
                  <input
                    type="file"
                    id="myFile"
                    name="Files"
                    style={{ margin: 10 }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <input type="submit" defaultValue="Send message" />
                {/* <button type="submit">send2</button> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* price  */}
  <section className="pricing py-5">
    <div className="container">
      <h5 style={{ padding: 20 }} className="section-title h1">
        Advt. Pricing
      </h5>
      <div className="row">
        {/* Free Tier */}
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                Common
              </h5>
              <h6 className="card-price text-center">
                ₹300<span className="period"> For 1 Month</span>
              </h6>
              <hr />
              <ul className="fa fa-ul">
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Single Poster
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Across Website
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Website Membership
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  Can Change Poster
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  Across Youtube{" "}
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  On Samaj Patrika
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Plus Tier */}
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                Plus
              </h5>
              <h6 className="card-price text-center">
                ₹600<span className="period">For 3 Months</span>
              </h6>
              <hr />
              <ul className="fa fa-ul">
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Max. 3 Posters
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Across Website
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Website Membership
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Can Change Posters
                </li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  Across Youtube{" "}
                </li>
                <li></li>
                <li className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>
                  On Samaj Patrika
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Pro Tier */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                Pro
              </h5>
              <h6 className="card-price text-center">
                ₹1000<span className="period">For 6 Months</span>
              </h6>
              <hr />
              <ul className="fa fa-ul">
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Unlimited Posters
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Across Website
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Website Membership
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Can Change Posters
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Across Youtube{" "}
                </li>
                <li>
                  <span className="fa fa-li">
                    <i className="fas fa-check" />
                  </span>
                  On Samaj Patrika*
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p style={{ textAlign: "center", color: "white" }}>*conditions apply</p>
  </section>
  {/* price end  */}
</>

    
    </>
  )
}
