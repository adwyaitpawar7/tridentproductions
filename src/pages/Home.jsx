import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Stats from '../components/sections/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
