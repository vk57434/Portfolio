import React from "react";
import { TypeAnimation } from "react-type-animation";

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
      {/* <div className="hero-content">
        <p className="hero-greeting">Hi, I’m</p>
        <h1 className="hero-title">Vivek Kumar</h1>
        <TypeAnimation
          sequence={[
            "💻 Full Stack Developer",
            2000,
            "🔒 Cyber Security Enthusiast",
            2000,
            "🎓 MCA Student",
            2000,
            "🚀 MERN Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />

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

          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>
        </div>
        <div className="hero-status">
          🟢 Full Stack Opportunities & Python Developer Opportunities
        </div>
      </div> */}
      <div className="hero-content">
        <p className="hero-greeting">👋 Hi, I'm</p>

        <h1 className="hero-title">Vivek Kumar</h1>

        <TypeAnimation
          sequence={[
            "💻 Full Stack Developer",
            2000,
            "🔒 Cyber Security Enthusiast",
            2000,
            "🎓 MCA Student",
            2000,
            "🚀 MERN Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />

        <div className="hero-status">
          🟢 Available for Internships & Full Stack Opportunities
        </div>

        <p className="hero-text">
          I build secure, scalable and user-friendly applications. I'm
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

          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>
          
        </div>
      </div>
      <div className="hero-badge">
        <img
          className="hero-avatar"
          src={`${baseUrl}profile.jpg`}
          alt="Vivek Kumar"
        />
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Cyber Security Enthusiast",
            2000,
            "MCA Student",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />
      </div>
    </section>
  );
};
export default Hero;
