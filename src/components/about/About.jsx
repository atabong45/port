import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'
import AboutImg from '../../assets/pp.jpeg'
import CV from '../../assets/CV.pdf'
import Info from './Info'

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about section" id='about'>
        <h2 className="section__title"> {t('about.title')} </h2>
        <span className="section__subtitle"> {t('about.subtitle')} </span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />

                <p className="about__description">
                    {t('about.description')}
                </p>

                <a download="" href={CV} className="button button-flex"> {t('about.downloadCV')}
                    <i className="uil uil-file" style={{paddingLeft:'10px'}}></i>
                </a>               
            </div>
        </div>
    </section>
  )
}

export default About