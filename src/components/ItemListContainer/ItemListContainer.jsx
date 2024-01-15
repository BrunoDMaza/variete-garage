import React, { useState, useEffect } from "react";
import products from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);
  return (
    <div>
      <ItemList itemsList={items} />
      <h1>"Hola ItemListContainer "</h1>
    </div>
  );
};

export default ItemListContainer;
