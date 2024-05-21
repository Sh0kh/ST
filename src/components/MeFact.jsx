import React from 'react'
import '../style/MeFact.css'
import { useTranslation } from 'react-i18next';

import me1 from '../img/Hero2.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger);

function MeFact() {
       // язык
       const { t } = useTranslation();
        // язык
        useGSAP(()=>{
            gsap.fromTo('.meFact-title',
            {
                opacity:0,
            },
            {
               opacity:2,
                scrollTrigger: {
                  trigger: '.meFact-title',
                  start: 'top 65%',
                  scrub: 5,
                  // markers: true
                },
            }
          )
            gsap.fromTo('.Fact__content',
            {
                opacity:0,
            },
            {
               opacity:2,
                scrollTrigger: {
                  trigger: '.Fact__content',
                  start: 'top 65%',
                  scrub: 5,
                  // markers: true
                },
            }
          )
        })
  return (
    <section className='MeFact'>
        <div className='container'>
            <h1 data-speed="1.2" className='meFact-title'>
                <span>#</span>
                {t('Me-Fune-fact')}
            </h1>
            <div className='Fact__wrapper'>
                <div className='Fact__content'>
                    <h3 data-speed="1.10" id='spring'>
                        {t('spring')}
                    </h3>
                    <h3 data-speed="1.15" >
                        {t('Sport')}
                    </h3>
                    <h3 data-speed="1.20" >
                        {t('sweet')}
                    </h3>
                    <h3 data-speed="1.35">
                        {t('kosmos')}
                    </h3>
                    <h3 data-speed="1.40">
                        {t('film')}
                    </h3>
                    <h3 data-speed="1.45">
                        {t('fizik')}
                    </h3>
                    <h3 data-speed="1.50">
                        {t('game')}
                    </h3>
                </div>
                <div className='fact__img'>
                <img data-speed="1.4" className='fact__img1' src={me1} alt="" />
                    <img data-speed="1.2"  className='fact__img2' src={me2} alt="" />
                    <img data-speed="1.6" className='fact__img3' src={me3} alt="" />
                    <img data-speed="1.3" className='fact__img4' src={me2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeFact