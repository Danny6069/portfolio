// src/components/Experience.js

import React from 'react';
import './Experience.css'; // Import the CSS file

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Web Developer - ABC Tech</h3>
        <p className="experience-date">January 2020 - Present</p>
        <p>
          As a Web Developer at ABC Tech, I have been responsible for creating and maintaining
          interactive websites and web applications. My role involves collaborating with the
          development team to deliver high-quality solutions to clients.
        </p>
      </div>

      <div className="experience-item">
        <h3>Junior Developer - XYZ Solutions</h3>
        <p className="experience-date">June 2018 - December 2019</p>
        <p>
          During my time at XYZ Solutions, I worked on various web development projects, gaining
          hands-on experience in front-end and back-end technologies. I also assisted in debugging
          and optimizing code for improved website performance.
        </p>
      </div>
    </section>
  );
}

export default Experience;
