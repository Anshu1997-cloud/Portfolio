import './HeroImg4Styles.css';

import React, { Component } from 'react'

class HeroImg4 extends Component {
    render(){
        return (
            <div className="hero-img1">
               <div className="heading">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
                  <br></br>
                  <h4>{this.props.para}</h4>
                  <div className='info'>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anshuman-chaturvedi-716a8116a/">
                    <div class="contact_platformLinks__LOMaR">Linkedin</div>
                    </a>
                  </div>
                  <div  className='info'>
                  <a rel="noreferrer" target="_blank" href="https://github.com/Anshu1997-cloud">
                    <div class="contact_platformLinks__LOMaR">GitHub</div>
                    </a>
                  </div>
                  <div  className='info'>
                  <a rel="noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/#inbox">
                    <div class="contact_platformLinks__LOMaR">E-mail</div></a>
                  </div>
                  <div  className='info'>
                  <a rel="noreferrer" target="_blank" href="tel:+91-9109422793">
                    <div class="contact_platformLinks__LOMaR">Phone</div>
                    </a>
                  </div>
               </div>
             </div>
   )
    }
}

export default HeroImg4