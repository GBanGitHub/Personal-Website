import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Here is my work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
          <h3>Algorithm Visualizer with Python</h3>
          <div className="portfolio_item-calltoaction">
            <a href="https://github.com/GBanGitHub/SortingVisualizerPython" className='btn'>Github</a>
            <a href="https://github.com/GBanGitHub/SortingVisualizerPython" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio