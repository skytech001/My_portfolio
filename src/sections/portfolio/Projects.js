import React from "react";
import Project from "./project";

const projects = ({ projects }) => {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default projects;
