import React, { useEffect, useState } from "react";

import Card from "./components/Card/Card";
import "./components/Card/Card.css";

const PeopleAPI = () => {
  const defaultPerson = {
    name: "Juan Perez",
    email: "juan.perez@correo.com",
    gender: "male",
    picture: "https://randomuser.me/api/portraits/men/75.jpg",
  };
  const [person, setPerson] = useState(defaultPerson);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const result = await fetch("https://randomuser.me/api/", {
        method: "GET",
      });
      const parsedJson = await result.json();
      const { name, email, picture, gender } = parsedJson.results[0];
      setPerson({
        name: `${name.first} ${name.last}`,
        email,
        picture: picture.large,
        gender,
      });
    })();
  }, []);

  const fetchPerson = async () => {
    setLoading(true);
    const result = await fetch("https://randomuser.me/api/", {
      method: "GET",
    });
    const parsedJson = await result.json();
    const { name, email, picture, gender } = parsedJson.results[0];
    setPerson({
      name: `${name.first} ${name.last}`,
      email,
      picture: picture.large,
      gender,
    });
    setLoading(false);
  };

  return (
    <>
      <h1>Consumir API</h1>
      <input
        type="button"
        value="Llamar API"
        className="button"
        onClick={fetchPerson}
      />

      <div className="card-div">
        <div className="card">
          {loading ? (
            <h2 className="loading-text">Loading...</h2>
          ) : (
            <>
              <img src={person.picture} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>
                    {person.name}{" "}
                    <span className="gender">
                      {person.gender === "female" ? "👩" : "👨"}
                    </span>
                  </b>
                </h4>
                <p>{person.email}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PeopleAPI;
