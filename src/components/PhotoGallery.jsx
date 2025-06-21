import React from 'react'
 import logo from '../assets/images/logo.png'
 import '../assets/css/PhotoGallery.css'
 import one from '../assets/images/one.png';
 import two from '../assets/images/two.jpg';
 import three from '../assets/images/three.jpg';
 import four from '../assets/images/four.jpg';
 import five from '../assets/images/five.jpg';
 import six from '../assets/images/six.jpg';
 import seven from '../assets/images/seven.jpg';
 import eight from '../assets/images/eight.jpg';
 import nine from  '../assets/images/nine.jpg';
 import ten from '../assets/images/ten.jpg';
 import Nav from './Nav';
 import Footer from './Footer';



function PhotoGallery() {
  return (
 
   
    <div className="wrapper">
          <Nav/> 
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

        <Footer/>   
        </div>
       
       
    
  )
}

export default PhotoGallery
