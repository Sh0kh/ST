import React from 'react'
import MeHero from '../components/MeHero'
import MeSkills from '../components/MeSkills'
import MeFact from '../components/MeFact'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx';
function Me() {
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
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <MeHero />
        <MeSkills />
        <MeFact />
        <Footer/>
      </div>
    </div>
  )
}

export default Me