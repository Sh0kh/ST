import React from 'react'
import '../style/AboutMe.css'
import { useTranslation } from 'react-i18next';
import me1 from '../img/me1.png'
import me2 from '../img/me2.png'
import me3 from '../img/me3.png'
import { NavLink } from 'react-router-dom';


function AboutMe() {
    
     // язык
     const { t } = useTranslation();
 // язык
  return (
    <section className='Me'>
        <div className='container'>
            
            <div className='me__grid'> 
                <div className='me__content'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='me__wrapper'>
                        <h1>
                            <span>#</span>
                            {t('About-Me')}
                        </h1>
                        <div className='me__line'>

                        </div>
                    </div>  
                    <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine">
                        {t('Hello')}
                    </h2>
                    <p data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine" className='me__text1'>
                        {t('A-me')}
                    </p>
                    <p data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"> 
                        {t('A-me2')}
                    </p>
                    <NavLink data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine" className='me__btn' to="/Me">
                        {t('Read more')}
                    </NavLink>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1500"
                    data-aos-anchor-placement="top-bottom" className='me__img'>
                    <img className='me__img1' src={me1} alt="" />
                    <img className='me__img2' src={me2} alt="" />
                    <img className='me__img3' src={me3} alt="" />
                    <img className='me__img4' src={me2} alt="" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AboutMe