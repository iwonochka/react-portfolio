import React from 'react'
import './about.css'
import PIC from '../../assets/pic.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>

        <div className='container about__me'>

          <div className="about__me-image">
            <img src={PIC} alt="me" />
          </div>

        </div>

        <div className='container about__content'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit voluptas nulla. Repudiandae iste,
          facilis recusandae temporibus rerum reprehenderit corporis pariatur distinctio placeat, commodi nulla autem, dicta accusamus laudantium quaerat.
          </p>
          <a href="#contact" className='btn btn-primary'>Send a message</a>

        </div>

      </div>

    </section>
  )
}

export default About
