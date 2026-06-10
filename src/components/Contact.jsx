import React from "react";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        I’m open to internships, projects, and collaboration opportunities related to
        cybersecurity, full-stack development, and Android development.
      </p>

      <div className="availability">
        <span className="status-dot" aria-hidden="true" />
        Ready for full-stack development and security-focused roles.
      </div>

      <div className="contact-cards">
        <a className="contact-card" href="mailto:vk4492020@gmail.com">
          <h3>Email</h3>
          <p>vk4492020@gmail.com</p>
        </a>
        <a className="contact-card" href="tel:+919060915717">
          <h3>Phone</h3>
          <p>+91 9060915717</p>
        </a>
        <div className="contact-card">
          <h3>Location</h3>
          <p>Ahmedabad (Gujarat), India</p>
        </div>
        <a
          className="contact-card"
          href="https://github.com/vk57434"
          target="_blank"
          rel="noreferrer"
        >
          <h3>GitHub</h3>
          <p>github.com/vk57434</p>
        </a>
        <a
          className="contact-card"
          href="https://linkedin.com/in/vivek-kumar-1402a7185"
          target="_blank"
          rel="noreferrer"
        >
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/vivek-kumar-1402a7185/</p>
        </a>
      </div>

      <a className="hire-btn" href="mailto:vk4492020@gmail.com">
        Hire Me
      </a>
    </div>
  </section>
);

export default Contact;
