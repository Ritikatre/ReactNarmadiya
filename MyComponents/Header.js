/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className="headcontainer">
  <a to="#" className='SiteName'>
  <p className="akhil" style={{ fontSize: 25, color: "red", margin: 0 }}>
  अखिल भारतीय
</p>
    नार्मदीय ब्राह्मण
    <br />
    समाज
  </a>
</div>
<nav className="navbar navbar-expand-lg navbar-light nav-menu">
  <NavLink className="navbar-brand" to="/"></NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div
    className="collapse navbar-collapse more-size"
    id="navbarSupportedContent"
  >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link"  to="/Home">
          मुख्य प्रष्ठ
          <span className="sr-only">(current)</span>
        </NavLink>
       </li>
       <li className="nav-item">
        <NavLink className="nav-link" to='/Patrika'>
          मुख्य समाचार एवं पत्रिकाएं
        </NavLink>
      </li>
     <li className="nav-item">
        <NavLink className="nav-link" to="/About">
          समाज के बारे मे
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Religious">
          धार्मिक
        </NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contactus">
          संपर्क
        </NavLink>
       
      </li>

     </ul>
     <span className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
   Account
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a className="dropdown-item" href="#">
     Login
    </a>
    <a className="dropdown-item" href="#">
      SignUp
    </a>
   
  </div>
</span>

  </div>
</nav>



  </>
  
  )
}
