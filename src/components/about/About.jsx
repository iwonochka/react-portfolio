import React from 'react'
import './about.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container' data-aos="fade-right" data-aos-duration="1500">

        {/* <div className='container about__me'>

          <div className="about__me-image">
            <img src={PIC} alt="me" />
          </div>

        </div> */}

        <div className='container about__content' data-aos="fade-left" data-aos-duration="1500">

          <p>I'm a full-stack developer, graduated from 2 intense full-time web development bootcamps: <a href="https://www.lewagon.com/berlin/web-development-course">Le Wagon</a> (Ruby on Rails) and <a href="https://www.ironhack.com/en/web-development/berlin?utm_source=google&utm_medium=cpc&utm_campaign=BER_Germany_Berlin_Global_Search_Brand_EN&utm_content=search-brand&utm_term=ironhack%20web%20development&gclid=EAIaIQobChMIiuOs6467_QIV7AqiAx1SwgPdEAAYASAAEgILo_D_BwE">Ironhack</a> (JavaScript and React), based in Berlin, Germany.</p>
          <p>As a former communication trainer I used to conduct trainings for one of the biggest companies in Germany. Now I'm combining my communication skills and passion for tech as a coding teacher!</p>
          <a href="#contact" className='btn btn-primary'>Send a message</a>
        </div>
      </div>

    </section>
  )
}

export default About
