import React from 'react'
import '../style/ConHero.css'
import { useTranslation } from 'react-i18next';
function ConHero() {
        // язык
        const { t } = useTranslation();
         // язык
  return (
    <section className='Conhero'>
        <div className='container'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <span>/</span>
                {t('Contacts')}
            </h1>
            <h3 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2500"
                data-aos-easing="ease-in-sine">
                {t('Who am i')}
            </h3>
            <div className='ConHero__wrapper'>
                <p data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
                >
                    {t('Con-me1')}
                </p>
                <div data-aos="fade-up" data-aos-duration="2000"
                data-aos-anchor-placement="top-bottom" className='con__card'>
                    <div className='linkedin__card'>
                        <h2 >
                            {t('Linkiden')}
                        </h2>
                        <a className='Con__link' href="https://www.linkedin.com/in/shoxruh-tuxtanazarov-289121295">LinKedin</a>
                    </div>
                </div>
                <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000" className='contact__card'>
                    <h2>
                        {t('Message')}
                    </h2>
                    <a href="https://t.me/sert_070">{t('Telegram')}</a>
                    <a href="#!">{t('Email')}</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConHero