import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to IETE RGIT</h1>
        <p>Empowering the next generation of engineers.</p>
        <a href="#magazines" className="cta-button">Explore More</a>
      </div>
    </section>
  );
};

export default Hero;
