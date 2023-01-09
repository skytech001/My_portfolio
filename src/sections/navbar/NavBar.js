import React from "react";
import logo from "../../assets/logo.jpg";
import data from "./data";
import "./NavBar.css";
import { IoIosColorPalette } from "react-icons/io";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo" id="logoimg" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <button id="theme__icon">
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;