import React from 'react'
import '../style/MeHero.css'
import { useTranslation } from 'react-i18next';
import me1 from '../img/me1.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'

function MeHero() {

              // язык
              const { t } = useTranslation();
        
        // язык


  return (
    <section className='Mehero'>
        <div className='container'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" >
                <span>/</span> {t('About-Me')}     
            </h1>
            <div className='MeHero__wrapper'>
                <div className='MeHero__content'>
                    <h2 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-sine">
                        {t('Who am i')}
                    </h2>
                    <h2 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-sine">
                        {t('Hello')}
                    </h2>
                    <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1700"
                        data-aos-easing="ease-in-sine">
                        {t('A-me')}
                    </p>
                    <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1700"
                        data-aos-easing="ease-in-sine">
                        {t('A-me2')}
                    </p>
                </div>
                <div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='me__img'>
                    <img className='me__img1' src={me1} alt="" />
                    <img className='me__img2' src={me2} alt="" />
                    <img className='me__img3' src={me3} alt="" />
                    <img className='me__img4' src={me2} alt="" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeHero