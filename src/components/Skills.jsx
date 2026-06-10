import React from "react";

const skills = {
  "💻 Programming Languages": [
    "C",
    "C++",
    "Java",
    "Python",
    "C#",
    "Kotlin",
  ],
  "🌐 Web Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Web Development",
    "Frontend Development",
  ],
  "⚙️ Frameworks & Tools": [
    ".NET",
    "Node.js",
    "Express.js",
    "Android",
  ],
  "🔒 Cyber Security": [
    "Vulnerability Assessment",
    "Network Security",
    "Secure Coding",
  ],
  "🚀 DevOps & Tools": [
    "Docker",
    "Jenkins",
    "Git",
    "GitHub",
    "CI/CD Pipelines",
  ],
};

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="section-title">Skills & Technologies</h2>

    <div className="skills-grid">
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="skill-card">
          <h3>{category}</h3>

          <div className="skill-tags">
            {list.map((item) => (
              <span key={item} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;