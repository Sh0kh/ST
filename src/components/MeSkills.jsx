import React from 'react'
import '../style/MeSkills.css'

import { useTranslation } from 'react-i18next';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger);
function MeSkills() {
      // язык
      const { t } = useTranslation();
        // язык
        useGSAP(()=>{
            gsap.fromTo('.MeSkills-title',
            {
                opacity:0,
            },
            {
               opacity:2,
                scrollTrigger: {
                  trigger: '.MeSkills-title',
                  start: 'top 65%',
                  scrub: 5,
                  // markers: true
                },
            }
          )
            gsap.fromTo('.skills__card',
            {
                opacity:0,
            },
            {
               opacity:2,
                scrollTrigger: {
                  trigger: '.skills__card',
                  start: 'top 70%',
                  scrub: 5,
                  // markers: true
                },
            }
          )

        })
  return (
    <section className='MeSkills'>
        <div className='container'>
            <h1 data-speed="1.2" className='MeSkills-title'>
                <span>#</span>
                {t('skills')}
            </h1>
            <div className='MeSkills__wrapper'>
            <div data-speed="1.3"  className='skills__card'>
                            <h2>    
                                {t('Language')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    Python
                                </span>
                                <span>
                                    Java Script
                                </span>
                            </div>
                    </div>
                    <div data-speed="1.4"  className='skills__card'>
                            <h2>    
                                {t('Tools')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    VSCode
                                </span>
                                <span>
                                    Figma
                                </span>
                                <span>
                                    Git
                                </span>
                                <span>
                                    Font
                                </span>
                            </div>
                    </div>
                    <div data-speed="1.5"  className='skills__card'>
                            <h2>    
                                {t('Other')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    HTML
                                </span>
                                <span>
                                    CSS
                                </span>
                                <span>
                                    SCSS
                                </span>
                            </div>
                    </div>
                    <div data-speed="1.6"  className='skills__card'>
                            <h2>    
                                {t('Frameworks')}
                            </h2>
                            <div className='card__wrapper'>
                            <span>
                                    React.js
                                </span>
                                <span>
                                    Next.js
                                </span>
                                <span>
                                    Vue.js
                                </span>
                                <span>
                                    Nuxt.js
                                </span>
                            </div>
                    </div> 
            </div>
        </div>
    </section>
  )
}

export default MeSkills