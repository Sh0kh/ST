import React from 'react'
import '../style/Skills.css'
import skills1 from '../img/Hero2.png'
import skills2 from '../img/Hero3.png'
import skills3 from '../img/skills.png'
import skills4 from '../img/skills2.png'
import { useTranslation } from 'react-i18next';

function Skills() {

     // язык
        const { t } = useTranslation();
    // язык
  return (
    <section className='skills'>
        <div className='container'>
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='skills__title'>
                <h1>
                    <span>#</span>
                    {t('Skills')}
                </h1>
                <div className='skills__line'>

                </div>

            </div>
            <div className='skills__wrapper'>
                <div className='skills__img'>
                    <img data-aos="fade-up" data-aos-duration="1500"
                    data-aos-anchor-placement="center-bottom" className='skills1' src={skills1} alt="" />
                    <img data-aos-duration="1500" data-aos="zoom-out-up" className='skills2' src={skills2} alt="" />
                    <img data-aos-duration="1500" data-aos="zoom-out-left" className='skills3' src={skills2} alt="" />
                    <img data-aos-duration="1500" data-aos="fade-right"
                        data-aos-offset="300" 
                        data-aos-easing="ease-in-sine"  className='skills4'src={skills3} alt="" />
                    <img  data-aos="fade-zoom-in" data-aos-duration="1500"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" className='skills5'src={skills4} alt="" />
                </div> 
                <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" 
                data-aos-duration="1500"
                className='skills__content'>
                <div className='skills__card'>
                            <h2>    
                                {t('Language')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    Python
                                </span>
                                <span>
                                    Java Script
                                </span>
                            </div>
                    </div>
                    <div className='skills__card'>
                            <h2>    
                                {t('Tools')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    VSCode
                                </span>
                                <span>
                                    Figma
                                </span>
                                <span>
                                    Git
                                </span>
                                <span>
                                    Font
                                </span>
                            </div>
                    </div>
                    <div className='skills__card'>
                            <h2>    
                                {t('Other')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    HTML
                                </span>
                                <span>
                                    CSS
                                </span>
                                <span>
                                    SCSS
                                </span>
                            </div>
                    </div>
                    <div className='skills__card'>
                            <h2>    
                                {t('Frameworks')}
                            </h2>
                            <div className='card__wrapper'>
                                <span>
                                    React
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills