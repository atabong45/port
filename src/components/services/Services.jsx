import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Services.css'

const Services = () => {
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">{t('services.title')}</h2>
        <span className="section__subtitle">{t('services.subtitle')}</span>
        
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">{t('services.productDesigner.title')}</h3>
                </div>

                <span className='services__button'onClick={()=>{toggleTab(1)}}>{t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                    
                        <h3 className="services__modal-title">{t('services.productDesigner.title')}</h3>
                        <p className="services__modal-description">
                            {t('services.productDesigner.description')}
                        </p>

                        <ul className="services__modal-services grid">
                            {t('services.productDesigner.services', { returnObjects: true }).map((service, index) => (
                                <li key={index} className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">{t('services.uiuxDesigner.title')}</h3>
                </div>

                <span className='services__button' onClick={()=>{toggleTab(2)}}>{t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState ===2 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                    
                        <h3 className="services__modal-title">{t('services.uiuxDesigner.title')}</h3>
                        <p className="services__modal-description">
                            {t('services.uiuxDesigner.description')}
                        </p>

                        <ul className="services__modal-services grid">
                            {t('services.uiuxDesigner.services', { returnObjects: true }).map((service, index) => (
                                <li key={index} className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">{t('services.visualDesigner.title')}</h3>
                </div>
                               
                <span className='services__button' onClick={()=>{toggleTab(3)}}>{t('services.viewMore')}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState ===3 ? "services__modal active-modal" : "services__modal" }>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{toggleTab(0)}}></i>
                    
                        <h3 className="services__modal-title">{t('services.visualDesigner.title')}</h3>
                        <p className="services__modal-description">
                            {t('services.visualDesigner.description')}
                        </p>

                        <ul className="services__modal-services grid">
                            {t('services.visualDesigner.services', { returnObjects: true }).map((service, index) => (
                                <li key={index} className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   
    </section>

  )
}

export default Services