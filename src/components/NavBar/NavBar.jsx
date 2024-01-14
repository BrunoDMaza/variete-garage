import CardWidget from "../CardWidget/CardWidget";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default NavBar;
