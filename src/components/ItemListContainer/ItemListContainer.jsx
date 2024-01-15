import React, { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <h1>"Hola {props.saludo} "</h1>
    </div>
  );
};

export default ItemListContainer;
