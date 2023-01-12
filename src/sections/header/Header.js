import React, { useEffect } from "react";
import "./Header.css";
import headerImage from "../../assets/image1.jpg";
import data from "./data";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={headerImage} alt="header portrait" className="profileimg" />
        </div>
        <h3 data-aos="fade-up">Abiodun Labinjo</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send
          me the details of yoour project for a modern, mobile responsive,
          highly performant website today!
        </p>
        <div className="header__cta" data-aos="fade-up">
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
