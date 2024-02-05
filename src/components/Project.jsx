import React from 'react'
import '../style/Project.css'
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Small components/ProjectCard';
import pr1 from '../img/pr1.png'
import pr2 from '../img/pr2.png'
import pr3 from '../img/pr3.png'
function Project() {
  // язык
    const { t } = useTranslation();
  // язык
  return (
    <section className='project'>
        <div className='container'>
            <div className='project__wrapper1'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='pr1'>
                    <h1>
                        <span>#</span>
                        {t('Project')}
                    </h1>
                    <div className='pr__line'>

                    </div>
                </div>
                <h2>
                  {/* {t('View all')}  */}
                </h2>
            </div>
            <div className='project__wrapper2'>
                <ProjectCard img={pr1} title='Createx' text={`"${t('web1')}"`} btn='https://velvety-lolly-573b13.netlify.app'/>
                <ProjectCard img={pr2} title='Coca' text={`"${t('web2')}"`} btn='https://bright-zuccutto-74822f.netlify.app'/>
                <ProjectCard img={pr3} title='Cyberpunk-2077' text={`"${t('web3')}"`} btn='https://cyberpunk-2077-st.netlify.app/'/>
            </div>
        </div>
    </section>
  )
}

export default Project