import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/todi.png'
import IMG2 from '../../assets/vellox.png'
import IMG3 from '../../assets/stingray.png'
import IMG4 from '../../assets/game.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Take A Look At</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container" data-aos="fade-up" data-aos-duration="1500">

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Todi App" />
          </div>
          <h3>Todi</h3>
          <p> A full-stack social platform for parents developed with Ruby on Rails</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/todi" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://www.youtube.com/watch?v=KShgk-0DB68" className='btn btn-primary' target='_blank' rel="noreferrer">YouTube Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Vellox App" />
          </div>
          <h3>Vellox</h3>
          <p>A full-stack e-commerce platform developed with React</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/MERN-e-commerce-react" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://vellox.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Stingray App" />
          </div>
          <h3>Stingray</h3>
          <p>A responsive business landing page developed with React</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/react-company-website" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://stingray-landing-page.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Cockroach game" />
          </div>
          <h3>Save the Cockroach</h3>
          <p>A browser jump&run game developed with JavaScript and p5</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/js-cockroach-game" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://iwonochka.github.io/js-cockroach-game/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
