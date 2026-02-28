// components/Footer.jsx
import React from 'react';

const Footer = ({ theme, t }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Astiere Shifon</h3>
          <p>Premium traditional dresses for every occasion</p>
          <div className="social-links">
            <a href="#" className="social-link">📱</a>
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Top Sales</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Book a Call</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Collections</h3>
          <ul>
            <li><a href="#">Single Designs</a></li>
            <li><a href="#">Family Designs</a></li>
            <li><a href="#">Group Designs</a></li>
            <li><a href="#">Custom Orders</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>{t.location}</li>
            <li>Phone: +251 911 234 567</li>
            <li>Email: info@astiereshifon.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Astiere Shifon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;