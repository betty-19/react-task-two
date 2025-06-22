import project from "../assets/images/project.jpg"
import "../assets/css/LandingPage.css"
import About1 from "../assets/images/about1.jpg"
import About2 from "../assets/images/about2.jpg"
import About3 from "../assets/images/about3.jpg"
import P1 from "../assets/images/p1.png"
import P2 from "../assets/images/p2.png"
import P3 from "../assets/images/p3.png"
import P4 from "../assets/images/p4.png"
import P5 from "../assets/images/p5.png"
import ContactImg from "../assets/images/contact-img.jpg"
import Footer from "../components/Footer.jsx"
import Nav from "../components/Nav.jsx"

function LandingPage() {
  return (
    <div className="lp-wrapper">
      <Nav />
      <div className="lp-content">
        <div className="lp-project-lorum">
          <div className="lp-left">
            <div className="lp-project-lorum-p">
              <p className="lp-project">PROJECT</p>
              <p className="lp-lorum">Lorum</p>
            </div>

            <div className="lp-arrow-buttons">
              <button className="lp-left-arrow">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="lp-right-arrow">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="lp-slide-numbers">
              <div className="lp-prev">
                <p>
                  0 <br /> 1{" "}
                </p>
              </div>
              <i className="bi bi-slash-lg"></i>
              <p>02</p>
            </div>
          </div>

          <div className="lp-right">
            <div className="lp-project-img">
              <img src={project || "/placeholder.svg"} alt="" />
              <div className="lp-view-project">
                <a href="">View Project</a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="lp-about">
          <div className="lp-left-about">
            <img id="lp-about1" src={About1 || "/placeholder.svg"} alt="" />
            <img id="lp-about2" src={About2 || "/placeholder.svg"} alt="" />
          </div>
          <div className="lp-middle-about">
            <img id="lp-about3" src={About3 || "/placeholder.svg"} alt="" />
          </div>
          <div className="lp-right-about">
            <p>About</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="lp-view-project2">
              <a href="">Read More</a>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="lp-mission-statement">
          <p className="lp-mission-title">Main Focus/Mission Statement</p>
          <div className="lp-missions">
            <div className="lp-mission-one">
              <p className="lp-number">1</p>
              <p>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Sed efficitur, lectus et
                <br /> facilisis placerat.
              </p>
            </div>
            <div className="lp-mission-two">
              <p className="lp-number">2</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Sed efficitur, lectus et
                <br /> facilisis placerat, magna mauris porttitor
                <br /> tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>

        <div className="lp-our-projects">
          <p className="lp-project-title">Our Projects</p>
          <div className="lp-project-grid">
            <div className="lp-grid-item lp-item1">
              <img src={P1 || "/placeholder.svg"} alt="project-1" />
              <div className="lp-sample-project">
                <h1>
                  Sample
                  <br />
                  Project
                </h1>
                <div className="lp-view-project3">
                  <a href="">View more</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="lp-grid-item lp-item2">
              <img src={P2 || "/placeholder.svg"} alt="project-2" />
              <div className="lp-sample-project">
                <h1>
                  Sample
                  <br />
                  Project
                </h1>
                <div className="lp-view-project3">
                  <a href="">View more</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="lp-grid-item lp-item3">
              <img src={P3 || "/placeholder.svg"} alt="project-3" />
              <div className="lp-sample-project">
                <h1>
                  Sample
                  <br />
                  Project
                </h1>
                <div className="lp-view-project3">
                  <a href="">View more</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="lp-grid-item lp-item4">
              <img src={P4 || "/placeholder.svg"} alt="project-4" />
              <div className="lp-sample-project">
                <h1>
                  Sample
                  <br />
                  Project
                </h1>
                <div className="lp-view-project3">
                  <a href="">View more</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="lp-grid-item lp-item5">
              <img src={P5 || "/placeholder.svg"} alt="project-5" />
              <div className="lp-sample-project">
                <h1>
                  Sample
                  <br />
                  Project
                </h1>
                <div className="lp-view-project3">
                  <a href="">View more</a>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="lp-all-projects">
            <a href="">All projects</a>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>

        <div className="lp-contact-us">
          <p>Contact Us</p>
          <div className="lp-contact">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Interested In" />
              <textarea rows={5} cols={10} placeholder="Message"></textarea>
            </form>
            <div className="lp-contact-img">
              <img src={ContactImg || "/placeholder.svg"} alt="" />
            </div>
          </div>
          <div className="lp-send-email">
            <a href="">Send Email</a>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>{" "}
      {/* end content */}
      <Footer />
    </div>
  )
}

export default LandingPage
