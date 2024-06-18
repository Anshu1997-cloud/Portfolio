import React, { Component, createFactory, createRef } from 'react'

import  './HeroImg5Styles.css'

class HeroImg5 extends Component{
    render(){
        return(
            <div className="hero-img3">
                  <div className="heading">
                      <h1>{this.props.heading}</h1>
                    
                      <div  >
                      <img src="https://ghchart.rshah.org/021F34/Anshu1997" alt="fdsdf" style={{width: "80%",display: "block", margin: "auto" }}/>
                      <br/>
                      <a href="https://github.com/Anshu1997-cloud" target="_blank">
                        <img src="https://github-readme-stats.vercel.app/api?username=Anshu1997&amp;show_icons=true&amp;hide=&amp;count_private=true&amp;title_color=0891b2&amp;text_color=ffffff&amp;icon_color=0891b2&amp;bg_color=000000&amp;hide_border=true&amp;show_icons=true" alt="Anshu1997 GitHub stats" />
                        </a>
                      </div>
                      <div>
                      <a href="https://github.com/Anshu1997-cloud" target="_blank">
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Anshu1997&amp;stroke=ffffff&amp;background=000000&amp;ring=0891b2&amp;fire=0891b2&amp;currStreakNum=ffffff&amp;currStreakLabel=0891b2&amp;sideNums=ffffff&amp;sideLabels=ffffff&amp;dates=ffffff&amp;hide_border=true"/>
                        </a>
                      </div>
                  </div>
            </div>
        )
    }
}
export default HeroImg5;