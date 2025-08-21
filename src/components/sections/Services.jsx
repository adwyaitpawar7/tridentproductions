import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';
import './Services.css';

const Services = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__header">
          <h2 className={`services__title ${hasIntersected ? 'animate-in' : ''}`}>
            Our Services
          </h2>
          <p className={`services__subtitle ${hasIntersected ? 'animate-in' : ''}`}>
            What we do offer
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              delay={index * 100}
              isVisible={hasIntersected}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

