import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" exact className="nav-link">
        Home
      </NavLink>
      <NavLink to="/grass" className="nav-link">
        Grass
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}

export default Nav;
