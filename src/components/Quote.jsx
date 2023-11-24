import React from 'react'
import '../style/Quote.css'
import quote from '../img/legend.png'
import quote2 from '../img/quote2.png'
import { useTranslation } from 'react-i18next';


function Quote() {


          // язык
          const { t } = useTranslation();
    
            // язык


  return (
    <section className='quote'>
        <div className='container'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='qt1'>
           <fieldset className='quote__wrapper'>
                <legend className='quote1'>
                    <img src={quote} alt="" />
                </legend>
                <h1>
                    {t('quote')}
                </h1>
           </fieldset>
           <fieldset className='quote__wrapper2'>
                <legend>
                    <img src={quote} alt="" />
                </legend>
                <h1>
                    {t('T,sh')}
                </h1>
           </fieldset>
           </div>
            <img className='quote__bg' src={quote2} alt="" />
        </div>
    </section>
  )
}

export default Quote