import React from 'react'
import './About.css'
import AboutImg from '../../assets/pp.jpeg'
import CV from '../../assets/CV.pdf'
import Info from './Info'


const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title"> About Me </h2>
        <sapn className="section__subtitle"> My introduction </sapn>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />

                <p className="about__description">
                    As an ambitious IT student, i'm actively developing skills in 
                    backend development, network administration,and cybersecurity, passionate about building a
                    strong foundation in computer science to drive future sucess in the tech industry
                </p>

                <a download="" href={CV} className="button button-flex"> Download CV  
                    <i className="uil uil-file" style={{paddingLeft:'10px'}}></i>
                </a>               
            </div>
        </div>
    </section>
  )
}

export default About