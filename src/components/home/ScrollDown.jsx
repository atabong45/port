import React from 'react'
import { useTranslation } from 'react-i18next'

const ScrollDown = () => {
  const { t } = useTranslation();

  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button-flex">
            <span className="home__scroll-name">{t('home.scrollDown')}</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown