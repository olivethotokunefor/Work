import React, { useEffect, useRef } from 'react';
import '../css/Skills.css';

const skills = [
  { name: 'Excel (Advanced Dashboards, PivotTables, VBA', level: 100, color: 'bg-purple' },
  { name: 'Statistics for Analytics', level: 96, color: 'bg-indigo' },
  { name: 'Programming in R', level: 100, color: 'bg-emerald' },
  { name: 'Data Preparation & Cleaning in R', level: 100, color: 'bg-teal' },
  { name: 'Advanced R Programming', level: 75, color: 'bg-amber' },
  { name: 'SQL (Intermediate)', level: 100, color: 'bg-pink' },
  { name: 'Descriptive & Inferential Statistics for Analytics', level: 100, color: 'bg-purple' },
  { name: 'Python (Basic)', level: 100, color: 'bg-indigo' },
  { name: 'Power BI (PBIX),', level: 100, color: 'bg-emerald' },
  { name: 'ETL Processes', level: 80, color: 'bg-teal' },
  { name: 'Esemble Modeling', level: 100, color: 'bg-amber' },
  { name: 'Model Evaluation & Performance Metrics', level: 100, color: 'bg-pink' },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.skill-progress-fill');
          fills.forEach((bar) => {
            bar.style.width = bar.dataset.width || '0%';
          });
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <div className="skillscontainer">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My toolkit includes programming languages, data visualization tools, and analytical techniques 
          that I use to extract meaningful insights from data.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="card">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-progress">
                <div
                  className={`skill-progress-fill ${skill.color}`}
                  data-width={`${skill.level}%`}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">45+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">12+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
