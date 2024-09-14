import React from 'react'
import hand from '../../assets/m.png'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title"> ATABONG  EFON 
            <img className='home__hand' src={hand} alt="" />
        </h1>
        <h3 className="home__subtitle"> IT student </h3>
        <p className="home__description">
            Currently pursuing my fourth year of studies in computer science at ENSPY, I am an ardent 
            computer science enthusiast with a pronounced interest in web development, networking, and cybersecurity.
            I exhibit a high aptitude for learning and adaptability, complemented by a strong work ethic and unwavering
            commitment to overcoming challenge.
        </p>
        <a href="#contact" className="button button--flex">
            say Hello
            <i className="uil uil-message nav__icon" style={{display:'block', paddingLeft:'10px'}}></i>
        </a>

    </div>
  )
}

export default Data