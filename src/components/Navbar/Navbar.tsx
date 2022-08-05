import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="characters/1">Characters</Link>
      </li>
      <li>
        <Link to="locations/1">Locations</Link>
      </li>
      <li>
        <Link to="episodes/1">Episodes</Link>
      </li>
    </ul>
  );
};

export default Navbar;
