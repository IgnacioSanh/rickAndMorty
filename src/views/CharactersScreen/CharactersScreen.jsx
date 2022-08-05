import React, { useState } from "react";
import RMCard from "../../components/RMCard/RMCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";

import styles from "./styles.module.css";
import { speciesSelect } from "./constants";
import { useEffect } from "react";

const AllCharactersScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState("");
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    (async () => {
      const result = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + currentPage,
        { method: "GET" }
      );
      const resultJSON = await result.json();
      setCharacters(resultJSON.results);
      setTotalPages(resultJSON.info.pages);
    })();
  }, []);

  function deleteCharacter(id) {
    const filteredArray = characters.filter((character) => character.id !== id);
    setCharacters(filteredArray);
  }

  return (
    <>
      <h1>Rick and Morty</h1>
      <div>
        <Select
          options={speciesSelect}
          title="Species"
          setSelected={setSelectedSpecie}
        />
        <label htmlFor="filter_name">Name</label>
        <input
          value={filteredName}
          onChange={(e) => setFilteredName(e.currentTarget.value)}
          placeholder="Search by name"
          className={styles.select}
        />
        <input type="button" value="Filter" />
      </div>
      <div className={styles.row}>
        <div className={styles.wrapper}>
          {characters.map((character) => (
            <RMCard
              character={character}
              key={character.id}
              handleDelete={deleteCharacter}
              showDeleteButton
            />
          ))}
        </div>
      </div>
      <p>
        Showing page {currentPage} of {totalPages}
      </p>
      <Button text="Previous page" />
      <Button text="Next page" />
    </>
  );
};

export default AllCharactersScreen;
