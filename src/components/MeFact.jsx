import React from 'react'
import '../style/MeFact.css'
import { useTranslation } from 'react-i18next';

import me1 from '../img/Hero2.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'


function MeFact() {
       // язык
       const { t } = useTranslation();
        // язык
  return (
    <section className='MeFact'>
        <div className='container'>
            <h1  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <span>#</span>
                {t('Me-Fune-fact')}
            </h1>
            <div className='Fact__wrapper'>
                <div className='Fact__content'>
                    <h3 data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" id='spring'>
                        {t('spring')}
                    </h3>
                    <h3 data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('Sport')}
                    </h3>
                    <h3 data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('sweet')}
                    </h3>
                    <h3 data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('kosmos')}
                    </h3>
                    <h3 data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('film')}
                    </h3>
                    <h3 data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('fizik')}
                    </h3>
                    <h3 data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                        {t('game')}
                    </h3>
                </div>
                <div className='fact__img'>
                <img data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='fact__img1' src={me1} alt="" />
                    <img data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-duration="1500"
                    data-aos-offset="0" className='fact__img2' src={me2} alt="" />
                    <img data-aos="fade-down-right" data-aos-duration="1500" className='fact__img3' src={me3} alt="" />
                    <img data-aos-duration="1500" data-aos="zoom-in-down" className='fact__img4' src={me2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeFact