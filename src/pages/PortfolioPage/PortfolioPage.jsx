// import './MenuList.css';
// import MenuListItem from '../MenuListItem/MenuListItem';
import "./PortfolioPage.css";
import { useState, useEffect, useContext } from "react";
import { MouseContext } from "../../context/mouse-context";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function PortfolioPage() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [messageResult, setMessageResult] = useState("");

  const buttonStyle = {
    "--bs-btn-padding-y": ".25rem",
    "--bs-btn-padding-x": ".5rem",
    "--bs-btn-font-size": ".75rem",
    "--bs-btn-bg": "#6C969D",
    "--bs-btn-border-color": "transparent",
    "--bs-btn-color": "white",
    "--bs-btn-hover-bg": "white",
    "--bs-btn-hover-color": "#6C969D",
    "--bs-btn-hover-border-color": "#6C969D",
    "cursor": "none"
  };

  const btnGetInTouch = {
    "--bs-btn-bg": "#6C969D",
    "--bs-btn-border-color": "transparent",
    "--bs-btn-color": "white",
    "--bs-btn-hover-bg": "white",
    "--bs-btn-hover-color": "#6C969D",
    "--bs-btn-hover-border-color": "#6C969D",
  };

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4vndmxf",
        "template_5eu99da",
        e.target,
        "0XBORLU5d3HUCENLn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageResult("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <main className="overflow-x-hidden px-5" id="home">
        <section className="section-landing-page">
          <h1 className="name-title">
            <strong>Tony Lo</strong>
          </h1>
          <h4 className="sub-title">
            ROBOTICS | SOFTWARE DEVELOPMENT | WEB DEVELOPER
          </h4>
          <h5>
            <span className="hello">Hello!</span> Join me as I explore
            opportunities at the intersection of engineering and software
            development, delve into my diverse projects that reflect my
            commitment to innovation and excellence in both fields. Let's
            connect and explore the possibilities together!
          </h5>
        </section>
        {/* <h1>Welcome to my portfolio!</h1>
        <div>
          My name is Tony Lo, and I'm excited to have you here. While I'm
          diligently working on putting the finishing touches on my website, you
          can still explore my work and learn more about my professional
          journey. To stay connected and updated on my progress, feel free to
          connect with me on LinkedIn or explore my coding projects on GitHub.
          Just click on the links below to visit my profiles and let's connect!"
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/tonyhongyaulo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://github.com/tonyhylo"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div> */}
        <section id="about" className="">
          <h1 className="headings">About</h1>
          <div className="about-text fs-5">
            <p>
              As a seasoned professional with almost a decade of experience in
              mechanical engineering and robotics, my journey into the world of
              technology is a lifelong journey. My early fascination with
              robotics became a reality after growing a career in the
              manufacturing and automation industry.
            </p>
            <p>
              I thought I had it all, but I still wanted a career at the
              intersection of mechanical engineering and software development.
              From mechanical design design to programming robots, to eventually
              software development, my growth reflects what I have been
              passionate about since my youth. Throughout my experience I enjoy
              solving problems that require multiple facets where I solve them
              with software applications in tandem with my engineering
              background.
            </p>
            <p>
              Join me on this dynamic exploration of both my realities, where
              curiosity meets expertise, and let's shape the future together!
            </p>
            <a
              className="btn btn-primary"
              href="#contact"
              role="link"
              style={btnGetInTouch}
              id="btn-get-in-touch"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            >
              Get In Touch!
            </a>
          </div>
        </section>
        <section id="experience">
          <h1 className="headings">Experience</h1>
          <div className="experience-body">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img>   */}
                  <div class="card-body">
                    <h5 class="card-title">Epson Canada</h5>
                    <h6 class="card-subtitle">2021 - Present</h6>
                    <p class="card-text">
                      As a Systems Designer, I help drive business decisions in
                      productizing industry turnkey products. I provide hands on
                      experience in developing industrial automation
                      applications, overseeing all system aspects including
                      electrical, mechanical, and software. I work with
                      shareholders and customers in collaboration to perfect the
                      quality of my work.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                    <h5 class="card-title">Freelance Developer</h5>
                    <h6 class="card-subtitle">2023 - Present</h6>
                    <p class="card-text">
                      I work with small businesses and independent owners to
                      bring their needs onto the online platform. From domain
                      registration to deployment, I cover all the bases. My
                      specialties are SPA in React, and my experience includes
                      WordPress and Wix.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Slacan Industries</h5>
                  <h6 class="card-subtitle">2019 - 2021</h6>
                  <p class="card-text">
                    As an Automation Systems Engineer, I identified processes
                    for robotic automation. I then selected hardware/software,
                    designed the automation cell, and integrated all aspects
                    including electrical, mechanical, and software requirements.
                    I have successfully commissioned cells with budgets up to
                    $1M.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Slacan Industries</h5>
                  <h6 class="card-subtitle">2017 - 2019</h6>
                  <p class="card-text">
                    As a Junior Mechanical Engineer, I used FMEA to identify
                    root cause to manufacturing process failures, and design
                    failures. I used SolidWorks and AutoCAD to verify product
                    assemblies, and new product designs. I commissioned a
                    robotic vision system to provide first off quality checks.
                  </p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </section>
        <section id="portfolio">
          <h1 className="headings">Portfolio</h1>
          <div className="portfolio-body">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                    <h5 class="card-title">PLANMYPATH</h5>
                    <p class="card-text">
                      PLANMYPATH is a platform where users can share travel
                      plans with each other. It is a knowledge base for
                      travellers can tailor their plans specific to their need.
                      On PLANMYPATH, users can create new Paths, and find new
                      Paths by tag/country. Upcoming features include sharing,
                      favouriting, rating, and commenting. This is the go to
                      place when there is a destination in mind, and you are
                      looking for inspiration of a certified stop to add to your
                      Path.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/tonyhylo/PlanMyPath"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      onClick={() => cursorChangeHandler("clicked")}
                      onMouseOut={() => cursorChangeHandler("hovered")}
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm me-2"
                        style={buttonStyle}
                        disabled
                      >
                        CODE
                      </button>
                    </a>
                    <a
                      // target="_blank"
                      // href="https://planmypath.herokuapp.com/"
                      // rel="noopener noreferrer"
                      // onMouseEnter={() => cursorChangeHandler("hovered")}
                      // onMouseLeave={() => cursorChangeHandler("")}
                      // onClick={() => cursorChangeHandler("clicked")}
                      // onMouseOut={() => cursorChangeHandler("hovered")}
                      aria-disabled="true"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        style={buttonStyle}
                        disabled
                      >
                        LIVE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                    <h5 class="card-title">GarageGuru</h5>
                    <p class="card-text">
                      GarageGuru is simply a social media web-app dedicated for
                      automotive hobbists. A project built by enthusiastic
                      developers who felt that users needed a dedicated platform
                      to showcase their passion projects. GarageGuru is an app
                      to post, share, and discover cars amongst likeminded
                      individuals. There is no clutter, no distractions. See
                      only the content you enjoy and want to see!
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/tonyhylo/PlanMyPath"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      onClick={() => cursorChangeHandler("clicked")}
                      onMouseOut={() => cursorChangeHandler("hovered")}
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mt-4 me-2" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                      >
                        CODE
                      </button>
                    </a>
                    <a
                      // target="_blank"
                      // href="https://planmypath.herokuapp.com/"
                      // rel="noopener noreferrer"
                      // onMouseEnter={() => cursorChangeHandler("hovered")}
                      // onMouseLeave={() => cursorChangeHandler("")}
                      // onClick={() => cursorChangeHandler("clicked")}
                      // onMouseOut={() => cursorChangeHandler("hovered")}
                      aria-disabled="true"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mt-4" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                        disabled
                      >
                        LIVE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                    <h5 class="card-title">Baby Beeznz</h5>
                    <p class="card-text">
                      Baby Beeznz is a database designed for new parents to keep
                      track of their new baby. The application allows users to
                      log feedings and dirty diapers.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/tonyhylo/Baby-Beeznz"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      onClick={() => cursorChangeHandler("clicked")}
                      onMouseOut={() => cursorChangeHandler("hovered")}
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mt-5 me-2" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                      >
                        CODE
                      </button>
                    </a>
                    <a
                      // target="_blank"
                      // href="https://babybeeznz.herokuapp.com/"
                      // rel="noopener noreferrer"
                      // onMouseEnter={() => cursorChangeHandler("hovered")}
                      // onMouseLeave={() => cursorChangeHandler("")}
                      // onClick={() => cursorChangeHandler("clicked")}
                      // onMouseOut={() => cursorChangeHandler("hovered")}
                      aria-disabled="true"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mt-5" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                        disabled
                      >
                        LIVE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  {/* <img src="..." class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                    <h5 class="card-title">Battleship</h5>
                    <p class="card-text">
                      Battleship is a game against two players. This game is
                      against the computer. You are able to move the battleships
                      anywhere on the grid, except diagonally. Once finished,
                      both players take turns to guess where the opponent's
                      battleships are. The first player to successfully destroy
                      all of their opponent's battleships is the winner.
                    </p>
                    <a
                      target="_blank"
                      href="https://github.com/tonyhylo/Project-Battleship"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      onClick={() => cursorChangeHandler("clicked")}
                      onMouseOut={() => cursorChangeHandler("hovered")}
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm me-2" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                      >
                        CODE
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://tonyhylo.github.io/Project-Battleship/"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                      onClick={() => cursorChangeHandler("clicked")}
                      onMouseOut={() => cursorChangeHandler("hovered")}
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm" // position-absolute bottom-0 start-10 mb-3"
                        style={buttonStyle}
                      >
                        LIVE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact"></div>
      </main>
      <div class="hidden-footer">
        <h1 className="contact-heading">Contact</h1>
        <form id="contact-form" className="mx-5" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="from-name"
              placeholder="Your name"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            ></input>
            <label for="exampleFormControlInput1" class="form-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="email@example.com"
              name="from-email"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-left-text-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
              </svg>
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Hi Tony ..."
              name="from-message"
              rows="3"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            ></textarea>
            <p></p>
            <button
              type="submit"
              class="btn btn-primary fs-5"
              style={buttonStyle}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            >
              SEND MESSAGE
            </button>
            <div>{messageResult}</div>
          </div>
        </form>
        <footer class="tl-footer">
          <div class="icons-footer">
            <a
              href="https://www.linkedin.com/in/tonyhongyaulo/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-linkedin icons"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://github.com/tonyhylo"
              rel="noopener noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => cursorChangeHandler("clicked")}
              onMouseOut={() => cursorChangeHandler("hovered")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-github icons"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <div class="d-flex justify-content-center">
              <hr />
            </div>
            <div>
              <p>
                Designed & developed by Tony Lo using HTML, CSS, JavaScript, and
                React. Hosted on Firebase.
              </p>
              <p>&copy; 2025 Tony Lo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
