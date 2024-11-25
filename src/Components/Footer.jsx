import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <p>&copy; 2024 My Website. All rights reserved.</p>
          <ul className="footer-links">
            <li>
              <NavLink to="#privacy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="#terms">Terms of Service</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
