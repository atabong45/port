import React from 'react'
import { useTranslation } from 'react-i18next'

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="uil uil-award about__icon"></i>
            <h3 className="about__title">{t('about.experience')}</h3>
            <span className="about__subtitle ">{t('about.experienceDesc')}</span>
        </div>

        <div className="about__box">
            <i className="uil uil-briefcase-alt about__icon"></i>
            <h3 className="about__title">{t('about.completed')}</h3>
            <span className="about__subtitle ">{t('about.completedDesc')}</span>
        </div>

        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">{t('about.support')}</h3>
            <span className="about__subtitle ">{t('about.supportDesc')}</span>
        </div>
    </div>
  )
}

export default Info