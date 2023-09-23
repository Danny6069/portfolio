// src/components/Education.js

import React from 'react';
import './Education.css'; // Import the CSS file

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="education-item">
        <h3>Bachelor's Degree in Computer Science</h3>
        <p className="education-date">Graduated: May 2019</p>
        <p>
          <strong>University of Your Choice</strong>
          <br />
          City, State
        </p>
      </div>

      <div className="education-item">
        <h3>High School Diploma</h3>
        <p className="education-date">Graduated: June 2015</p>
        <p>
          <strong>Your High School Name</strong>
          <br />
          City, State
        </p>
      </div>
    </section>
  );
}

export default Education;
