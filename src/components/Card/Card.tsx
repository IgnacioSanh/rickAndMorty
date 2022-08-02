import React from "react";

import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Avatar" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Card;
