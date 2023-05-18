/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import mobilePhones from "../../data/mobiles";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

/* AsnyMock ----------------------------------------------- */
function getItemData(id) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(mobilePhones.find((item) => item.id === Number(id))),
      2000
    );
  });
}
/* ------------------------------------------------ */

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  /* { id: ____ } */

  useEffect(() => {
    getItemData(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

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
        <ItemCount stock={5} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
