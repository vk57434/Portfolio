import React from "react";

const About = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={`${baseUrl}profile.jpg`} alt="Vivek Kumar" />
        </div>

      <div className="about-content">
        <h3>Hello, I'm Vivek Kumar 👋</h3>

        <p>
          I'm pursuing my <strong>Master of Computer Applications (MCA)</strong>
          at Ganpat University with a strong passion for
          <strong> Cyber Security</strong>,
          <strong> Full Stack Development</strong>, and
          <strong> Application Development</strong>.
        </p>

        <p>
          I completed a <strong>Cyber Security Internship at Infotact Solutions</strong>,
          where I gained hands-on experience in vulnerability assessment, network security,
          security documentation, and identifying common cyber threats.
        </p>

        <p>
          I also worked as a <strong>Full Stack Developer Intern at WeIntern Pvt. Ltd.</strong>,
          where I developed responsive web applications using React, integrated REST APIs,
          collaborated on backend development with Node.js and Express.js, and participated
          in deployment and code review processes.
        </p>

        <p>
          One of my key projects is a <strong>Conference Management System</strong> built
          using the MERN Stack, which streamlines conference workflows including paper
          submissions, reviews, scheduling, and payment management.
        </p>

        <p>
          I am continuously learning new technologies and enjoy solving real-world problems
          through innovative software solutions, cybersecurity practices, and collaborative
          development projects.
        </p>

        <div className="about-skills">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>Cyber Security</span>
          <span>Android</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
