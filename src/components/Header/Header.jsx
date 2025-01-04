import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">IETE RGIT</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li className="dropdown">
            <a href="#sections">Sections</a>
            <ul className="dropdown-menu">
              <li><a href="#magazines">Magazines</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#events">Events</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#join" className="cta-button">Join Us</a>
      </nav>
    </header>
  );
};

export default Header;

