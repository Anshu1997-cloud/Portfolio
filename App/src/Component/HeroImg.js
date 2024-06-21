import "./HeroImgStyles.css";
import PortFolioPic3 from "../assets/PortFolioPic3.avif";
import Me from "../assets/Me.jpeg";
import React from "react";
import Resume from '../assets/Anshuman_CV.pdf'
import { Link} from "react-router-dom";

const HeroImg = () => {

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1MJIC406mU5dsofZccSmzSF43yqobkD5k/view?usp=sharing", "_blank");
  };
  
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={PortFolioPic3} alt="PortFolioPic3" />
      </div>
      <div className="content">
        <img className="img" src={Me} alt="Me.jpg" />
        <p>ANSHUMAN CHATURVEDI</p>
        <h1>FRONT-END DEVELOPER.</h1>
        <div>
          <a href="#project" className="btn">
            Projects
          </a>
          <a href="#contact" className="btn btn-light">
            Contact
          </a>
          <button
            onClick={handleResumeClick } className="btn"
          >
            <a
              href={Resume}
              target="_blank"
              download="Anshuman_Resume.pdf"
              className="lean-more"
            >
              <span className="button-text">Resume</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
