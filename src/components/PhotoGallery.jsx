import React from 'react'
 import logo from '../assets/logo.png'
 import '../assets/PhotoGallery.css'

function PhotoGallery() {
  return (
    <div className="wrapper">
          <div className="nav">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className='nav-links'>
              <li className="nav-items">MAIN</li>
              <li className="nav-items">GALLERY</li>
              <li className="nav-items">PROJECTS</li>
              <li className="nav-items">CERTIFICATIONS</li>
              <li className="nav-items">CONTACT</li>
            </ul>
          </div>
        </div>
  )
}

export default PhotoGallery
