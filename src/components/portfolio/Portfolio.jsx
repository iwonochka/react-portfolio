import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/todi.png'
import IMG2 from '../../assets/vellox.png'
import IMG3 from '../../assets/stingray.png'
import IMG4 from '../../assets/game.png'
import IMG5 from '../../assets/disney.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Take A Look At</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container" data-aos="fade-up" data-aos-duration="1500">

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="Vellox App" />
        </div>
        <h3>Vellox</h3>
        <p>A responsive full-stack e-commerce platform with favourites, cart and payment features.</p>
        <p className='portfolio__item-sm'>React • Node.js • Express • MongoDB • Bootstrap</p>
        <div className="portfolio__item-cta">
          <a href="https://github.com/iwonochka/MERN-e-commerce-react" className='btn' target='_blank' rel="noreferrer">Github Link</a>
          <a href="https://vellox.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Todi App" />
          </div>
          <h3>Todi</h3>
          <p> A responisive full-stack social platform for parents with interactive map and chat features.</p>
          <p className='portfolio__item-sm'>RubyOnRails • PostgreSQL • JavaScript • Bootstrap</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/todi" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://www.youtube.com/watch?v=KShgk-0DB68" className='btn btn-primary' target='_blank' rel="noreferrer">YouTube Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Disney+ Clone" />
          </div>
          <h3>Disney+ Clone</h3>
          <p> A frontent project to practice creating page layouts. Consists of home page and show page with a trailer for each movie.</p>
          <p className='portfolio__item-sm'>Next.js • Typescript • Styled Components</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/iwonochka/disney-clone" className='btn' target='_blank' rel="noreferrer">Github Link</a>
            <a href="https://disney-clone-ivory.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Stingray App" />
          </div>
          <h3>Stingray</h3>
          <p> Frontend for a business landing page to practice CSS and creating responsive designs.</p>
          <p className='portfolio__item-sm'>React</p>
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
          <p>A browser jump&run game navigated with left/right arrows, with self made pixel art.</p>
          <p className='portfolio__item-sm'>JavaScript • p5</p>
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
