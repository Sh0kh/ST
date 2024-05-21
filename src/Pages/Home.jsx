import React from 'react'
import Hero from '../components/Hero'
import Quote from '../components/Quote'
import Project from '../components/Project'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx';

function Home() {
  const location = useLocation();

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
        smoothTouch: 2,
      });
    },
    {
      dependencies: [location],
    }
  );
  return (
    <div  id="smooth-wrapper">
       <div id="smooth-content">
       <Hero/>
        <Quote/>
        <Project/>
        <Skills/>
        <AboutMe/>
        <Contacts/>
        <Footer/>
       </div>
    </div>
  )
}

export default Home