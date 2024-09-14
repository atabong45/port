import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Networking from './Networking'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title"> Skills </h2>
        <sapn className="section__subtitle"> My technical level </sapn>

        <div className="skills__container container grid">
            <Frontend />

            <Backend />

            <Networking />

        </div>
    </section>
  )
}

export default Skills