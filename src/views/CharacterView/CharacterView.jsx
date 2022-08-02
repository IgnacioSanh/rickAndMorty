import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

const CharacterView = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      const responseJson = await response.json();
      setCharacter(responseJson);
    })();
  });

  if (!character) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Character {character.name}</h1>
      <div className={styles.imageWrapper}>
        <img src={character.image} alt="Character image" />
      </div>
    </div>
  );
};

export default CharacterView;
