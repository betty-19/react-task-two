import React from 'react';
import '../assets/css/OurProjects.css';
import ourP1 from '../assets/ourP1.png';
import ourP2 from '../assets/ourP2.png';
import ourP3 from '../assets/ourP3.png';
import Footer from './Footer';
import  Nav from './Nav'

function OurProjects() {
  return (
    <>
   
    <div className="our-projects-section">
     <Nav/>  <div className="our-projects-wrapper">
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
      </div>
   <Footer/> </div>
    
    </>
    
  );
}

export default OurProjects;
