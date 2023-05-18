import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda📲</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/apple">
            Iphone
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/google">
            Google
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/samsung">
            Samsung
          </Link>
        </li>
        {/* CartWidget*/}
        <div>🛒</div>
      </ul>
    </nav>
  );
}
