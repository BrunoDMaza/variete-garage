import React from "react";
import logo from "../../assets/img/logo_circulo_fondo_verde.jpg";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
