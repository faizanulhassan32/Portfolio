import React from "react";
import "./App.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

        <h3 className="home__text pz__10">Skills & Expertise</h3>
        <br/>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="home__text pz__10">Jr. Python Developer</h1>
                <p className="p service__text p__color">
                  Numpy, Pandas, OpenCV, <br/>Pytorch
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
              <h1 className="home__text pz__10">Front End Developer</h1>
                <p className="p service__text p__color">
                  React, PHP, JavaScript, HTML, <br/> CSS, Bootstrap
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
              <h1 className="home__text pz__10">Graphic Designing</h1>
                <p className="p service__text p__color">
                  Adobe illustrator, InDesign, <br/> Photoshop, Canva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
