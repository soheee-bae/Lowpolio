import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navi-ul">LOGO</div>

      <div className="navi-ul">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ol className="nav-list">HOME</ol>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <ol className="nav-list">ABOUT</ol>
        </Link>
        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <ol className="nav-list">CONTACT</ol>
        </Link>
        <Link to="/Skills" style={{ textDecoration: "none" }}>
          <ol className="nav-list">SKILLS</ol>
        </Link>
        <Link to="/Project" style={{ textDecoration: "none" }}>
          <ol className="nav-list">PROJECT</ol>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
