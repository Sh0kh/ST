import React from 'react'
import '../style/MeSkills.css'

import { useTranslation } from 'react-i18next';


function MeSkills() {
      // язык
      const { t } = useTranslation();
        // язык
  return (
    <section className='MeSkills'>
        <div className='container'>
            <h1  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <span>#</span>
                {t('skills')}
            </h1>
            <div className='MeSkills__wrapper'>
            <div data-aos="fade-up"
                data-aos-duration="1500" data-aos-anchor-placement="top-bottom" className='skills__card'>
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
                    <div data-aos="fade-up"
                        data-aos-duration="2000"    data-aos-anchor-placement="top-bottom" className='skills__card'>
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
                    <div data-aos="fade-up"
                         data-aos-duration="2500"   data-aos-anchor-placement="top-bottom" className='skills__card'>
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
                    <div data-aos="fade-up"
                   data-aos-duration="3000" data-aos-anchor-placement="top-bottom"  className='skills__card'>
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
    </section>
  )
}

export default MeSkills