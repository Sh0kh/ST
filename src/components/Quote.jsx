import React from 'react'
import '../style/Quote.css'
import quote from '../img/legend.png'
import quote2 from '../img/quote2.png'
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Quote() {


  // язык
   const { t } = useTranslation();
    
  // язык

  useGSAP(() => {
    gsap.fromTo(
      '.qt1',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        x: '100%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.qt1',
          start: 'top 70%',
          scrub: 5,
          // markers: true
        },
      }
    );
    gsap.fromTo(
      '.quote__bg',
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: '.quote__bg',
          start: 'top 70%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  },);
  return (
    <section className='quote'>
        <div className='container' >
            <div  className='qt1'>
           <fieldset className='quote__wrapper'>
                <legend className='quote1'>
                    <img src={quote} alt="" />
                </legend>
                <h1>
                    {t('quote')}
                </h1>
           </fieldset>
           </div>
            <img  data-speed="2.1" className='quote__bg' src={quote2} alt="" />
        </div>
    </section>
  )
}

export default Quote