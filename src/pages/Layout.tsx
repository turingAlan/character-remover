import React from "react";
import "../styles/layout.css";

import logo from "../logoHouseWare.png";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <nav className="nav-bar">
        <div className="appname-container">
          <h1 className="appname">Duplicate Remover</h1>
        </div>
        <div className="logo-container">
          <a href="/">
            <img className="logo" src={logo} alt="HouseWare Logo" />
          </a>
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <h4 style={{ fontWeight: "400" }}>2023-2024 Sarthak jain©</h4>
      </footer>
    </div>
  );
}

export default Layout;
