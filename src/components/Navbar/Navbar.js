import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar ">
      <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
        &#9776;
      </label>
      <a href="/" class="logo">
        logo
      </a>
      <input type="checkbox" id="chkToggle"></input>
      <ul class="main-nav" id="js-menu">
        <li>
          <a href="#" class="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" class="nav-links">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
