import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Linear is a purpose-built tool for<br />
            planning and building products
          </h1>
          <p className="hero-subtitle">
            Meet the system for modern software development.<br />
            Streamline issues, projects, and product roadmaps.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary btn-large">Start building</a>
            <a href="#" className="hero-link">
              Introducing Linear for Agents →
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="app-mockup">
            <div className="app-sidebar">
              <div className="sidebar-header">
                <div className="sidebar-logo">
                  <span className="logo-icon"></span>
                  <span>Linear</span>
                </div>
              </div>
              <div className="sidebar-nav">
                <div className="nav-item">
                  <span className="nav-icon">📥</span>
                  <span>Inbox</span>
                  <span className="nav-count">1</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon">📋</span>
                  <span>My Issues</span>
                </div>
                <div className="nav-section">
                  <div className="section-header">
                    <span className="section-icon">▼</span>
                    <span>workspace</span>
                  </div>
                  <div className="nav-item">
                    <span className="nav-icon">🎯</span>
                    <span>Initiatives</span>
                  </div>
                  <div className="nav-item">
                    <span className="nav-icon">📁</span>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="app-main">
              <div className="main-header">
                <div className="header-controls">
                  <span className="control-icon">←</span>
                  <span className="control-icon">→</span>
                  <span className="control-icon">🔍</span>
                  <span className="control-icon">⚙️</span>
                </div>
              </div>
              
              <div className="main-content">
                <div className="issue-list">
                  <div className="issue-item">
                    <span className="issue-icon">🔧</span>
                    <span className="issue-id">ENG-135</span>
                    <span className="issue-title">Refactor sonic crawler</span>
                    <div className="issue-meta">
                      <span className="issue-user">👤</span>
                      <span className="issue-status">In Progress</span>
                    </div>
                  </div>
                  
                  <div className="issue-item">
                    <span className="issue-icon">🤖</span>
                    <span className="issue-title">New project update by LLM Chatbot</span>
                    <span className="issue-time">18:03</span>
                  </div>
                  
                  <div className="issue-item">
                    <span className="issue-icon">⚠️</span>
                    <span className="issue-id">ENG-134</span>
                    <span className="issue-title">Error uploading images via API</span>
                    <span className="issue-status">Backlog</span>
                  </div>
                  
                  <div className="issue-item">
                    <span className="issue-icon">⚙️</span>
                    <span className="issue-title">DES: Add Redesign users settings...</span>
                    <span className="issue-user">Tara Halpert</span>
                  </div>
                  
                  <div className="issue-item">
                    <span className="issue-icon">🔧</span>
                    <span className="issue-id">ENG-133</span>
                    <span className="issue-title">Hotswap engine is broken</span>
                    <span className="issue-status">Todo</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="app-detail">
              <div className="detail-header">
                <div className="detail-title">
                  <span className="detail-icon">🔧</span>
                  <span>Engineering</span>
                  <span className="detail-badge">Space has vector</span>
                  <span className="detail-id">ENG-135</span>
                </div>
              </div>
              
              <div className="detail-content">
                <h2 className="detail-heading">Refactor sonic crawler</h2>
                
                <div className="detail-description">
                  <p>Comment: documentContent is defined wrongly. It should be a</p>
                  <p>Let objectType = relation</p>
                  <p>We would be accessing CachedPopulatedDocumentContent then and documentContent would be</p>
                  <p>public documentContent: CachedPopulatedDocumentContent;</p>
                  <p>/** The document content that this comment is associated with. */</p>
                  <p>public documentContent: CachedPopulatedDocumentContent;</p>
                  <p>We would be accessing CachedPopulatedDocumentContent then and documentContent would be undefined until hydrated, so we'd have to handle that</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;