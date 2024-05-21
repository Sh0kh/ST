import React from 'react'
import '../style/MeHero.css'
import { useTranslation } from 'react-i18next';
import me1 from '../img/me1.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger);
function MeHero() {

              // язык
              const { t } = useTranslation();
        
        // язык
        useGSAP(() => {
            gsap.fromTo('.meHero-title',
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
            gsap.fromTo('.meHero-title2',
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
            gsap.fromTo('.MeHero__content',
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
          

         }
          
          );

  return (
    <section className='Mehero'>
        <div className='container'>
            <h1 data-speed="1.2" className='meHero-title'>
                <span>/</span> {t('About-Me')}     
            </h1>
            <div className='MeHero__wrapper'>
                <div data-speed="1.2" className='MeHero__content'>
                    <h2  className='meHero-title2'>
                        {t('Who am i')}
                    </h2>
                    <h2 >
                        {t('Hello')}
                    </h2>
                    <p >
                        {t('A-me')}
                    </p>
                    <p >
                        {t('A-me2')}
                    </p>
                </div>
                <div>
                <div  className='me__img'>
                    <img data-speed="1.7" className='me__img1' src={me1} alt="" />
                    <img data-speed="1.5" className='me__img2' src={me2} alt="" />
                    <img data-speed="2.1" className='me__img3' src={me3} alt="" />
                    <img data-speed="2.5" className='me__img4' src={me2} alt="" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeHero