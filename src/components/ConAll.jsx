import React from 'react'
import '../style/ConAll.css'
import { useTranslation } from 'react-i18next';
function ConAll() {
         // язык
         const { t } = useTranslation();
          // язык
  return (
    <section className='ConAll'>
        <div className='container'>
            <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <span>
                    /
                </span>
                {t('all-media')}
            </h1>
            <a href='https://www.linkedin.com/in/shoxruh-tuxtanazarov-289121295' data-aos="fade-up"
                 data-aos-duration="3000" className="Con__link">Linkedin</a>
            <a data-aos="fade-up"
                data-aos-duration="3000" className="Con__link" href="https://t.me/sert_070">Telegram</a>
            <a data-aos="fade-up"
            data-aos-duration="3000"  className="Con__link" href="https://www.google.com/shoxruuh07tuxtanazarov@gmail.com">Email</a>
        </div>
    </section>
  )
}

export default ConAll