import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { characterService, locationService } from "@services";

import styles from "./styles.module.css";

const SingleCharacterView = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState(null);
  const [habitants, setHabitants] = useState([]);
  const [loadingLocation, setLoadingLocation] = useState(true);

  useEffect(() => {
    (async () => {
      const responseJson = await characterService.fetchCharacterById(
        characterId
      );
      setCharacter(responseJson);

      setLoadingLocation(true);
      const locationResponse = await fetch(responseJson.location.url, {
        mode: "cors",
      });
      const locationResponseJson = await locationResponse.json();
      setLocation(locationResponseJson);
      const habitants = await Promise.all(
        locationResponseJson.residents.slice(0, 5).map(async (residentURL) => {
          const habitantResponse = await fetch(residentURL, { mode: "cors" });
          const habitantResponseJson = await habitantResponse.json();
          return habitantResponseJson;
        })
      );
      setHabitants(habitants);

      setLoadingLocation(false);
    })();
  }, []);

  if (!character) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <div className={styles.imageWrapper}>
        <img src={character.image} alt="Character image" />
      </div>
      <div>
        <h3>Location: {character.location.name}</h3>
        {loadingLocation ? (
          <span>Loading residents...</span>
        ) : (
          <span>Other habitants ({location.residents.length})</span>
        )}
        <ul>
          {habitants.map((habitant) => (
            <li>{habitant.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleCharacterView;
