import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
      <a href="#contact" className='btn btn-primary'>Contact me</a>
      <a href="https://github.com/iwonochka" target='_blank' rel="noreferrer" className='btn btn-icon'>
        <BsGithub/>
        <p className='cta__btn-text'>GitHub</p>
      </a>
      <a href="https://www.linkedin.com/in/behnke-iwona" target='_blank' rel="noreferrer" className='btn btn-icon'>
        <BsLinkedin/>
        <p className='cta__btn-text'>LinkedIn</p>
      </a>
    </div>
  )
}

export default CTA
