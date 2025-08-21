import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { portfolio } from '../../data/portfolio';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Digital Ads', 'Documentary', 'Music Video', 'Film', 'Corporate', 'Event Coverage'];
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <div className="portfolio__header">
          <h2 className={`portfolio__title ${hasIntersected ? 'animate-in' : ''}`}>
            Our Portfolio
          </h2>
          <p className={`portfolio__subtitle ${hasIntersected ? 'animate-in' : ''}`}>
            What we've done
          </p>
        </div>

        <div className={`portfolio__filters ${hasIntersected ? 'animate-in' : ''}`}>
          {categories.map(category => (
            <button
              key={category}
              className={`portfolio__filter ${activeFilter === category ? 'portfolio__filter--active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filteredProjects.map((project, index) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              delay={index * 100}
              isVisible={hasIntersected}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ project, delay = 0, isVisible = false }) => {
  return (
    <div 
      className={`portfolio__card ${isVisible ? 'portfolio__card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="portfolio__card-image">
        <img src={project.image} alt={project.title} />
        <div className="portfolio__card-overlay">
          <div className="portfolio__card-content">
            <h3 className="portfolio__card-title">{project.title}</h3>
            <p className="portfolio__card-category">{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

