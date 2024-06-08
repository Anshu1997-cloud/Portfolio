import React from 'react'
import Navbar from '../Component/Navbar'
import HeroImg from "../Component/HeroImg";
import Footer from "../Component/Footer";
import Project from './Project';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import GitStats from './GitStats';


const Home = () => {
  return (
    <div>
     <div id='header'>
          <Navbar/>
      <HeroImg/>
     </div>
     <div id='about'>
        <About/>
     </div>
     <div id='project'>
         <Project/>
     </div>
     <div id='skills'>
          <Skills/>
     </div>
     <div id='contact'>
        <Contact/>
     </div>
     <div id='gitStat'>
         <GitStats/>
     </div>
     <Footer/>
    </div>
  )
}

export default Home