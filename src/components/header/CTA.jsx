import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
      <a href="#contact" className='btn btn-primary'>Contact me</a>
      <a href="#contact" className='btn btn-icon'>
        <BsGithub/>
        <p>GitHub</p>
      </a>
      <a href="#contact" className='btn btn-icon'>
        <BsLinkedin/>
        <p>LinkedIn</p>
      </a>
    </div>
  )
}

export default CTA
