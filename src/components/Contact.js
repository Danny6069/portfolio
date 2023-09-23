// src/components/Contact.js

import React from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="contact-info">
        <p>
          Feel free to reach out to me via email or connect with me on social media. I'm always
          open to new opportunities and collaborations.
        </p>

        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-profile">LinkedIn Profile</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/your-username">GitHub Profile</a>
          </li>
          <li>
            <strong>Twitter:</strong> <a href="https://twitter.com/your-twitter">Twitter Profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
