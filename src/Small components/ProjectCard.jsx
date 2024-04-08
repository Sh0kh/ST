import React from 'react'
import '../style/ProjectCard.css'

import { useTranslation } from 'react-i18next';


function ProjectCard({title,img,text,btn,skills}) {

    // язык
    const { t } = useTranslation();
  // язык


  return (
    <div data-aos="flip-left" data-aos-duration="2000" className='project__card'>
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