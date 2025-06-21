import React, { useState } from 'react'
import '../assets/css/Nav.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/nav-logo.png'
import digitalProjects from '../assets/images/digitalProject.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
          <img className="digital-project" src={digitalProjects} alt="" />
        </div>

       
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

      
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li className="nav-items"><Link to="/">MAIN</Link></li>
          <li className="nav-items"><Link to="/gallery">GALLERY</Link></li>
          <li className="nav-items"><Link to="/projects">PROJECTS</Link></li>
          <li className="nav-items"><a href="#certifications">CERTIFICATIONS</a></li>
          <li className="nav-items"><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
