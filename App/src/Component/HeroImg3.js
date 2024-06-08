import "./HeroImg3Styles.css";
import React, { Component} from 'react'

class HeroImg3 extends Component  {
    render(){
        return (
            <div  className="hero-img">
                 <div className="heading">
                 <h1>{this.props.heading}</h1>
                 <p>{this.props.text}</p>
                 <br/>
                 <div className="skills_toolContainer">
                   <div>
                   <a href="https://whatwg.org/">
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt=""/>
                    </a>
                   </div>
                   <div>
                   <a href="https://www.w3.org/">
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt=""/>
                    </a>
                   </div>
                   <div>
                   <a href="https://www.javascript.com/">
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt=""/>
                    </a>
                   </div>
                   <div>
                   <a href="https://reactjs.org/">
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt=""/>
                    </a>
                   </div>
                   <div >
                   <a href="https://nodejs.org/en/">
                    <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt=""/>
                    </a>
                   </div>
                   <div>
                    <a href = "https://www.mongodb.com"/>
                    <img src = "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt = ""/>
                   </div>
                 </div>
                 </div>
            </div>
          )
    }
}

export default HeroImg3