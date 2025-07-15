import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Made for modern<br />product teams
          </h2>
          <p className="section-subtitle">
            Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.{' '}
            <a href="#" className="make-switch-link">Make the switch →</a>
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-visual">
              <div className="feature-mockup">
                <div className="mockup-window">
                  <div className="window-header">
                    <div className="window-controls">
                      <span className="control"></span>
                      <span className="control"></span>
                      <span className="control"></span>
                    </div>
                  </div>
                  <div className="window-content">
                    <div className="code-lines">
                      <div className="code-line"></div>
                      <div className="code-line short"></div>
                      <div className="code-line"></div>
                      <div className="code-line medium"></div>
                    </div>
                    <div className="chart-area">
                      <div className="chart-circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3>Purpose-built for product development</h3>
            <span className="feature-plus">+</span>
          </div>
          
          <div className="feature-card">
            <div className="feature-visual">
              <div className="speed-chart">
                <div className="chart-header">50ms</div>
                <div className="chart-bars">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '50%'}}></div>
                  <div className="chart-bar" style={{height: '85%'}}></div>
                  <div className="chart-bar" style={{height: '65%'}}></div>
                </div>
              </div>
            </div>
            <h3>Designed to move fast</h3>
            <span className="feature-plus">+</span>
          </div>
          
          <div className="feature-card">
            <div className="feature-visual">
              <div className="craft-demo">
                <div className="craft-header">
                  <span className="craft-close">×</span>
                  <span className="craft-title">Create</span>
                </div>
                <div className="craft-content">
                  <div className="craft-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            </div>
            <h3>Crafted to perfection</h3>
            <span className="feature-plus">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;