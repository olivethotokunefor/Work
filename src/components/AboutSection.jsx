import React, { useEffect } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { User, Briefcase, ArrowRight } from "lucide-react";
import us from "../assets/victoria.jpg";
import "../css/AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-section-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach(el => observer.observe(el));

    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="aboutcontainer">
        <div className="intro" data-animate>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about my journey in data analytics, my passion for solving problems, and the experiences that shaped my career.
          </p>
        </div>

        <div className="about-grid" data-animate>
          <div className="about-content">
            <h3 className="about-heading">
              Hi, I'm <span className="highlight-name">Onumajuru Chinenye Victoria</span>, a Data Analyst with a passion for turning raw data into actionable insights
            </h3>
            <p className="about-text">
              I've been running my own business for over three years, which has given me hands-on experience in understanding market trends, customer behavior, and effective decision-making.
            </p>
            <p className="about-text">
              My approach involves understanding business goals first, then applying the right analytical methods to extract meaningful patterns from data. I'm skilled in statistical analysis, data visualization, and developing predictive models. My work combines analytical skills with real-world business insight, and I'm passionate about using data to solve problems and drive results.
            </p>

            <div className="info-grid">
              <div className="info-box">
                <div className="icon-wrapper">
                  <User className="info-icon" />
                </div>
                <div>
                  <h4 className="info-title">Education</h4>
                  <p className="info-description">
                    Diploma in Data Analytics - NIIT. <br />
                    Bachelors in Environmental Science
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="icon-wrapper">
                  <Briefcase className="info-icon" />
                </div>
                <div>
                  <h4 className="info-title">Experience</h4>
                  <p className="info-description">2+ years in Data Analysis across various Businesses</p>
                </div>
              </div>
            </div>

            <a href="https://docs.google.com/document/d/e/2PACX-1vRdMCF4hLg0D0iU8Nn1MedVJ3-yXWzKIO3Dw8ImKX5fWG78e-oSrsGVPhMott_D23akG-pe1yaPGKCn/pub" style={{ textDecoration: "none" }}>
              <Button className="download-cv-button">
                Download CV <ArrowRight className="arrow-icon" />
              </Button>
            </a>
          </div>

          <div className="about-image">
            <Card className="profile-card" style={{ width: "100%", height: "100%" }}>
              <img src={us} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Card>
          </div>
        </div>

        <div className="experience-section" data-animate>
          <h3 className="experience-title">Work Experience</h3>
          <div className="experience-list">
            {[
              {
                position: "Freelance Data Analyst / Consultant",
                company: "Remote / Self-Employed",
                period: "2022 - Present",
                description:
                  "Delivered analytical solutions to small businesses, improving sales tracking and inventory management. Designed predictive models in R to forecast customer demand and improve supply chain efficiently."
              }
            ].map((job, index) => (
              <Card key={index} className="experience-card">
                <div className="experience-content">
                  <div>
                    <h4 className="position">{job.position}</h4>
                    <p className="company">{job.company}</p>
                    <p className="description">{job.description}</p>
                  </div>
                  <div className="job-period">{job.period}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
