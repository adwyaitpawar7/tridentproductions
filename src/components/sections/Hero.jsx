import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className={`hero__text ${isVisible ? 'hero__text--visible' : ''}`}>
            <h1 className="hero__title">
              <span className="hero__title-main">Trident Productions</span>
              <span className="hero__title-sub">Your one-stop-solution for all media needs</span>
            </h1>
            
            <p className="hero__description">
              We produce high-quality content, including ads, commercials, films, 
              documentaries, and more. From concept to completion, we bring your vision to life.
            </p>
            
            <div className="hero__buttons">
              <Link to="/services" className="btn btn--primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className={`hero__image ${isVisible ? 'hero__image--visible' : ''}`}>
            <div className="hero__image-placeholder">
              <i className="fas fa-video hero__image-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

