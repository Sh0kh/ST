import React from 'react'
import '../style/Skills.css'
// import skills1 from '../img/Hero2.png'
// import skills2 from '../img/Hero3.png'
// import skills3 from '../img/skills.png'
// import skills4 from '../img/skills2.png'
import { useTranslation } from 'react-i18next';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';


gsap.registerPlugin( ScrollTrigger);


function Skills() {

     // язык
        const { t } = useTranslation();
    // язык

    useGSAP(()=>{
        gsap.fromTo('.skills__line',
    {
        x:'180%'
    },
    {
        x:'0%',
        scrollTrigger: {
          trigger: '.skills__line',
          start: 'top 99%',
          scrub: 4,
        //   markers: true
        },
    }
)
    })
  return (
    <section className='skills'>
        <div className='container'>
            <div data-speed="1.1" className='skills__title'>
                <h1>
                    <span>#</span>
                    {t('Skills')}
                </h1>
                <div className='skills__line'>

                </div>

            </div>
                <div 
                className='skills__content'>
                    <div className='skills-content'>
                        <div data-speed="1.15" className='skills-card'>
                            <h2>
                                HTML
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-html'></div>
                                </div>
                                <h3>
                                    90<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.15" className='skills-card'>
                            <h2>
                                СSS
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-css'></div>
                                </div>
                                <h3>
                                    95<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.20" className='skills-card'>
                            <h2>
                                SСSS
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-css'></div>
                                </div>
                                <h3>
                                    95<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.20" className='skills-card'>
                            <h2>
                                JavaScript
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-js'></div>
                                </div>
                                <h3>
                                    75<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.25" className='skills-card'>
                            <h2>
                                React
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-react'></div>
                                </div>
                                <h3>
                                    75<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.25" className='skills-card'>
                            <h2>
                                Redux
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-react'></div>
                                </div>
                                <h3>
                                    75<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.30" className='skills-card'>
                            <h2>
                                Next.js
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-react'></div>
                                </div>
                                <h3>
                                    70<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.30" className='skills-card'>
                            <h2>
                                Vue.js
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-vue'></div>
                                </div>
                                <h3>
                                    70<span>%</span>
                                </h3>
                            </div>
                        </div>
                        <div data-speed="1.35" className='skills-card'>
                            <h2>
                                Nuxt.js
                            </h2>
                            <div className='skills-grid'>
                                <div className='skills-level'>
                                    <div className='skills-vue'></div>
                                </div>
                                <h3>
                                    70<span>%</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Skills