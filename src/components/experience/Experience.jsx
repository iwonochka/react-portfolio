import React from 'react'
import './experience.css'
import {DiRubyRough} from 'react-icons/di'
import {SiRubyonrails} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiSass} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {SiHeroku} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Check out my</h5>
      <h2>Skills</h2>

      <div className='container experience__container'>
        <div className='experience__stack'>
          <h3>My Stack</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <DiRubyRough className='experience__details-icon' />
              <h4>Ruby</h4>
            </article>

            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon' />
              <h4>Ruby on Rails</h4>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <h4>JavaScript ES6</h4>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>React</h4>
            </article>

            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' />
              <h4>HTML</h4>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <h4>CSS</h4>
            </article>

            <article className='experience__details'>
              <SiSass className='experience__details-icon' />
              <h4>Sass</h4>
            </article>

            <article className='experience__details'>
              <BsBootstrap className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>

            <article className='experience__details'>
              <SiHeroku className='experience__details-icon' />
              <h4>Heroku</h4>
            </article>

            <article className='experience__details'>
              <SiFigma className='experience__details-icon' />
              <h4>Figma</h4>
            </article>

            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' />
              <h4>PostgreSQL</h4>
            </article>

            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon' />
              <h4>GitHub</h4>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
