import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="footer__logo">
              <span className="footer__logo-icon">🎬</span>
              <span className="footer__logo-text">Trident Productions</span>
            </div>
            <p className="footer__description">
              Your one-stop-solution for all media needs. Creating high-quality content that brings your vision to life.
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__list">
              <li><a href="#services" className="footer__link">Digital Ads</a></li>
              <li><a href="#services" className="footer__link">Documentaries</a></li>
              <li><a href="#services" className="footer__link">Music Videos</a></li>
              <li><a href="#services" className="footer__link">Films</a></li>
              <li><a href="#services" className="footer__link">Corporate Videos</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <p className="footer__contact-item">
                <i className="fas fa-envelope"></i>
                contact.tridentproductions@gmail.com
              </p>
              <p className="footer__contact-item">
                <i className="fas fa-phone"></i>
                +91 98765 43210
              </p>
              <p className="footer__contact-item">
                <i className="fas fa-map-marker-alt"></i>
                Mumbai, Maharashtra
              </p>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Follow Us</h3>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Trident Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

