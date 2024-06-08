import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import PortfolioReact from '../assets/PortfolioReact.jpeg';
import heroReact from '../assets/heroReact.png';
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>I am a react front-end developer. I create
            responsive secure websites.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={PortfolioReact} className="img1" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={heroReact} className="img1" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent