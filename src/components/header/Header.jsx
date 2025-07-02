import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../contexts/ThemeContext'
import LanguageSelector from '../common/LanguageSelector'
import "./Header.css"

const Header = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  
  /*===================================   change background header   =======================================*/
  window.addEventListener("scroll",function(){
    const header = document.querySelector(".header");
    if(this.scrollY >=80) 
      header.classList.add("scroll-header")
    else
      header.classList.remove("scroll-header")
         
})

  /*===================================   TOGGLE MENU   =======================================*/
  const [Toggle, showMenu] = useState(false)
  const [activenav, setActiveNav] = useState("#home")

  const isProjectsPage = location.pathname === '/projects';

  return (
    <header className='header'>
      <nav className="nav container">
        <Link to="/" className="nav__logo"> ATABONG </Link>

        <div className={Toggle? "nav__menu show-menu" : "nav__menu" }>
          <ul className="nav__list">
            {!isProjectsPage && (
              <>
                <li className="nav__item">
                  <a href="#home" 
                    onClick={()=>setActiveNav('#home')} 
                    className={ activenav ==="#home" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-estate nav__icon"></i> {t('nav.home')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#about" 
                    onClick={()=>setActiveNav('#about')} 
                    className={ activenav ==="#about" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-user nav__icon"></i> {t('nav.about')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#skills" 
                    onClick={()=>setActiveNav('#skills')} 
                    className={ activenav ==="#skills" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-file-alt nav__icon"></i> {t('nav.skills')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#services" 
                    onClick={()=>setActiveNav('#services')} 
                    className={ activenav ==="#services" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-briefcase-alt nav__icon"></i> {t('nav.services')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#qualifications" 
                    onClick={()=>setActiveNav('#qualifications')} 
                    className={ activenav ==="#qualifications" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-graduation-cap nav__icon"></i> {t('nav.qualifications')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#contact" 
                    onClick={()=>setActiveNav('#contact')} 
                    className={ activenav ==="#contact" ? "nav__link active-link" : "nav__link" }>
                    <i className="uil uil-message nav__icon"></i> {t('nav.contact')}
                  </a>
                </li>
              </>
            )}

            <li className="nav__item">
              <Link to="/projects" 
                className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> {t('nav.projects')}
              </Link>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i> 
        </div>

        <div className="nav__controls">
          <LanguageSelector />
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={isDarkMode ? "uil uil-sun" : "uil uil-moon"}></i>
          </button>
          <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="uil uil-apps"></i> 
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header