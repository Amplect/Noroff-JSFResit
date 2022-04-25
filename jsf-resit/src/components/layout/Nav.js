import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" exact className="nav-link">
        home
      </NavLink>
      <NavLink to="/grass" className="nav-link">
        grass
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        contact
      </NavLink>
    </nav>
  );
}

export default Nav;
