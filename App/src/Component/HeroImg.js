import "./HeroImgStyles.css";
import PortFolioPic3 from "../assets/PortFolioPic3.avif";
import Me from "../assets/Me.jpeg";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
            <img className="into-img"
            src={PortFolioPic3} alt="PortFolioPic3"
            />
            </div>
            <div className="content">
                <img className="img" src={Me} alt="Me.jpg"/>
                  <p>ANSHUMAN CHATURVEDI</p>
                  <h1>FRONT-END DEVELOPER.</h1>
                  <div>
                    <a href="#project" className="btn">Project</a>
                    <a href="#contact" className="btn btn-light">Contact</a>
                   <button className="lean-more">
                   <a href="https://drive.google.com/file/d/1spZFAoiTXMPaTUCk2qSnvi46c5IjvN0o/view" target="_blank" download="Anshuman_Chaturvedi_Resume.pdf">
                    <span className="circle" aria-hidden="true"></span>
                      <span className="icon arrow"></span>
                      <span className="button-text">Resume</span>
                      </a>
                   </button>
                  </div>
            </div>
    </div>
  )
}

export default HeroImg;