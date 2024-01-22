import CardWidget from "../CardWidget/CardWidget";
import styles from "./NavBar.module.scss";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.links}>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
