import React, { useState, useEffect } from "react";
import { getProductsAsync } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("fakestoreapi.com/products/${id}").then((res) => res.json);
    getProductsAsync().then((products) => {
      setItems(products);
      setLoading(false);
      console.log(products);
    });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemList itemList={items} />
    </>
  );
};

ItemListContainer.propTypes = {};

export default ItemListContainer;
