import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-name">
              Aurum Time
            </div>
            <div className="brand-sub-name">
              Luxury Beyond Time
            </div>
            <p className="brand-description">
              Crafting timeless elegance with precision and passion. Experience the art of horology with our exquisite collection of luxury timepieces.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Collections</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Limited Editions</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-links">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Heritage</a></li>
              <li><a href="#">Boutique Locations</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to receive exclusive offers and updates on new collections</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="payment-methods">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2023 Aurum Time. All rights reserved. Crafted with precision and passion.</p>
            <div className="legal-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;