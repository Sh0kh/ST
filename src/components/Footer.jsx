import React from 'react'
import '../style/Footer.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function Footer() {
      // язык
      const { t } = useTranslation();
     // язык
  return (
    <footer>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <h2>
                        {t('Shokh')}
                    </h2>
                    <h3>
                        {t('front')}
                    </h3>
                </div>
                <div className='media'>
                    <NavLink className='footer__btn' to="/Con">
                        {t('Contacts-me1')}
                    </NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer