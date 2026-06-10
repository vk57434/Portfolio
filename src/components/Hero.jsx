import React from "react";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="hero">
      <div
        className="hero-cover"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(rgba(5,8,22,0.78), rgba(5,8,22,0.28)), url(${baseUrl}profile.svg)`,
        }}
      />
      <div className="hero-content">
        <p className="hero-greeting">Hi, I’m</p>
        <h1 className="hero-title">Vivek Kumar</h1>
        <p className="hero-subtitle">
          Cybersecurity Enthusiast · Full-Stack Developer · MCA Student
        </p>
        <p className="hero-text">
          I build secure, scalable and user-friendly applications. I’m
          passionate about cybersecurity, MERN stack development, and solving
          real-world problems through code.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-badge">
        <img
          className="hero-avatar"
          src={`${baseUrl}profile.jpg`}
          alt="Vivek Kumar"
        />
        <div className="hero-badge-inner">
          <span>🎓 MCA Student</span>
          <span>💻 Full Stack Developer Intern</span>
          <span>🔒 Cyber Security Intern</span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
