import React from 'react'

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
 import Nav from '../components/Nav';
 import Footer from '../components/Footer';



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
          <div className="slide-numbers">
            <div className="prev">
              <p>0 <br/> 1 </p>
              {/* <p>1</p> */}
            </div>
            <i class="bi bi-slash-lg"></i>
            <p>02</p>
                <div className="arrow-buttons">
            <button className="left-arrow">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button className="right-arrow">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          </div>
          </div>

        <Footer/>   
        </div>
       
       
    
  )
}

export default PhotoGallery
