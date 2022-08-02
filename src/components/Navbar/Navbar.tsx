import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/api">API</Link>
      </li>
      <li>
        <Link to="/nueva-api">Consumir API</Link>
      </li>
      <li>
        <Link to="/rick-morty">Rick and Morty</Link>
      </li>
      <li>
        <Link to="/filtrar">Filtrar</Link>
      </li>
    </ul>
  );
};

export default Navbar;
