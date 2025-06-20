import React from 'react'
 import logo from '../assets/logo.png'
 import '../assets/PhotoGallery.css'
 import one from '../assets/one.png';
 import two from '../assets/two.jpg';
 import three from '../assets/three.jpg';
 import four from '../assets/four.jpg';
 import five from '../assets/five.jpg';
 import six from '../assets/six.jpg';
 import seven from '../assets/seven.jpg';
 import eight from '../assets/eight.jpg';
 import nine from  '../assets/nine.jpg';
 import ten from '../assets/ten.jpg';



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
          <div className="gallery-section">
            <p>Photo</p>
            <p className="gal">Gallery</p>
                    <hr />
          <div className="photos">
            <div className="img">
            <img src={one} alt="" />
          </div>
          <div className="img">
            <img src={two} alt="" />
          </div>
          <div className="img">
            <img src={three} alt="" />
          </div>
          <div className="img">
            <img src={four} alt="" />
          </div>
          <div className="img">
            <img src={five} alt="" />
          </div>
          <div className="img">
            <img src={six} alt="" />
          </div>
          <div className="img">
            <img src={seven} alt="" />
          </div>
          <div className="img">
            <img src={eight} alt="" />
          </div>
          <div className="img">
            <img src={nine} alt="" />
          </div>
          <div className="img">
            <img src={ten} alt="" />
          </div>


          </div>
          </div>

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

export default PhotoGallery
