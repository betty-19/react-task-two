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
