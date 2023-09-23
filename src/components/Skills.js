// src/components/Skills.js

import React from 'react';
import './Skills.css'; // Import the CSS file


function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="skill">
          <h3>Front-end Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3 (Sass/SCSS)</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Back-end Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className="skill">
          <h3>Other</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>RESTful APIs</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
    