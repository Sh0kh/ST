import React from 'react'
import '../style/Project.css'
import { useTranslation } from 'react-i18next';
import ProjectCard from '../Small components/ProjectCard';
import pr1 from '../img/port2.png'
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
                        {t('AllProject')}
                    </h1>
                    <div className='pr__line'>

                    </div>
                </div>
                <h2>
                  {/* {t('View all')}  */}
                </h2>
            </div>
            <div className='project__wrapper2 grid2'>
                <ProjectCard img={pr1} skills='GSAP' title='NFT' text={`"${t('web1')}"`} btn='https://nft-st-prollax.netlify.app'/>
                <ProjectCard img={pr2} skills='React' title='Coca' text={`"${t('web2')}"`} btn='https://bright-zuccutto-74822f.netlify.app'/>
                <ProjectCard img={pr3} skills='GSAP' title='Gallary' text={`"${t('web3')}"`} btn='https://st-gallary.netlify.app/'/>
            </div>
        </div>
    </section>
  )
}

export default Project