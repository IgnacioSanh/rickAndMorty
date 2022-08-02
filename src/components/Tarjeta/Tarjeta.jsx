import React from "react";

import "./estilos.css";

const Tarjeta = ({ personaje }) => {
  return (
    <div className="card">
      <img src={personaje.image} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{personaje.name}</b>
        </h4>
        <p>{personaje.species}</p>
        <p>{personaje.status}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
