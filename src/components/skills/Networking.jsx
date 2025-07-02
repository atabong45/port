import React from 'react'
import { useTranslation } from 'react-i18next'

const Networking = () => {
  const { t } = useTranslation();

  return (
    <div className="skills__content">
    <h3 className="skills__title">{t('skills.networking')}</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Network Fundamentals </h3>
                    <span className="skills__level"> {t('skills.levels.intermediate')} </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"> </i>
                <div>
                    <h3 className="skills__name"> Packet Tracer </h3>
                    <span className="skills__level"> {t('skills.levels.intermediate')} </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Cybersecurity Foundation </h3>
                    <span className="skills__level"> {t('skills.levels.intermediate')} </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Wireshark </h3>
                    <span className="skills__level"> {t('skills.levels.basic')} </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level"></span>
                </div>
            </div>          
        </div>
    </div>
</div>
  )
}

export default Networking