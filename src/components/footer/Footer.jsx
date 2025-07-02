import React from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"> ATABONG </h1>

            <ul className="footer__list">
                <li>
                    <a href="#" className="footer__link"> {t('nav.home')} </a>
                </li>

                <li>
                    <a href="#about" className="footer__link">{t('nav.about')}</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">{t('nav.skills')}</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">{t('nav.services')}</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">{t('nav.projects')}</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/st%C3%A9phane-fritz-atabong-efon-836329273/" 
                    className="footer__social-link" target='_blank'>
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="mailto:stephaneatabong45@gmail.com" target='_blank'className="footer__social-link"> 
                    <i className="bx bx-mail-send "></i>
                </a>

                <a href="https://github.com/atabong45" className="footer__social-link" target='_blank'>
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://www.facebook.com" className="footer__social-link" target='_blank'>
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="" className="footer__social-link" target='_blank'>
                    <i className="uil uil-twitter"></i>
                </a>
            </div>

            <span className="footer__copy"> 
                {t('footer.copyright')}
            </span>
        </div>
    </footer>
  )
}

export default Footer