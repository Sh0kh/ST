import React from 'react'
import Soon from '../components/Soon'
import AllProject from '../components/AllProject'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx';
function Work() {
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
        <AllProject/>
        <Footer/>
        </div>
    </div>
  )
}

export default Work