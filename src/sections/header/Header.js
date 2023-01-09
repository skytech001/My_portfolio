import React from "react";
import "./Header.css";
import headerImage from "../../assets/header.jpg";
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={headerImage} alt="header portrait" className="profileimg" />
        </div>
        <h3>Abiodun Labinjo</h3>
        <p>
          You are a click away from building your dream website or web app. Send
          me the details of yoour project for a modern, mobile responsive,
          highly performant website today!
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
