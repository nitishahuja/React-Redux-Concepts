import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nonAuthenticated } from "./../actions/index.js";

function Navbar() {
  const dispatcher = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatcher(nonAuthenticated());
  };

  const history = useHistory();

  return (
    <nav className="container--2">
      <h2>Decision Point</h2>
      <Link to="/dashboard">
        <h4>Issues</h4>
      </Link>
      <Link to="/books">
        <h4>Books</h4>
      </Link>
      <button className="btn-logout" onClick={handleClick}>
        LOGOUT
      </button>
    </nav>
  );
}

export default Navbar;
