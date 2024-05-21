import React from 'react'
import '../style/Hero.css'
import { useTranslation } from 'react-i18next';
import hero_1 from '../img/Hero1.png'
import hero_2 from '../img/Hero2.png'
import hero_3 from '../img/Hero3.png'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin( ScrollTrigger);
function Hero() {
      // язык
      const { t } = useTranslation();

// язык
// анимация 
const container = useRef();
useGSAP(() => {
    gsap.fromTo('.hero-title',
        {
            opacity:0,
            duration:1,
        },
        {
            opacity:1,
            duration:1.8,
            ease: "power1.inOut"
        }
    )
    gsap.fromTo('.hero-text',
        {
            opacity:0,
            duration:1,
        },
        {
            opacity:1,
            duration:2,
            ease: "power1.inOut"
        }
    )
    gsap.fromTo('.hero__btn',
        {
            opacity:0,
            duration:1,
        },
        {
            opacity:1,
            duration:2.2,
            ease: "power1.inOut"
        }
    )
    gsap.fromTo('.hero-subTitle',
        {
            opacity:0,
            duration:1,
        },
        {
            opacity:1,
            duration:2,
            ease: "power1.inOut"
        }
    )
    gsap.fromTo('.hero__img0',
        {
            opacity:0,
            duration:1,
        },
        {
            opacity:1,
            duration:2.2,
            ease: "power1.inOut"
        }
    )
 }
  
  );
  return (
    <section className='hero'>
        <div className='container' ref={container}>
           <div className='hero__wrapper'>
            <div className='hero__content'>
                    <h1 className='hero-title'  data-speed="1.3">
                        {t('Shokh')}  <span>{t('Developer')}</span>
                    </h1>
                    <p className='hero-text' data-speed="1.2">
                        {t('Text')}
                    </p>
                    <NavLink  data-speed="1.1" className='hero__btn' to='/Con'>
                        {t('con-me')}
                    </NavLink>
                </div>
                <div  className='hero__img'>
                    <img   data-speed="1.4" className='hero__img0' src={hero_1} alt="" />
                    <img  data-speed="1.9" className='hero__img1' src={hero_2} alt="" />
                    <img  data-speed="2.1" className='hero__img2' src={hero_3} alt="" />
                    <h2 className='hero-subTitle' data-speed="1.5">
                        <div></div>
                        {t('work')}
                    </h2>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Hero