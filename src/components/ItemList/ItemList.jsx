import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ itemList }) => {
  return (
    <div className={styles.itemlist}>
      {itemList.map(({ id, name, description, price, stock, image }) => {
        return <Item key={id} name={name} price={price} image={image} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      pisturUrl: PropTypes.string,
    })
  ),
};
export default ItemList;
