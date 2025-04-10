import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <h1>Showcase Your Skills in Premium Contests</h1>
        <p>
          Join thousands of professionals competing in our industry-leading challenges.
          <br />
          Register now to secure your spot!
        </p>
      <div className="hero-buttons">
        <button className="get-started">View Contests</button>
        <button className="learn-more">Create Account</button>
      </div>
    </section>
  );
}

export default HeroSection;
