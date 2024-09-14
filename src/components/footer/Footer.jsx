import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"> ATABONG </h1>

            <ul className="footer__list">
                <li>
                    <a href="#" className="footer__link"> Home </a>
                </li>


                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>


                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
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
                &#169; atabong_stephane. All right reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer