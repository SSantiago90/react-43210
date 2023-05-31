/* AsyncMock - servicioMock / backend/nube/api */
import { useContext, useEffect, useState } from "react";
import mobilePhones from "../../data/mobiles";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";

/* AsynMock Promise ----------------------------------------------- */
function getItemData(idURL) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedItem = mobilePhones.find(
        (item) => item.id === Number(idURL)
      );
      resolve(requestedItem);
    }, 1000);
  });
}
/* --------------------------------------------------------------- */

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  // 2. Usamos/consumimos el Context
  const { cart, addItem, removeItem } = useContext(cartContext);
  console.log("context:", cart);

  function onAddToCart(count) {
    /* agregar al array del context este producto */
    addItem(product, count);
    alert(`Agregaste ${count} - ${product.title} al carrito`);
  }

  const id = useParams().id;

  useEffect(() => {
    getItemData(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

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
        {/* condicionales / renedering condicional */}
        <ItemCount onAddToCart={onAddToCart} stock={5} />
        <Button onClick={() => removeItem(product.id)}>Eliminar</Button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
