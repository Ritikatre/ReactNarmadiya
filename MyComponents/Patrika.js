import React from 'react'

export default function Patrika() {
  return (
    <>
  {/* Section Vantagens */}
  <section id="vantagens">
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12 ">
          <h5 className="section-title h1">समाज पत्रिकाए</h5>
          <div className="row row-margin-bottom mt-5">
            <div
              className="col-md-6 no-padding lib-item patrika"
              data-category="view"
            >
              <div className="lib-panel" id="patrika1">
                <div className="row box-shadow w-100 patrikabox">
                  <div className="col-md-5 image-row">
                  <img src={require('../img/ndlok.jpg')} />
                    
                  </div>
                  <div className="col-md-6 card-text">
                    <div className="lib-row lib-header text-left pl-5">
                      <span className="blue">
                        नार्मदीय लोक : एक मासिक पत्रिका
                      </span>
                      <div className="lib-header-seperator" />
                    </div>
                    <div className="lib-row lib-desc pl-5"></div>
                    <a
                      href="#"
                      className="btn btn-block btn-social btn-facebook"
                    >
                      Read Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 no-padding lib-item patrika"
              data-category="view"
            >
              <div className="lib-panel" id="patrika2">
                <div className="row box-shadow w-100 patrikabox">
                  <div className="col-md-5 image-row">
                    <img src={require('../img/ndlok.jpg')} />
                  </div>
                  <div className="col-md-6 card-text">
                    <div className="lib-row lib-header text-left pl-5">
                      <span className="blue">
                        नार्मदीय लोक : एक मासिक पत्रिका{" "}
                      </span>
                      <div className="lib-header-seperator" />
                    </div>
                    <div className="lib-row lib-desc pl-5">
                      नार्मदीय लोक सेवा ट्रस्ट द्वारा प्रकाशित यह एक मासिक
                      पत्रिका है |
                      <br />
                      सम्पादक : श्रीमती किरण साकल्ले <br />
                      पता : 160 , क्लर्क कॉलोनी , इंदौर |
                    </div>
                    <a className="btn btn-block btn-social btn-facebook">
                      <i className="fa fa-facebook" /> Facebook Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 no-padding lib-item patrika"
              data-category="view"
            >
              <div className="lib-panel" id="patrika3">
                <div className="row box-shadow w-100 patrikabox">
                  <div className="col-md-5 image-row">
                    <img src={require('../img/jagat.jpg')} />

                  </div>
                  <div className="col-md-6 card-text">
                    <div className="lib-row lib-header text-left pl-5">
                      <span className="blue">
                        नार्मदीय जगत : एक मासिक पत्रिका
                      </span>
                      <div className="lib-header-seperator" />
                    </div>
                    <div className="lib-row lib-desc pl-5">
                      नार्मदीय जगत नार्मदीय ब्राह्मण समाज की एक स्थापित और
                      विश्वसनीय सामाजिक पत्रिका है , यह एक मासिक पत्रिका है |
                      <br />
                      पता : डी 65 , शॉपिंग काम्प्लेक्स ,ए बी रोड़ इंदौर
                    </div>
                    <a className="btn btn-block btn-social btn-facebook">
                      <i className="fa fa-facebook" /> Facebook Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
