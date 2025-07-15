import React from 'react';
import './TimelineSection.css';

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-inner">
            <div className="section-badge">
              <span className="badge-dot"></span>
              Project and long-term planning
              <span className="badge-arrow">→</span>
            </div>
            <h2 className="section-title">
              Set the product direction
            </h2>
            <p className="section-subtitle">
              Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear's visual planning tools.
            </p>
          </div>
        </div>
        
        <div className="timeline-visual">
          <div className="timeline-chart">
            <div className="timeline-header">
              <div className="timeline-months">
                <span className="month">AUG 3</span>
                <span className="month-number">30</span>
                <span className="month-number">17</span>
                <span className="month-number">24</span>
                <span className="month-number">31</span>
                <span className="month-number">7</span>
                <span className="month-number">14</span>
                <span className="month-number">21</span>
                <span className="month-number">28</span>
                <span className="month">AUG 22</span>
                <span className="month-number">24</span>
                <span className="month">SEP</span>
              </div>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-item realtime">
                <div className="timeline-bar realtime-bar">
                  <span className="timeline-label">Realtime inference</span>
                  <span className="timeline-icon">🔗</span>
                </div>
              </div>
              
              <div className="timeline-item prototype">
                <div className="timeline-bar prototype-bar">
                  <span className="timeline-label">Prototype</span>
                  <span className="timeline-icon">💎</span>
                </div>
              </div>
              
              <div className="timeline-item beta">
                <div className="timeline-bar beta-bar">
                  <span className="timeline-label">Beta</span>
                </div>
              </div>
              
              <div className="timeline-item rlhf">
                <div className="timeline-bar rlhf-bar">
                  <span className="timeline-label">RLHF fine tuning</span>
                  <span className="timeline-icon">🧠</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-marker">
              <div className="marker-line"></div>
              <div className="marker-label">AUG 22</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;