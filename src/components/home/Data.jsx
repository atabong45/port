import React from 'react'
import { useTranslation } from 'react-i18next'
import hand from '../../assets/m.png'

const Data = () => {
  const { t } = useTranslation();

  return (
    <div className="home__data">
        <h1 className="home__title"> {t('home.title')}
            <img className='home__hand' src={hand} alt="" />
        </h1>
        <h3 className="home__subtitle"> {t('home.subtitle')} </h3>
        <p className="home__description">
            {t('home.description')}
        </p>
        <a href="#contact" className="button button--flex">
            {t('home.sayHello')}
            <i className="uil uil-message nav__icon" style={{display:'block', paddingLeft:'10px'}}></i>
        </a>
    </div>
  )
}

export default Data