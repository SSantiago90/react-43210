import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <NavLink to="/">miTienda📱</NavLink>
          </li>
        </h2>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Apple">
            Apple
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Samsung">
            Samsung
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/Xiaomi">
            Xiaomi
          </NavLink>
        </li>
        {/* CartWidget*/}
        <div>🛒</div>
      </ul>
    </nav>
  );
}
