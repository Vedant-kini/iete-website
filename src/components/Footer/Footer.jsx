import React from 'react';
import './Footer.css';

import  instagramLogo from '../../Assets/instagramLogo.jpeg'; // Adjusted path
import linkedinLogo from '../../Assets/linkedinLogo.jpeg';
function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://www.instagram.com/iete_rgit/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" className="social-logo" />
        </a>
      </div>
      <p>&copy; 2025 IETE RGIT. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

