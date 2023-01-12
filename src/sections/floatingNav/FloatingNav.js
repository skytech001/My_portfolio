import React from "react";
import "./FloatingNav.css";
import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-200} // this makes active toggle on the exact section
        className="scrollspy"
        items={["header", "about", "services", "portfolio", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
