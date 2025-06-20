import React from 'react'
// import {logo} from '../assets/logo.png'
import project from '../assets/project.jpg'
import '../assets/LandingPage.css'
import About1 from '../assets/about1.jpg'
import About2 from '../assets/about2.jpg'
import About3 from '../assets/about3.jpg'
function LandingPage() {
  return (
    <div className="wrapper">
      {/* <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className='nav-links'>
          <li className="nav_items">MAIN</li>
          <li className="nav_items">GALLERY</li>
          <li className="nav_items">PROJECTS</li>
          <li className="nav_items">CERTIFICATIONS</li>
          <li className="nav_items">CONTACT</li>
        </ul>
      </div> */}

      <div className="project-lorum">
        <div className="left">
          <div className="project-lorum-p">
            <p className='project'>PROJECT</p>
          <p className='Lorum'>Lorum</p>
          </div>
          
          <div className="arrow-buttons">
            <button className="left-arrow">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button className="right-arrow">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="slide-numbers">
            <div className="prev">
              <p>0 <br/> 1 </p>
              {/* <p>1</p> */}
            </div>
            <i class="bi bi-slash-lg"></i>
            <p>02</p>
          </div>



        </div>
        <div className="right">
          <div className="project-img">
            <img src={project} alt="" />
          <div className="view-project">
            <a href="">View Project</a>
            <i class="bi bi-arrow-right"></i>
          </div></div>
          
          
        </div>

      </div>
      <div className="about">
        <div className="left-about">
          <img id="about1" src={About1} alt="" />
          <img id="about2" src={About2} alt="" />
        </div>
        <div className="middle-about">
          <img id="about3" src={About3} alt="" />
        </div>
        <div className="right-about">
          <p>About</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
            <div className="view-project2">
            <a href="">Read More</a>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
