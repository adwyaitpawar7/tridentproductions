import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { team } from '../../data/team';
import './Team.css';

const Team = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <section className="team" id="team" ref={ref}>
      <div className="container">
        <div className="team__header">
          <h2 className={`team__title ${hasIntersected ? 'animate-in' : ''}`}>
            Our Hardworking Team
          </h2>
          <p className={`team__subtitle ${hasIntersected ? 'animate-in' : ''}`}>
            Meet the creative minds behind Trident Productions
          </p>
        </div>

        <div className="team__grid">
          {team.map((member, index) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              delay={index * 100}
              isVisible={hasIntersected}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, delay = 0, isVisible = false }) => {
  return (
    <div 
      className={`team__card ${isVisible ? 'team__card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="team__card-image">
        <img src={member.image || 'https://via.placeholder.com/300x300?text=Team+Member'} alt={member.name} />
      </div>
      <div className="team__card-content">
        <h3 className="team__card-name">{member.name}</h3>
        <p className="team__card-position">{member.position}</p>
      </div>
    </div>
  );
};

export default Team;

