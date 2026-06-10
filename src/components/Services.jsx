const services = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    desc: "Building responsive, scalable, and modern web applications using React, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Performing vulnerability assessments, implementing secure coding practices, and improving application security.",
  },
  {
    icon: "📱",
    title: "Android Development",
    desc: "Developing Android applications with user-friendly interfaces and efficient performance.",
  },
];

const Services = () => (
  <section id="services" className="services-section">
    <h2 className="section-title">What I Do</h2>

    <p className="section-text">
      My expertise and services that help transform ideas into real-world solutions.
    </p>

    <div className="service-grid">
      {services.map((service) => (
        <div key={service.title} className="service-card">
          <div className="service-icon">{service.icon}</div>

          <h3>{service.title}</h3>

          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;