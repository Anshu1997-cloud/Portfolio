import "./HeroImgStyles.css";
import PortFolioPic3 from "../assets/PortFolioPic3.avif";
import Me from "../assets/Me.jpeg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
            <img className="into-img"
            src={PortFolioPic3} alt = "PortFolioPic3"
            />
            </div>
            <div className="content">
                <img  className = "img" src={Me} alt="Me.jpg"/>
                  <p>ANSHUMAN CHATURVEDI</p>
                  <h1>FRONT-END DEVELOPER.</h1>
                  <div>
                    <a href="#project" className="btn">Project</a>
                    <a href="#contact" className="btn btn-light">Contact</a>
                   <button className="lean-more">
                   <a href="https://maroon-violette-25.tiiny.site/" target="_blank">
                    <span class="circle" aria-hidden="true"></span>
                      <span class="icon arrow"></span>
                      <span class="button-text">Resume</span>
                      </a>
                   </button>
                  </div>
            </div>
    </div>
  )
}

export default HeroImg