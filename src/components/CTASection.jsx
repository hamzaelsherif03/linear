import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">
          Plan the present. Build the future.
        </h2>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary btn-large">Get started</a>
          <a href="#" className="btn btn-secondary btn-large">Talk to sales</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;