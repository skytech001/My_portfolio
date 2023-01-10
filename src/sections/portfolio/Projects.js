import React from "react";
import Project from "./project";

const projects = ({ projects }) => {
  return (
    <div className="portfolio__projects">
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default projects;
