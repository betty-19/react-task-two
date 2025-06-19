import React from 'react'
import {logo} from '../assets/logo.png'

function LandingPage() {
  return (
    <div className="wrapper">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className='nav-links'>
          <li className="nav_items">MAIN</li>
          <li className="nav_items">GALLERY</li>
          <li className="nav_items">PROJECTS</li>
          <li className="nav_items">CERTIFICATIONS</li>
          <li className="nav_items">CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default LandingPage
