import React from 'react';
import './UnderHoodSection.css';

const UnderHoodSection = () => {
  return (
    <section className="under-hood-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            Under the hood
          </div>
          <h2 className="section-title">
            Built on strong<br />
            foundations
          </h2>
          <p className="section-subtitle">
            Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
          </p>
        </div>
        
        <div className="tech-grid">
          <div className="tech-item">
            <h3>Linear Sync Engine</h3>
            <p>Built with a high-performance architecture and an obsessive focus on speed.</p>
          </div>
          <div className="tech-item">
            <h3>Enterprise-ready security</h3>
            <p>Best-in-class security practices keep your work safe and secure at every layer.</p>
          </div>
          <div className="tech-item">
            <h3>Engineered for scale</h3>
            <p>Built for teams of all sizes, from small startups to large enterprise organizations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderHoodSection;