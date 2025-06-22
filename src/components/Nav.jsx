import React, { useState } from 'react'
import '../assets/css/Nav.css'
import { NavLink } from 'react-router-dom'
import digitalProjects from '../assets/images/digitalProject.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
          <img className="digital-project" src={digitalProjects} alt="digital project" />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li className="nav-items"><NavLink to="/" end>MAIN</NavLink></li>
          <li className="nav-items"><NavLink to="/gallery">GALLERY</NavLink></li>
          <li className="nav-items"><NavLink to="/projects">PROJECTS</NavLink></li>
          <li className="nav-items"><a href="#certifications">CERTIFICATIONS</a></li>
          <li className="nav-items"><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
