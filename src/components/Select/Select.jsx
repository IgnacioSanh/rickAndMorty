import React from "react";

import styles from "./styles.module.css";

const Select = ({ title, options, setSelected }) => {
  return (
    <>
      <label htmlFor="title">{title}</label>
      <select
        id="title"
        className={styles.select}
        onChange={(e) => setSelected(e.currentTarget.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
