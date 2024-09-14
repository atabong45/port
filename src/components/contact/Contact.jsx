import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            'service_4c9bgci', 
            'template_40c5g3d',
            form.current, {
                publicKey: 'R6ltI7_FvT_ab4uH7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset(); 
          },
          (error) => {
            console.log('FAILED...', error.text);                 
            e.target.reset();   
        },
        );
    };


  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title"> Email </h3>
                        <span className="contact__card-data"> stephaneatabong45@gmail.com </span>

                        <a href="mailto:stephaneatabong45@gmail.com" target='_blank'className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title"> Whatsapp </h3>
                        <span className="contact__card-data"> +237671949527 </span>

                        <a  href="https://api.whatsapp.com/send?phone=671949527&text=hello, more information!" 
                            target='_blank'
                            className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-telegram contact__card-icon"></i>

                        <h3 className="contact__card-title"> Telegram </h3>
                        <span className="contact__card-data"> +237671949527 </span>

                        <a href="https://t.me/Marcrolan" target='_blank' className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label htmlFor="mail" className="contact__form-tag">
                            Mail
                        </label>
                        <input type="mail" name="mail" className="contact__form-input" placeholder='insert your email'/>
                    </div>

                    <div className="contact__form-div">
                        <label htmlFor="name" className="contact__form-tag">
                            Name
                        </label>
                        <input type="text" name="name" className="contact__form-input" placeholder='insert your name'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="project" className="contact__form-tag">
                            Project
                        </label>
                        <textarea className='contact__form-input' name="project" cols='30' rows='10'placeholder='write your project'></textarea>
                    </div>
                    <button type='submit' className="button contact__button">
                        Send Message
                        <i className="uil uil-message contact__button-icon" style={{display:'block', paddingLeft:'10px'}}></i>
                    </button>

                </form>

            </div>
        </div>
    </section>

  )
}

export default Contact