import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getNavlinkActive = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1 className="logo">Router</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className="nav-link" style={getNavlinkActive}>
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={getNavlinkActive}
                >
                  About
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavlinkActive}
                >
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={getNavlinkActive}
                >
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="#signup" className="highlight">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="#login" className="highlight">
                  Login
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
