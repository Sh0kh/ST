import React from 'react'
import ConHero from '../components/ConHero.jsx'
import ConAll from '../components/ConAll.jsx'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom'
import Contacts from '../components/Contacts'

function Contact() {
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
        <div className='contr'></div>
        <ConHero/>
        </div>
    </div>
  )
}

export default Contact