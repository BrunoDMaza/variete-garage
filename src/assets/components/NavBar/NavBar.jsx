import CardWidget from "../CardWidget/CardWidget";

function NavBar() {
  return (
    <nav>
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
