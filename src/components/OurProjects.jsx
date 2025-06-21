import React from 'react';
import '../assets/css/OurProjects.css';
import ourP1 from '../assets/images/ourP1.png';
import ourP2 from '../assets/images/ourP2.png';
import ourP3 from '../assets/images/ourP3.png';
import Footer from './Footer';
import  Nav from './Nav'

function OurProjects() {
  return (
   
   
    <div className="our-projects-section">

     <Nav/>  
     <div className="our-projects-wrapper">
        <p>
          Our<br /><span>Project</span>
        </p>

        <div className="our-projects">
          {[ourP1, ourP2, ourP3].map((img, index) => (
            <div className="project" key={index}>
              <div className="project-img">
                <img src={img} alt={`Project ${index + 1}`} />
              </div>
              <div className="project-info">
                <p>Sample Project</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="view-more">
                  <a href="">View More</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
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
   <Footer/> </div>
    
   
    
  );
}

export default OurProjects;
