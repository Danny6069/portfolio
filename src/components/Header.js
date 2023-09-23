// src/components/Header.js

import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Dikshant Negi</h1>
        <p>Product Manager</p>
      </div>
    </header>
  );
}

export default Header;
