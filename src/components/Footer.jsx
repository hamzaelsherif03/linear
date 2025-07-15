import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Plan</a></li>
              <li><a href="#">Build</a></li>
              <li><a href="#">Insights</a></li>
              <li><a href="#">Customer Requests</a></li>
              <li><a href="#">Linear Asks</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Mobile</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Method</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Switch</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Brand</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li><a href="#">API</a></li>
              <li><a href="#">SDK</a></li>
              <li><a href="#">Webhooks</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">Linear</div>
          <div className="footer-social">
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;