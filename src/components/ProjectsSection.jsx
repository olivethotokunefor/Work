import React, { useState, useEffect, useRef } from "react";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import "../css/Projects.css"; // Import the CSS

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
    //   id: 1,
    //   title: "E-Commerce Sales Analysis",
    //   description: "Interactive dashboard analyzing online sales trends, customer behavior, and product performance.",
    //   category: "Dashboard",
    //   image: <FaChartBar className="icon" />,
    //   tools: ["Tableau", "SQL", "Excel"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   id: 2,
    //   title: "Market Segmentation Model",
    //   description: "Clustering algorithm to identify customer segments based on purchasing patterns.",
    //   category: "Machine Learning",
    //   image: <FaChartPie className="icon" />,
    //   tools: ["Python", "scikit-learn", "Pandas"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   id: 3,
    //   title: "Financial Forecasting",
    //   description: "Time series analysis for predicting financial metrics and identifying trends.",
    //   category: "Forecasting",
    //   image: <FaChartLine className="icon" />,
    //   tools: ["R", "Python", "PowerBI"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   id: 4,
    //   title: "Supply Chain Optimization",
    //   description: "Analysis of logistics data to optimize inventory and reduce shipping costs.",
    //   category: "Dashboard",
    //   image: <FaDatabase className="icon" />,
    //   tools: ["Tableau", "SQL", "Excel"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   id: 5,
    //   title: "Customer Churn Prediction",
    //   description: "Predictive model to identify at-risk customers and prevent churn.",
    //   category: "Machine Learning",
    //   image: <FaDatabase className="icon pink" />,
    //   tools: ["Python", "TensorFlow", "SQL"],
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    
      id: 6,
      title: "Extended Employee Performance",
      description: "A project on the extended employee performance and productivity.",
      category: "Forecasting",
      image: <FaChartBar className="icon green" />,
      tools: "R Studio",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = ["All", "Dashboard", "Machine Learning", "Forecasting"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

useEffect(() => {
  const sections = document.querySelectorAll(".projects-section");
  console.log("Sections found:", sections); // Check if elements are selected

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element in view:", entry.target); // Verify when in view
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

 

  return (
    <section  className="projects-section" id="projects">
      <div className="projectscontainer">
        <div className="header">
          <h2>Projects & Case Studies</h2>
          <p>Explore a collection of data analysis projects showcasing my skills in visualization, statistical analysis, and machine learning.</p>
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "active" : ""}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tools">
                {project.tools}
              </div>
              <div className="links">
                <a href={project.demoUrl}>View Project <FaArrowRight /></a>
                <a href={project.githubUrl}><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="outline-button">
            View All Projects <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
