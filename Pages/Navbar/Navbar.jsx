import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar-content">
          <div className="nav-logo">
            <h2>CodeNest.</h2>
          </div>
          <ul className="nav-list">
            <li className="link">
              <a href="#">Home</a>
            </li>
            <li className="link">
              <a href="#">About</a>
            </li>
            <li className="link">
              <a href="#">Contact</a>
            </li>
            <li className="link">
              <a href="#">Blog</a>
            </li>
            <li className="link">
              <a href="#">Descrip</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
