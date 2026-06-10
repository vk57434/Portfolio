import React from "react";

const experience = [
  {
    title: "Cyber Security Intern",
    company: "Infotact Solution · Virtual",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Conducted basic vulnerability assessments for small business networks.",
      "Understood common security risks and basic mitigation techniques.",
      "Gained exposure to security tools, documentation, and reporting.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "WeIntern Pvt. Ltd. · Remote",
    duration: "Dec 2025 – April 2026",
    points: [
      "Worked on frontend features using React and integrated REST APIs.",
      "Assisted in backend development with Node.js and Express.",
      "Participated in code reviews and deployment workflows.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section experience-section">
  <h2 className="section-title">Experience</h2>

  <div className="timeline">
    {experience.map((item) => (
      <div key={item.title} className="timeline-item">
        <div className="timeline-dot"></div>

        <div className="timeline-card">
          <h3>{item.title}</h3>
          <p className="timeline-subtitle">{item.company}</p>
          <p className="timeline-duration">{item.duration}</p>

          <ul className="timeline-list">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>
);

export default Experience;
