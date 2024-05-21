import React from 'react'
import '../style/ProjectCard.css'

import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';


gsap.registerPlugin( ScrollTrigger);


function ProjectCard({title,img,text,btn,skills}) {

    // язык
    const { t } = useTranslation();
  // язык

useGSAP(()=>{
  gsap.fromTo('.project__card',
  {
      opacity:0,
  },
  {
     opacity:2,
      scrollTrigger: {
        trigger: '.project__card',
        start: 'top 65%',
        scrub: 5,
        // markers: true
      },
  }
)
})
  return (
    <div  data-speed="1.2" className='project__card'>
        <img src={img} alt="" />
        <div className='pr2'>
          <div className='skils__grid'>
              <h3>
                {skills}
              </h3>
              <h3>
                HTML
              </h3>
              <h3>
                CSS
              </h3>
              <h3>
                Java Script
              </h3>
          </div>
          <h2>
            {title}
          </h2>
          <p>
            {text}
          </p>
          <a target="_blank" rel="noopener noreferrer" href={btn}>
              {t('Live')}
          </a>
        </div>
    </div>
  )
}

export default ProjectCard