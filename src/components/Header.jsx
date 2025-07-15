import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo">Linear</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#product">Product</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#" className="btn btn-secondary">Log in</a>
            <a href="#" className="btn btn-primary">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;