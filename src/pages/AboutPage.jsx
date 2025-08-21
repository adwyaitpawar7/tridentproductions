import React from 'react';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Team from '../components/sections/Team';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">About Trident Productions</h1>
          <p className="page-hero__subtitle">
            Meet the creative minds behind compelling media content and discover our journey in the production industry.
          </p>
        </div>
      </div>
      <About />
      <Stats />
      <Team />
    </div>
  );
};

export default AboutPage;

