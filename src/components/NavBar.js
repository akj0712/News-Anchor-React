import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className={`navbar-brand ${
                  location.pathname === "/about" ? "active" : ""
                }`} to="/">
            News Anchor
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/business" className="nav-link">
                  Business
                </Link>
              </li>
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/entertainment" className="nav-link">
                  Entertainment
                </Link>
              </li>
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/health" className="nav-link">
                  Health
                </Link>
              </li>
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/science" className="nav-link">
                  Science
                </Link>
              </li>
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/sports" className="nav-link">
                  Sports
                </Link>
              </li>
              <li className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}>
                <Link to="/technology" className="nav-link">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
