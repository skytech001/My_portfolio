import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategory = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (activeCAt) => {
    setActiveCategory(activeCAt);
    onFilterProjects(activeCAt);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          className={`btn  cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
          onChangeCategory={() => changeCategoryHandler(category)}
        />
      ))}
    </div>
  );
};

export default ProjectsCategory;
