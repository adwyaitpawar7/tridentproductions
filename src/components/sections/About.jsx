import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

const About = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about__content">
          <div className={`about__text ${hasIntersected ? 'about__text--visible' : ''}`}>
            <h2 className="about__title">Who We Are</h2>
            <h3 className="about__subtitle">Welcome to Trident Productions</h3>
            
            <p className="about__description">
              Welcome to Trident Production, your one-stop-solution for all media needs. 
              We produce high-quality content, including ads, commercials, films, documentaries, and more.
            </p>
            
            <div className="about__services-list">
              <div className="about__services-column">
                <ul>
                  <li>Advertisements & Commercials</li>
                  <li>Films & Short Films</li>
                  <li>Documentaries</li>
                  <li>Corporate Videos</li>
                </ul>
              </div>
              <div className="about__services-column">
                <ul>
                  <li>Social Media Content</li>
                  <li>Event Coverage</li>
                  <li>Pre-Production</li>
                  <li>Post-Production</li>
                </ul>
              </div>
            </div>
            
            <p className="about__footer">
              We also offer flexible options for individual services. At Trident Production, 
              we deliver creative, high-quality, and professional content, bringing your vision to life.
            </p>
          </div>
          
          <div className={`about__image ${hasIntersected ? 'about__image--visible' : ''}`}>
            <div className="about__image-placeholder">
              <i className="fas fa-camera about__image-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

