import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";

export default function NavBar() {
  // re-scroll to top cada vez que cambia la URL ("location")
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    <Link to="/cart">
      🛒
      {/* si el valor del cart es 0 no mostramos esto */}
      <span>{countItems()}</span>
    </Link>
  );
}
