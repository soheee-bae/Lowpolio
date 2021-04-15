import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navi-ul-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ol className="nav-list">Home</ol>
        </Link>
      </div>
      <div className="navi-ul">
        <Link to="/About" style={{ textDecoration: "none" }}>
          <ol className="nav-list">About</ol>
        </Link>
        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <ol className="nav-list">Contact</ol>
        </Link>
        <Link to="/Skills" style={{ textDecoration: "none" }}>
          <ol className="nav-list">Skill</ol>
        </Link>
        <Link to="/Project" style={{ textDecoration: "none" }}>
          <ol className="nav-list">Project</ol>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
