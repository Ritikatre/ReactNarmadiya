import React from 'react'

export const Footer = () => {
  return (
    
    <>
  {/* Footer */}
  <footer className="page-footer ">
    {/* Footer Links */}
    <div className="container text-center text-md-left mt-5 more-size">
      {/* Grid row */}
      <div className="row mt-3 more-size">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
         
            <img src={require('../img/maanarmada.png') }
 alt="" width="150px" height="150px"/>
  <h6 className="text-uppercase font-weight-bold">
            नार्मदीय ब्राह्मण समाज
          </h6>
        
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Useful links</h6>
          <hr
            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: 60 }}
          />
          <p>
            <a href='/"'>Home</a>
          </p>
          <p>
            <a href="#!">मुख्य समाचार</a>
          </p>
          <p>
            <a href="#!">Advt.</a>
          </p>
          <p>
            <a href="#!">Log Out</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Contact</h6>
          <hr
            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: 60 }}
          />
          <p>
            <i className="fa fa-home mr-3" />
            नार्मदीय ब्राह्मण समाज (म.प्र.)
          </p>
          <p>
            <i className="fa fa-envelope mr-3" />{" "}
            contact@narmadiyabrahminsamaj.com
          </p>
          <p>
            <i className="fa fa-phone mr-3" /> + 01 234 567 88
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Follow </h6>
          <hr
            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: 60 }}
          />
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                className="social-icon text-xs-center"
                target="_blank"
                href="https://www.fiverr.com/share/qb8D02"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-icon text-xs-center"
                target="_blank"
                href="#"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
          <p className="devlop">
            Developed By : Narmadiya Bandhu <br />
            Contact Us : 7089986702 | 7694969509
          </p>
        </div>
      </div>
      {/* Grid row */}
    </div>
    {/* Footer Links */}
    {/* Copyright */}
    <div className="footer-copyright text-center">
      © 2023 Copyright:
      <a href="#"> narmadiyabrahminsamaj.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>


  
  )
}
