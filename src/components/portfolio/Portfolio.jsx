import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/todi.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Take A Look At</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Todi App" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://github.com/iwonochka" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Todi App" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://github.com/iwonochka" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Todi App" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://github.com/iwonochka" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Todi App" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://github.com/iwonochka" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
