import React from "react";
import "./App.css";

const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python", "C#", "Kotlin"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React", "Web Development", "Frontend Development"],
  "Frameworks & Tools": [".NET", "Node.js", "Express.js", "Android"],
  Other: ["Cybersecurity"],
};

const projects = [
  {
    title: "Conference Management System (MERN Stack)",
    duration: "Jul 2025 – Nov 2025",
    description:
      "A complete Conference Management System that manages the full workflow of an academic/technical conference, including paper submission, review process, scheduling, payments, and participant management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Basic Vulnerability Assessment for Small Business Network",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Performed a basic vulnerability analysis on a small business network to identify security gaps and suggest improvements.",
    tech: ["Cybersecurity", "Network Security Basics"],
  },
];

const App = () => {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-logo">Vivek Kumar</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I’m</p>
          <h1 className="hero-title">Vivek Kumar</h1>
          <p className="hero-subtitle">
            Cybersecurity Enthusiast · Full-Stack Developer · MCA Student
          </p>
          <p className="hero-text">
            I build secure, scalable and user-friendly applications. I’m passionate about
            cybersecurity, MERN stack development, and solving real-world problems through code.
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
          <div className="hero-badge-inner">
            <span>MCA Student</span>
            <span>Cyber Security Intern</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I’m currently pursuing my Master of Computer Applications (MCA) at Ganpat University.
          I have a strong interest in <b>Cyber Security</b>, <b>Web Development</b>, and
          <b> Application Development</b>. I’ve completed a Cyber Security internship where I
          worked on vulnerability assessment for small business networks.
        </p>
        <p className="section-text">
          I enjoy building full-stack applications. One of my key projects is a{" "}
          <b>Conference Management System</b> using the MERN stack that handles the complete
          conference workflow from paper submission to payments and scheduling.
        </p>
        <p className="section-text">
          I’m always learning new technologies and looking for opportunities to apply my skills to
          real-world problems and collaborative projects.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skill-card">
              <h3>{category}</h3>
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-card">
          <h3>Cyber Security Intern</h3>
          <p className="timeline-subtitle">Infotact Solution · Virtual</p>
          <p className="timeline-duration">Jun 2025 – Aug 2025</p>
          <ul className="timeline-list">
            <li>Conducted basic vulnerability assessments for small business networks.</li>
            <li>Understood common security risks and basic mitigation techniques.</li>
            <li>Gained exposure to security tools, documentation, and reporting.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-alt">
        <h2 className="section-title">Education</h2>
        <div className="timeline-card">
          <h3>Master of Computer Applications (MCA)</h3>
          <p className="timeline-subtitle">Ganpat University</p>
          <p className="timeline-duration">2024 – 2026</p>
        </div>
        <div className="timeline-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p className="timeline-subtitle">Veer Kunwar Singh University</p>
          <p className="timeline-duration">2020 – 2024 · 62%</p>
        </div>
        <div className="timeline-card">
          <h3>Secondary (X), CBSE</h3>
          <p className="timeline-subtitle">
            St Paul Sr Secondary School, Sasaram Rohtas, Bihar
          </p>
          <p className="timeline-duration">2018 · 53.60%</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-duration">{project.duration}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          I’m open to internships, projects, and collaboration opportunities related to
          cybersecurity, full-stack development, and Android development.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:vk4492020@gmail.com">vk4492020@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <a href="tel:+919060915717">+91 9060915717</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span>Mehsana, India</span>
          </div>
          {/* Optional GitHub/LinkedIn placeholders */}
          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/vk57434" target="_blank" rel="noreferrer">
              github.com/vk57434
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <a href="https://linkedin.com/in/vivek-kumar-1402a7185" target="_blank" rel="noreferrer">
              linkedin.com/in/vivek-kumar-1402a7185/
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
