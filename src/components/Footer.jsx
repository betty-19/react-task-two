import React from 'react'
import '../assets/css/Footer.css'
import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <div className='wrapper'>
      <div className="footer">
            <div className="contents"> <div className="f-logo">
              <img src={logo} alt="" />
            </div>
            <div className="information-contacts">
              <div className="information">
                <p>Information</p>
                <ul className='nav-links2'>
              <li className="nav-item2">MAIN</li>
              <li className="nav-item2">GALLERY</li>
              <li className="nav-item2">PROJECTS</li>
              <li className="nav-item2">CERTIFICATIONS</li>
              <li className="nav-item2">CONTACT</li>
            </ul>
              </div>
              <div className="contacts">
                <p>Contacts</p>
                <div className="address">
                  <i class="bi bi-geo-alt"></i>
                  <p>1234 Sample Street Austin Texas 78704</p>

                </div>
                <div className="phone">
                  <i class="bi bi-telephone"></i>
                  <p>51233332222</p>
                </div>
                <div className="emial">
                  <i class="bi bi-envelope"></i>
                  <p>sampleemail@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <p>Social Media</p>
              <div className="social-media-icons">
                <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-pinterest"></i>
              </div>
              
            </div>
            </div>
            <hr />
            <div className="rights">
              <p>&copy; 2019 All Right Reserved </p> 
            </div>
           
          </div>
    </div>
  )
}

export default Footer
