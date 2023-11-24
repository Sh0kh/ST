import React from 'react'
import '../style/Contacts.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Contacts() {
     // язык
     const { t } = useTranslation();
    // язык
  return (
    <section className='contact'>
        <div className='container'>
            <div className='contact__wrapper'>
                <div className='contact__content'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"  className='title__contact'>
                        <h1>
                            <span>#</span>
                            {t('Contacts')}
                        </h1>
                        <div className='contact__line'>

                        </div>
                    </div>
                    <p data-aos="fade-down-right"  data-aos-duration="1500">
                        {t('Appeal')}
                    </p>
                    <NavLink  data-aos-duration="1500" data-aos="fade-down-right" className="Con__btn" to="/Con">
                        {t('Contacts-me1')}
                    </NavLink>
                </div>
                <div data-aos-duration="1500" data-aos="flip-down" className='contact__card'>
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

export default Contacts