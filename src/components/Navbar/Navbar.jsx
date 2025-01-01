import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vision-mission">Vision & Mission</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/magazine">Magazine</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
