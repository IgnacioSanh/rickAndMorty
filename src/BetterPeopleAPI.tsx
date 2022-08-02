import React, { useEffect, useState } from "react";

import Tarjeta from "./components/Tarjeta/Tarjeta";

import "./estiloTarjeta.css";

const BetterPeopleAPI = () => {
  const defaultPerson = {
    name: "Juan Perez",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    species: "Human",
    status: "Alive",
  };

  const [idPersonaje, setIdPersonaje] = useState(1);
  const [loading, setLoading] = useState(false);
  const [personajes, setPersonajes] = useState([defaultPerson]);

  const llamarAPI = async () => {
    setLoading(true);
    const result = await fetch(
      "https://rickandmortyapi.com/api/character/" + idPersonaje,
      { method: "GET" }
    );
    const { name, status, image, species } = await result.json();
    setLoading(false);

    const nuevoPersonaje = {
      name,
      status,
      image,
      species,
    };

    setPersonajes([nuevoPersonaje, ...personajes]);
    setIdPersonaje(idPersonaje + 1);
  };

  useEffect(() => {
    (async () => {
      await llamarAPI();
    })();
  }, []);

  return (
    <>
      <h1>Buscar gente por API</h1>
      {loading && <h2>Cargando...</h2>}
      <input type="button" value="Llamar API" onClick={() => llamarAPI()} />

      <div className="wrapper">
        {!loading &&
          personajes.map((personaje) => {
            return <Tarjeta personaje={personaje} />;
          })}
      </div>
    </>
  );
};

export default BetterPeopleAPI;
