import React from "react";
import Card from "../../components/Card";

const project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="projectPhotos" className="portimg" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopner noreferrer"
        >
          Demo
        </a>
        <a
          href={project.gtihub}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default project;
