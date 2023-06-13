/* AsyncMock - servicioMock backend/nube/api */
import { useContext, useEffect, useState } from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { getItemData } from "../../services/firebase";

function ItemDetailContainer() {
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState(null); // {} truthy => evalua a true
  const [countInCart, setCountInCart] = useState(0);

  // 2. Usamos/consumimos el Context
  const { addItem, removeItem } = useContext(cartContext);

  function onAddToCart(count) {
    addItem(product, count);
    setCountInCart(count);
    /* sweet-alert / toastify */
    console.log(`Agregaste ${count} - ${product.title} al carrito`);
  }

  const id = useParams().id;

  useEffect(() => {
    getItemData(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => {
        setErrors(error.message);
      });
  }, [id]);

  if (errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

  if (product) {
    return (
      /* Separar en componente de presentación: <ItemDetail .../> */
      <div className="card-detail_main">
        <div className="card-detail_img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="card-detail_detail">
          <h1>{product.title}</h1>
          <h2 className="priceTag">$ {product.price}</h2>
          <small>{product.detail}</small>

          {countInCart === 0 ? (
            <ItemCount onAddToCart={onAddToCart} stock={5} />
          ) : (
            <Link to="/cart">Ir al carrito</Link>
          )}

          <Button onClick={() => removeItem(product.id)}>Eliminar</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="card-detail_main">
      <Loader />
    </div>
  );
}

export default ItemDetailContainer;
