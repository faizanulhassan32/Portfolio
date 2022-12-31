import React from "react";
import "./App.css";
import CV from './resume.pdf'
import aboutImg from "./img/simone-secci-49uySSA678U-unsplash.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__1">
            <h1 className="about__heading">About Me </h1>
            <div className="about__meta">
              <h2 className="about__text p__color">
              <br />
                It's Faizan here, currently a senior student of BSCS in FAST-NUCES.
                I've been pursuing my degree for over 3 years with vast experience 
                in multiple programming languages including C/C++, Java, Python and 
                javascript. Aiming towards professional web development, i am trying 
                to learn as much as possible. I've tried my best to utilize this knowledge 
                in the practical field in the form of freelancing. I've worked on different 
                platforms such as Fiverr and upwork for over 2 years in the field of web 
                development and graphic designing along with other smaller projects.
                Looking forward to learn new skills, expand my knowledge, leverage my learnings and make the best of my potential.
              </h2>

            {/* <div className="container"> */}
            <div className="row">
              <div className="col__3">
                <div className="service__box pointer">
                  <div className="service__meta">
                    <a href= {CV} download>
                      <button className="about btn pointer">Download CV</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}



            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
