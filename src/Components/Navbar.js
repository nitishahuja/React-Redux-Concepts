import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nonAuthenticated } from "./../actions/index.js";

function Navbar() {
  const dispatcher = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatcher(nonAuthenticated());
  };

  return (
    <nav className="container--2">
      <h1>Decision Point</h1>
      <NavLink to="/dashboard" activeClassName="active">
        <h3 activeClassName="active">Issues</h3>
      </NavLink>
      <NavLink to="/books" activeClassName="active">
        <h3>Books</h3>
      </NavLink>
      <h6 onClick={handleClick}>LOGOUT</h6>
    </nav>
  );
}

export default Navbar;
