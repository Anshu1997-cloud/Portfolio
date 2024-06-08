import "./FooterStyles.css";
import React from 'react'
import { FaFacebook,  FaGithub, FaHome, FaLinkedin,  FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
            <div className="location">
              <FaHome size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
              <div>
                 <p>Satna, Madhya-Pradesh</p>
              </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
             9109422793</h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
                 anshumanchaturvedi91@gmail.com</h4>
            </div>
         </div>
         <div className="right">
            <h4>About Me....</h4>
            <p>A front-end developer with a
                  specialization in designing,
                  developing and implementing
                  applications and solutions using a
                  range of technologies. Seeking to
                  leverage broad development
                  experience and hand-on
                  technical expertise in a
                  challenging role as a Full-Stack
                  Developer
            </p>
            <div className="social">
            <FaFacebook size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
            <FaGithub size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
            <FaLinkedin size={20} style ={{color: "#fff" , marginRight: '2rem'}}/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer