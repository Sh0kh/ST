import React from 'react'
import '../style/Project.css'
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Small components/ProjectCard';
import pr1 from '../img/port2.png'
import pr2 from '../img/Screenshot_1.png'
import pr3 from '../img/pr3.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';


gsap.registerPlugin( ScrollTrigger);


function Project() {
  // язык
    const { t } = useTranslation();
  // язык

  useGSAP(()=>{

    gsap.fromTo('.pr__line',
    {
        x:'120%'
    },
    {
        x:'0%',
        scrollTrigger: {
          trigger: '.pr__line',
          start: 'top 99%',
          scrub: 5,
          // markers: true
        },
    }
)
    gsap.fromTo('.proj1',
    {
        opacity:0,
    },
    {
       opacity:10,
        scrollTrigger: {
          trigger: '.proj1',
          start: 'top',

          scrub: 5,
          // markers: true
        },
    }
)
gsap.fromTo('.pr-title',
  {
      opacity:0,
  },
  {
     opacity:1,
      scrollTrigger: {
        trigger: '.pr-title',
        start: 'top',
       start: 'top 99%',
        scrub: 5,
        // markers: true
      },
  }
)
  })
  return (
    <section className='project'>
        <div className='container'>
            <div className='project__wrapper1'>
                <div data-speed="1.1" className='pr1'>
                    <h1 className='pr-title'>
                        <span>#</span>
                        {t('Project')}
                    </h1>
                    <div className='pr__line'>

                    </div>
                </div>
                <h2>
                  {/* {t('View all')}  */}
                </h2>
            </div>
            <div className='project__wrapper2'>
                <ProjectCard  img={pr1} skills='GSAP' title='NFT' text={`"${t('web1')}"`} btn='https://nft-st-prollax.netlify.app'/>
                <ProjectCard  img={pr2} skills='Vue' title='Oltin Vodiy' text={`"${t('web2')}"`} btn='https://oltinvodiyrestaurant.netlify.app/'/>
                <ProjectCard  img={pr3} skills='GSAP' title='Gallary' text={`"${t('web3')}"`} btn='https://st-gallary.netlify.app/'/>
            </div>
        </div>
    </section>
  )
}

export default Project