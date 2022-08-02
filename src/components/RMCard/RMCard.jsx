import React from "react";

import { Link } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./styles.module.css";

const RMCard = ({ character, handleDelete, showDeleteButton = false }) => {
  const { id, name, species, status, location, image, origin } = character;

  function onDelete(id) {
    handleDelete(id);
    console.log("Funcion ejecutada dentro de la tarjeta");
  }

  return (
    <div className={styles.wrapper}>
      <a href="">Link</a>
      <img src={image} className={styles.image} />
      <div className={styles.descriptionWrapper}>
        <div className={styles.rowContainer}>
          <Link to={`/character/${id}`} className={styles.header}>
            {name}
          </Link>
          <div className={styles.columnContainer}>
            <div
              className={[
                styles.littleCircle,
                status === "Alive" ? styles.green : styles.red,
              ].join(" ")}
            />
            <span className={styles.status}>
              {status} - {species}
            </span>
          </div>
        </div>
        <div className={styles.rowContainer}>
          <span className={styles.subtitle}>Last known location:</span>
          <span>{location.name}</span>
        </div>
        <div className={styles.rowContainer}>
          <span className={styles.subtitle}>First seen in:</span>
          <span>{origin.name}</span>
        </div>
        {showDeleteButton && (
          <div className={styles.rowContainer}>
            <Button text="Eliminar" onClick={() => onDelete(id)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RMCard;
