import React from "react";
import "./Navbar.css";

const Navbar2 = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <a href="/" className="nav-title">
          logo houssem bitch
        </a>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar2;
