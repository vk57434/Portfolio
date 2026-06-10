import React from "react";

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
  {
    title: "AI Blog Generator",
    duration: "Jan 2026",
    description:
      "An AI-powered blog generator that uses OpenRouter to access multiple AI models (OpenAI, Anthropic, Google, etc.) to create detailed, SEO-optimized blog posts based on keywords.",
    tech: ["Next.js", "Firebase", "OpenAI API", "Stripe API"],
  },
  {
    title: "Quiz Web App",
    duration: "Jan 2026",
    description:
      "A quiz platform where users can take timed quizzes and see their scores.",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "EDTech Platform",
    duration: "Mar 2026",
    description:
      "An educational platform to deliver courses, quizzes, and track learner progress with secure authentication and analytics.",
    tech: ["React.js", "Firebase", "Node.js"],
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          {project.image && (
            <img src={project.image} alt={project.title} className="project-image" />
          )}
          <h3>{project.title}</h3>
          <p className="project-duration">{project.duration}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tech.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
