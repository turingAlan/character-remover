import React from "react";
import "../styles/layout.css";

import logo from "../logoHouseWare.png";

import { Outlet } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
  FiHome,
} from "react-icons/fi";

function Layout() {
  return (
    <div className="layout-container">
      <nav className="nav-bar">
        <div className="appname-container"></div>
        <div className="logo-container">
          <a href="/">
            <img className="logo" src={logo} alt="HouseWare Logo" />
          </a>
        </div>
      </nav>
      <Outlet />
      <section className="contactme-section">
        <h2 style={{ textAlign: "center", fontSize: "35px" }}>Contact me</h2>
        <ul className="contactme-container">
          <li>
            <a href="https://github.com/turingAlan">
              {" "}
              <FiGithub color="black" size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sarthak-jain-70563a145/">
              <FiLinkedin color="black" size={25} />
            </a>
          </li>
          <li>
            <a href="mailto:sarthak0jain@gmail.com">
              <FiMail color="black" size={25} />
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1hciF9kSihj-s8hFEE9MvO2vnXakcvYXD/edit?usp=sharing&ouid=100594585711310421987&rtpof=true&sd=true">
              <FiFileText color="black" size={25} />
            </a>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <h4 style={{ fontWeight: "400" }}>2023-2024 Sarthak jain©</h4>
      </footer>
    </div>
  );
}

export default Layout;
