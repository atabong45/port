import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Qualification.css'

const Qualification = () => {
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const educationItems = t('qualification.educationItems', { returnObjects: true });
    const experienceItems = t('qualification.experienceItems', { returnObjects: true });

  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section__title">{t('qualification.title')}</h2>
        <span className="section__subtitle">{t('qualification.subtitle')}</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> {t('qualification.education')}
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" :
                    "qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}
                >
                     <i className="uil uil-briefcase-alt qualification__icon"></i> {t('qualification.experience')}
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    {educationItems.map((item, index) => (
                        <div key={index} className="qualification__data">
                            {index % 2 === 0 ? (
                                <>
                                    <div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <span className="qualification__subtitle">{item.subtitle}</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> {item.date}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div></div>
                                </>
                            ) : (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <span className="qualification__subtitle">{item.subtitle}</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> {item.date}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className={
                    toggleState === 2 ? 
                    "qualification__content qualification__content-active" :
                    "qualification__content"
                }>
                    {experienceItems.map((item, index) => (
                        <div key={index} className="qualification__data">
                            {index % 2 === 0 ? (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <span className="qualification__subtitle">{item.subtitle}</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> {item.date}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h3 className="qualification__title">{item.title}</h3>
                                        <span className="qualification__subtitle">{item.subtitle}</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i> {item.date}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div></div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification