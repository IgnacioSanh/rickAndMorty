import React, { useState } from "react";

import Button from "../Button/Button";
import styles from "./styles.module.css";

const SearchInput = ({ value, setValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Busca un personaje"
        className={styles.searchInput}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

export default SearchInput;
