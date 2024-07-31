import React from 'react'
import MeHero from '../components/MeHero'
import MeSkills from '../components/MeSkills'
import MeFact from '../components/MeFact'

import Footer from '../components/Footer.jsx';
function Me() {
  
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