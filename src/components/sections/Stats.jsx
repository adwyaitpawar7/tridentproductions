import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCounter } from '../../hooks/useCounter';
import './Stats.css';

const Stats = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });

  const stats = [
    { number: 150, label: "Projects Completed", suffix: "+" },
    { number: 50, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "" },
    { number: 10, label: "Team Members", suffix: "" }
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} startCounting={hasIntersected} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, startCounting, delay = 0 }) => {
  const count = useCounter(stat.number, 2000, startCounting);
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <div 
      className={`stats__card ${hasIntersected ? 'stats__card--visible' : ''}`}
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stats__number">
        {count}{stat.suffix}
      </div>
      <div className="stats__label">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;

