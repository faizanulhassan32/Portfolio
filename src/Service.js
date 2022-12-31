import React from "react";
import "./App.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Skills & Expertise</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Jr. Python developer</h1>
                <p className="p service__text p__color">
                  Numpy, Pandas, OpenCV, <br/>Pytorch
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Front end developer</h1>
                <p className="p service__text p__color">
                  React, PHP, JavaScript, HTML, <br/> CSS, Bootstrap
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Graphic Designing</h1>
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
