import React from 'react'
// import {logo} from '../assets/logo.png'
import project from '../assets/project.jpg'

function LandingPage() {
  return (
    <div className="wrapper">
      {/* <div className="nav">
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
      </div> */}

      <div className="project-lorum">
        <div className="left">
          <p>PROJECT</p>
          <p>Lorum</p>
          <div className="arrow-buttons">
            <button className="left-arrow">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button className="right-arrow">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="pages">
            <div className="prev">
              <p>0</p>
              <p>1</p>
            </div>
            <i class="bi bi-slash-lg"></i>
            <p>02</p>
          </div>



        </div>
        <div className="right">
          <img src={project} alt="" />
          <div className="view-project">
            <a href="">VIEW PROJECT</a>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
