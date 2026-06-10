import React from "react";

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    school: "Ganpat University",
    duration: "2024 – 2026",
    CGPA: "7.3/10",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    school: "Veer Kunwar Singh University",
    duration: "2020 – 2024",
    CGPA: "6.2/10",
  },
  {
    title: "Secondary (X), CBSE",
    school: "St Paul Sr Secondary School, Sasaram Rohtas, Bihar",
    duration: "2018",
    CGPA: "53%",
  },
];

const Education = () => (
 <section id="education" className="education-section">
  <h2 className="section-title">Education</h2>

  <div className="education-timeline">
    {education.map((item) => (
      <div key={item.title} className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <h3>{item.title}</h3>
          <p className="education-school">{item.school}</p>
          <p className="education-duration">{item.duration}</p>

          {item.CGPA && (
            <span className="education-grade">
              CGPA: {item.CGPA}
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
);

export default Education;
