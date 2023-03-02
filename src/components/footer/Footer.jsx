import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/behnke-iwona/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/iwonochka" target='_blank' rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Iwona Behnke</small>
      </div>
    </footer>
  )
}

export default Footer
