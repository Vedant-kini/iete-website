import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/iete_rgit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram social-icon"></i>
          </a>
        </div>
        <p>&copy; 2025 IETE RGIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


