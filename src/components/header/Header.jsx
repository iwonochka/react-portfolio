import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.png'
import { HiChevronDoubleDown } from 'react-icons/hi'
/*import {BsArrowDown} from 'react-icons/bs'*/

const Header = () => {

  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Iwona Behnke</h1>
        <h5 className='text-light'>Junior full-stack developer</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <div>
          <a href="#contact" className='scroll__down'><HiChevronDoubleDown /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
