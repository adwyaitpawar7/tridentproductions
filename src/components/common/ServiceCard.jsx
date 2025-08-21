import React, { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, delay = 0, isVisible = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`service-card ${isVisible ? 'service-card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-card__inner">
        <div className="service-card__icon">
          <span className="service-card__emoji">{service.icon}</span>
        </div>
        
        <div className="service-card__content">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__description">{service.description}</p>
          
          {service.features && (
            <ul className={`service-card__features ${isHovered ? 'service-card__features--visible' : ''}`}>
              {service.features.map((feature, index) => (
                <li key={index} className="service-card__feature">
                  <span className="service-card__feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="service-card__overlay"></div>
      </div>
    </div>
  );
};

export default ServiceCard;

