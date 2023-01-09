import React, { useState } from "react";
import "./Portfolio.css";
import ProjectsCategory from "./ProjectsCategory";
import Projects from "./Projects";
import data from "./data";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects i recently worked on for my clients. Use
        the buttons to toggle the diffrent categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategory />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
