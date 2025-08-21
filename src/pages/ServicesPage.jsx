import React from 'react';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__subtitle">
            Comprehensive media production solutions tailored to bring your creative vision to life with professional excellence.
          </p>
        </div>
      </div>
      <Services />
      <Portfolio />
    </div>
  );
};

export default ServicesPage;

