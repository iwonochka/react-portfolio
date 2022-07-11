import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.png'
import HeaderSocials from './HeaderSocials'
/*import {BsArrowDown} from 'react-icons/bs'*/

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Iwona Behnke</h1>
        <h5 className='text-light'>Junior Fullstack Developer</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials />
        <div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
