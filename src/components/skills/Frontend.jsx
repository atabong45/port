import React from 'react'
import { useTranslation } from 'react-i18next'

const Frontend = () => {
  const { t } = useTranslation();

  return (
    <div className="skills__content">
    <h3 className="skills__title">{t('skills.frontend')}</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">{t('skills.levels.advanced')}</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">{t('skills.levels.basic')}</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">BOOTSTRAP</h3>
                    <span className="skills__level">{t('skills.levels.advanced')}</span>
                </div>
            </div>
        </div>

        <div className="skills__group">            
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">JAVASCRIPT</h3>
                    <span className="skills__level">{t('skills.levels.intermediate')}</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">GIT</h3>
                    <span className="skills__level">{t('skills.levels.intermediate')}</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">{t('skills.levels.intermediate')}</span>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Frontend