import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.instagram.com/iete_rgit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <FaInstagram className="social-icon3" />
            <span className="social-text">Instagram</span>
          </a>
          <a
            href="mailto:iete.rgit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="social-link"
          >
            <FaEnvelope className="social-icon3" />
            <span className="social-text">Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/in/iete-rgit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon3" />
            <span className="social-text">LinkedIn</span>
          </a>
        </div>
        <p>&copy; 2025 IETE RGIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
