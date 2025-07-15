import React from 'react';
import './IntegrationsSection.css';

const IntegrationsSection = () => {
  return (
    <section className="integrations-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            Workflows and integrations
          </div>
          <h2 className="section-title">
            Collaborate across<br />
            tools and teams
          </h2>
          <p className="section-subtitle">
            Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.
          </p>
        </div>
        
        <div className="integrations-visual">
          <div className="integration-demo">
            <div className="demo-left">
              <div className="intercom-message">
                <div className="message-header">
                  <span className="intercom-icon">💬</span>
                  <span>Intercom</span>
                  <span className="message-time">zac@acme.com</span>
                </div>
                <p>We need a cost breakdown across...</p>
              </div>
              
              <div className="acme-request">
                <div className="request-header">
                  <span className="acme-icon">🏢</span>
                  <span>ACME</span>
                  <span className="request-label">New request</span>
                </div>
              </div>
              
              <div className="dashboard-item">
                <span className="dashboard-icon">☁️</span>
                <span>Multi-cloud cost dashboard</span>
                <div className="dashboard-meta">
                  <span className="planning-tag">Planning</span>
                  <span className="date">Q4 2025</span>
                </div>
              </div>
            </div>
            
            <div className="demo-center">
              <div className="github-activity">
                <div className="activity-item">
                  <span className="issue-id">#20319</span>
                  <span>igorlin 15287 add...</span>
                </div>
                <div className="activity-item">
                  <span className="user">igor</span>
                  <span>linked</span>
                  <span className="issue-id">igorlin 15287 add...</span>
                </div>
                <div className="activity-item">
                  <span className="user">igor</span>
                  <span>changed status from</span>
                  <span className="status">In Progress</span>
                </div>
                <div className="activity-item">
                  <span className="github-icon">🐙</span>
                  <span>GitHub</span>
                  <span>changed status from</span>
                  <span className="status">In Review</span>
                </div>
                <div className="activity-item">
                  <span className="user">igor</span>
                  <span>changed status from</span>
                  <span className="status">Ready</span>
                </div>
              </div>
            </div>
            
            <div className="demo-right">
              <div className="mobile-preview">
                <div className="mobile-header">
                  <span>Linear</span>
                </div>
                <div className="mobile-content">
                  <div className="mobile-item">
                    <span className="avatar">👤</span>
                    <span>Inbox</span>
                  </div>
                  <div className="mobile-item">
                    <span className="avatar">👤</span>
                    <span>Inbox</span>
                  </div>
                  <div className="mobile-item">
                    <span className="avatar">👤</span>
                    <span>Inbox</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="integration-cards">
            <div className="integration-card">
              <h3>Customer Requests</h3>
              <p>Build what customers actually want</p>
              <span className="card-arrow">→</span>
            </div>
            <div className="integration-card">
              <h3>Powerful git workflows</h3>
              <p>Automate pull requests and commit workflows</p>
              <span className="card-plus">+</span>
            </div>
            <div className="integration-card">
              <h3>Linear Mobile</h3>
              <p>Move product work forward from anywhere</p>
              <span className="card-arrow">→</span>
            </div>
            <div className="integration-card">
              <h3>Linear Asks</h3>
              <p>Turn workplace requests into actionable issues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;