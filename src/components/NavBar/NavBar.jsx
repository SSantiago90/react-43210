import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

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
        <CartWidget />
      </ul>
    </nav>
  );
}

function CartWidget() {
  const { countItems } = useContext(cartContext);

  return (
    <div>
      🛒
      <span>{countItems()}</span>
    </div>
  );
}
