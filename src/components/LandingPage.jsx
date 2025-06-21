import React from 'react'
import project from '../assets/images/project.jpg'
import '../assets/css/LandingPage.css'
import About1 from '../assets/images/about1.jpg'
import About2 from '../assets/images/about2.jpg'
import About3 from '../assets/images/about3.jpg'
import P1 from '../assets/images/p1.png'
import P2 from '../assets/images/p2.png'
import P3 from '../assets/images/p3.png'
import P4 from '../assets/images/p4.png'
import P5 from '../assets/images/p5.png'
import ContactImg from '../assets/images/contact-img.jpg';
import Footer from './Footer'
import Nav from './Nav.jsx'

function LandingPage() {
  return (
   
     
      <div className="wrapper"> <Nav />
        <div className="content">
          
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
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="mission-statement">
            <p className='mission-title'>Main Focus/Mission Statement</p>
            <div className="missions">
              <div className="mission-one">
                <p className='number'>1</p>
                <p>Lorem ipsum dolor sit amet,<br/>
                   consectetur adipiscing elit.<br/>
                    Sed efficitur, lectus et<br/> facilisis placerat.</p>
              </div>
              <div className="mission-two">
                <p className='number'>2</p>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed efficitur, lectus et<br/> facilisis placerat,
                   magna mauris porttitor<br/> tortor,
                    a auctor est felis ut nisl.</p>
              </div>
            </div>
          </div>

          <div className="our-projects">
            <p className='project-title'>Our Projects</p>
            <div className="project-grid">
              <div className="grid-item item1">
                <img src={P1} alt="project-1" />
                <div className="sample-project">
                  <h1>Sample<br />Project</h1>
                  <div className="view-project2">
                    <a href="">View more</a>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>

              <div className="grid-item item2">
                <img src={P2} alt="project-2" />
                <div className="sample-project">
                  <h1>Sample<br />Project</h1>
                  <div className="view-project2">
                    <a href="">View more</a>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>

              <div className="grid-item item3">
                <img src={P3} alt="project-3" />
                <div className="sample-project">
                  <h1>Sample<br />Project</h1>
                  <div className="view-project2">
                    <a href="">View more</a>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>

              <div className="grid-item item4">
                <img src={P4} alt="project-4" />
                <div className="sample-project">
                  <h1>Sample<br />Project</h1>
                  <div className="view-project2">
                    <a href="">View more</a>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>

              <div className="grid-item item5">
                <img src={P5} alt="project-5" />
                <div className="sample-project">
                  <h1>Sample<br />Project</h1>
                  <div className="view-project2">
                    <a href="">View more</a>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-projects">
              <a href="">All projects</a>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="contact-us">
            <p>Contact Us</p>
            <div className="contact">
              <form action="">
                <input type="text" placeholder='Name' />
                <input type="number" placeholder='Phone Number' />
                <input type="email" placeholder='E-mail' />
                <input type="text" placeholder='Interested In' />
                <textarea rows='5' columns='10' placeholder='Message'></textarea>
              </form>
              <div className="contact-img">
                <img src={ContactImg} alt="" />
              </div>
            </div>
            <div className="send-email">
              <a href="">Send Email</a>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div> {/* end content */}
      
      <Footer />
      </div> 
      
  )
}

export default LandingPage
