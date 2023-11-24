import React, { useState } from 'react'
import '../style/Header.css'
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../i18n';

import logo from '../img/st-logo-monogram-with-slash-style-design-template-free-vector.jpg'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';


function Header() {
  // язык
  const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    const handleLenguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };
// язык
const [isIdAdded, setIdAdded] = useState(false);
const handleClick = () => {
  setIdAdded(!isIdAdded);
  console.log('ok');
};
const idName = isIdAdded ? 'my-element-id' : '';
  return (
    <header>
      <div className='container'>
          <div className='header__wrapper'>
              <div className='header__logo'>
                  <img  className='logo' src={logo} alt="" />
                  <h1>
                      Stuktanazarov
                  </h1>
              </div>
              <nav className='header__nav' >
                <ul className='header__list'>
                  <li>
                    <NavLink  className='header__link'to="/">  <span>#</span>{t('Home')} </NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to="/Me"><span>#</span>{t('Me')}</NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to='/Wor'>  <span>#</span>{t('Project')}</NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to='/Con'><span>#</span>{t('Contact')}</NavLink> 
                  </li>
                      <button className='language' onClick={handleLenguageChange}>
                      {t('change to')}{' '}
                      {language === 'ru' ? t('english') : t('russian')}
                  </button>
                </ul>
              </nav>
              <div onClick={handleClick}   className='ham' >
                    <Hamburger  color="#fff" className='ham'/>

                  </div>

          </div>
          <div  className='modal__menu' id={idName}>
          <ul className='madal__list'>
                  <li>
                    <NavLink  className='header__link'to="/">  <span>#</span>{t('Home')} </NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to="/Me"><span>#</span>{t('Me')}</NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to='/Wor'>  <span>#</span>{t('Project')}</NavLink>
                  </li>
                  <li>
                    <NavLink className='header__link' to='/Con'><span>#</span>{t('Contact')}</NavLink> 
                  </li>
                      <button className='language' onClick={handleLenguageChange}>
                      {t('change to')}{' '}
                      {language === 'ru' ? t('english') : t('russian')}
                  </button>
                </ul>
          </div>
      </div>
    
    </header>
  )
}

export default Header;