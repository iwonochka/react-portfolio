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
import {SiExpress} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {SiGitlab} from 'react-icons/si'
import {SiStyledcomponents} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiNetlify} from 'react-icons/si'
import {SiVercel} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Check out my</h5>
      <h2>Skills</h2>

      <div className='container experience__container'>
        <div className='experience__stack'>
          <div className='experience__content'>

            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon' />
              <h4>Ruby on Rails</h4>
            </article>

            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon' />
              <h4>Next.js</h4>
            </article>

            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' />
              <h4>PostgreSQL</h4>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <h4>JavaScript ES6</h4>
            </article>

            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' />
              <h4>HTML</h4>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <h4>MongoDB</h4>
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <h4>PHP</h4>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <h4>CSS</h4>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <h4>MySQL</h4>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>React</h4>
            </article>

            <article className='experience__details'>
              <SiFigma className='experience__details-icon' />
              <h4>Figma</h4>
            </article>

            <article className='experience__details'>
              <SiGitlab className='experience__details-icon' />
              <h4>GitLab</h4>
            </article>

            <article className='experience__details'>
              <SiTypescript className='experience__details-icon' />
              <h4>Typescript</h4>
            </article>

            <article className='experience__details'>
              <BsBootstrap className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>

            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon' />
              <h4>GitHub</h4>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <h4>Node.js</h4>
            </article>

            <article className='experience__details'>
              <SiStyledcomponents className='experience__details-icon' />
              <h4>Styled Components</h4>
            </article>

            <article className='experience__details'>
              <SiDocker className='experience__details-icon' />
              <h4>Docker</h4>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <h4>Express</h4>
            </article>

            <article className='experience__details'>
              <SiSass className='experience__details-icon' />
              <h4>Sass</h4>
            </article>

            <article className='experience__details'>
              <SiVercel className='experience__details-icon' />
              <h4>Vercel</h4>
            </article>

            <article className='experience__details'>
              <SiLaravel className='experience__details-icon' />
              <h4>Laravel</h4>
            </article>

            <article className='experience__details'>
              <SiNetlify className='experience__details-icon' />
              <h4>Netlify</h4>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
