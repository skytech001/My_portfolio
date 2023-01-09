import React from "react";
import Project from "./project";

const projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className="portfolio__projects">
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default projects;
