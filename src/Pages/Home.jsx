import React from 'react'
import Hero from '../components/Hero'
import Quote from '../components/Quote'
import Project from '../components/Project'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'

function Home() {
  return (
    <div>
        <Hero/>
        <Quote/>
        <Project/>
        <Skills/>
        <AboutMe/>
        <Contacts/>
    </div>
  )
}

export default Home