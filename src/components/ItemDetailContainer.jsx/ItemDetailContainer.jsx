/* AsyncMock - servicioMock / backend/nube/api */
import { useEffect, useState } from "react";
import mobilePhones from "../../data/mobiles";

/* AsnyMock ----------------------------------------------- */
function getItemData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones[0]);
    }, 2000);
  });
}
/* ------------------------------------------------ */

function ItemDetailContainer() {
  // estado
  const [product, setProduct] = useState({});

  //efecto
  useEffect(() => {
    getItemData().then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  //UI
  return (
    /* <ItemDetail .../> */
    <div>
      <h1>Titulo: {product.title}</h1>
      <img src={product.img}></img>
      <h4>price: $ {product.price}</h4>
    </div>
  );
}

export default ItemDetailContainer;
