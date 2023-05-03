import "./navbar.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <a href="/">miTienda</a>
          </li>
        </h2>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Remeras
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Zapatillas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Camperas
          </a>
        </li>
        {/* CartWidget*/}
        <div>🛒</div>
      </ul>
    </nav>
  );
}
