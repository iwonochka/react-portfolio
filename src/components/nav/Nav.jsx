import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdApps} from 'react-icons/md'
import {MdOutlineEmail} from 'react-icons/md'
const Nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#portfolio"><MdApps /></a>
      <a href="#contact"><MdOutlineEmail /></a>
    </nav>
  )
}

export default Nav
