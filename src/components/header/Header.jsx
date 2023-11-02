import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.png'
import AOS from "aos";
import { HiChevronDoubleDown } from 'react-icons/hi'
import { useEffect } from "react";

const Header = () => {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <header>
      <div className='container header__container'>
        <h2>Iwona Behnke</h2>
        <h5 className='text-light'>Junior full-stack web developer</h5>

        <div className='container about__container' data-aos="fade-right" data-aos-duration="1500">
          <div className='container about__me'>
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>

          <div className='container about__content' data-aos="fade-left" data-aos-duration="1500">
            <div className='about__content-text'>
              <p>I'm a full-stack developer, graduated from 2 intense full-time web development bootcamps: <a href="https://www.lewagon.com/berlin/web-development-course" target='_blank' rel="noreferrer">Le Wagon</a> (Ruby on Rails) and <a href="https://www.ironhack.com/en/web-development/berlin?utm_source=google&utm_medium=cpc&utm_campaign=BER_Germany_Berlin_Global_Search_Brand_EN&utm_content=search-brand&utm_term=ironhack%20web%20development&gclid=EAIaIQobChMIiuOs6467_QIV7AqiAx1SwgPdEAAYASAAEgILo_D_BwE" target='_blank' rel="noreferrer">Ironhack</a> (JavaScript and React), based in Berlin, Germany.</p>
              <p>As a former communication trainer I used to conduct trainings for one of the biggest companies in Germany. Now I'm combining my communication skills and passion for tech as a junior developer!</p>
            </div>
            <CTA />
          </div>
        </div>

        <div>
          <a href="#contact" className='scroll__down'><HiChevronDoubleDown /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
