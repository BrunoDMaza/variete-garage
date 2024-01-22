import React from "react";
import styles from "./Item.module.scss";

const Item = ({ name, price, image }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_image}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.item_info}>
        <h2 className={styles.item_info_title}>{name}</h2>
      </div>
    </div>
  );
};

export default Item;
