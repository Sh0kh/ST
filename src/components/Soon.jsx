import React from 'react'
import '../style/Soon.css'
import { useTranslation } from 'react-i18next';
function Soon() {
   // язык
   const { t } = useTranslation();

// язык
  return (
    <section className='soon'>
      <div className='container'>
          <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <span>#</span>{t("Soon")}
          </h1>
          <p data-aos="fade-right"
     data-aos-offset="300"
      data-aos-duration="1000"
     data-aos-easing="ease-in-sine">
            {t("Pub")}
          </p>
      </div>
    </section>
  )
}

export default Soon