import React from 'react'
import '../style/AboutMe.css'
import { useTranslation } from 'react-i18next';
import me1 from '../img/me1.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'
import { NavLink } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger);


function AboutMe() {
    
     // язык
     const { t } = useTranslation();
 // язык

 useGSAP(()=>{
    gsap.fromTo('.me__line',
{
    x:'180%'
},
{
    x:'0%',
    scrollTrigger: {
      trigger: '.me__line',
      start: 'top 99%',
      scrub: 4,
    //   markers: true
    },
}
)
    gsap.fromTo('.me__content',
{
    opacity:0,
},
{
    opacity:2,
    scrollTrigger: {
      trigger: '.me__content',
      start: 'top 70%',
      scrub: 4,
    //   markers: true
    },
}
)
})
  return (
    <section className='Me'>
        <div className='container'>
            
            <div className='me__grid'> 
                <div data-speed="1.1" className='me__content'>
                    <div  className='me__wrapper'>
                        <h1>
                            <span>#</span>
                            {t('About-Me')}
                        </h1>
                        <div className='me__line'>

                        </div>
                    </div>  
                    <h2 >
                        {t('Hello')}
                    </h2>
                    <p className='me__text1'>
                        {t('A-me')}
                    </p>
                    <p > 
                        {t('A-me2')}
                    </p>
                    <NavLink  className='me__btn' to="/Me">
                        {t('Read more')}    
                    </NavLink>
                </div>
                <div  className='me__img'>
                    <img data-speed="1.7" className='me__img1' src={me1} alt="" />
                    <img data-speed="1.5" className='me__img2' src={me2} alt="" />
                    <img data-speed="2.1" className='me__img3' src={me3} alt="" />
                    <img data-speed="2.5" className='me__img4' src={me2} alt="" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AboutMe