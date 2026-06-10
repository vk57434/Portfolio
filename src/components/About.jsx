import React from "react";


const About = () => (
  <section id="about" className="about-section">
    <h2 className="section-title">About Me</h2>

    <div className="about-container">

      <div className="about-image-box">
        <img
          src="/profile.jpg"
          alt="Vivek Kumar"
          className="about-image"
        />
      </div>

      <div className="about-content">

        <h3>👋 Hello, I'm Vivek Kumar</h3>

        <p>
          I am pursuing my Master of Computer Applications (MCA) at
          Ganpat University and have a strong interest in
          <strong> Full Stack Development</strong>,
          <strong> Cyber Security</strong>, and
          <strong> Software Engineering</strong>.
        </p>

        <p>
          I have completed internships in Cyber Security and Full Stack
          Development, where I worked with React.js, Node.js, Express.js,
          vulnerability assessment, and modern development workflows.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h4>2+</h4>
            <span>Internships</span>
          </div>

          <div className="stat-card">
            <h4>5+</h4>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h4>10+</h4>
            <span>Technologies</span>
          </div>
        </div>

        <div className="about-strengths">
          <span>✅ MERN Stack Development</span>
          <span>✅ Cyber Security</span>
          <span>✅ Problem Solving</span>
          <span>✅ Team Collaboration</span>
        </div>

      </div>
    </div>
  </section>
);

export default About;


