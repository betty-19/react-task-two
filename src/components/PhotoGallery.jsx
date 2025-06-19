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
            <h2>Gallery</h2>
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
            <div className="f-logo">
              <img src={logo} alt="" />
            </div>
            <div className="information-contacts">
              <div className="information">
                <ul className='nav-links2'>
              <li className="nav-items2">MAIN</li>
              <li className="nav-items2">GALLERY</li>
              <li className="nav-items2">PROJECTS</li>
              <li className="nav-items2">CERTIFICATIONS</li>
              <li className="nav-items2">CONTACT</li>
            </ul>
              </div>
              <div className="contacts">
                <div className="address">
                  <i></i>
                  <p>1234 Sample Street Austin Texas 78704</p>

                </div>
                <div className="phone">
                  <i></i>
                  <p>51233332222</p>
                </div>
                <div className="emial">
                  <i></i>
                  <p>sampleemail@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
  )
}

export default PhotoGallery
