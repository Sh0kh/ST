import React from 'react'
import '../style/Hero.css'
import { useTranslation } from 'react-i18next';
import hero_1 from '../img/Hero1.png'
import hero_2 from '../img/Hero2.png'
import hero_3 from '../img/Hero3.png'
import { NavLink } from 'react-router-dom';


function Hero() {
      // язык
      const { t } = useTranslation();

// язык

  return (
    <section className='hero'>
        <div className='container'>
           <div className='hero__wrapper'>
            <div   data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-sine" className='hero__content'>
                    <h1>
                        {t('Shokh')}  <span>{t('Developer')}</span>
                    </h1>
                    <p>
                        {t('Text')}
                    </p>
                    <NavLink className='hero__btn' to='/Con'>
                        {t('con-me')}
                    </NavLink>
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500" className='hero__img'>
                    <img className='hero__img0' src={hero_1} alt="" />
                    <img className='hero__img1' src={hero_2} alt="" />
                    <img className='hero__img2' src={hero_3} alt="" />
                    <h2>
                        <div>
                        </div>
                        {t('work')}
                    </h2>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Hero