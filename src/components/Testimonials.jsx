import React from "react";

const testimonials = [
  {
    name: "Mentor",
    role: "Cyber Security Supervisor",
    text: "Vivek demonstrated excellent analytical skills and consistently delivered quality work during the internship.",
  },
  {
    name: "Project Lead",
    role: "Full Stack Development Team",
    text: "A dedicated developer with strong problem-solving abilities and a great willingness to learn new technologies.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section section-alt">
    <h2 className="section-title">Testimonials</h2>
    <div className="rating">
  ⭐⭐⭐⭐⭐
</div>
    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="testimonial-card fade-in">
          <p className="testimonial-text">“{testimonial.text}”</p>
          <p className="testimonial-author">
            — {testimonial.name}, <span className="muted">{testimonial.role}</span>
          </p>
        </div>
      ))}
    </div>
    
  </section>
);

export default Testimonials;
