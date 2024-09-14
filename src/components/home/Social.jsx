import React from 'react'


const Social = () => {
  return (
    <div className="home__social">
          <a href="https://api.whatsapp.com/send?phone=237671949527&text=hello, more information please!" 
            target='_blank' className="home__social-icon"> 
            <i className="bx bxl-whatsapp contact__card-icon"></i>
        </a>

        <a href="https://www.linkedin.com/in/st%C3%A9phane-fritz-atabong-efon-836329273/" 
            className="home__social-icon" target='_blank'>
            <i className="uil uil-linkedin"></i>
        </a>

        <a href="mailto:stephaneatabong45@gmail.com" target='_blank'className="home__social-icon"> 
            <i className="bx bx-mail-send "></i>
        </a>

        <a href="https://github.com/atabong45" className="home__social-icon" target='_blank'>
            <i className="uil uil-github"></i>
        </a>
    </div>

    )
}

export default Social