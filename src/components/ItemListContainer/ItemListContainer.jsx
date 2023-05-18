import { useEffect, useState } from "react";

/* AsyncMockService - servicioMock / backend/nube/api */
import mobilePhones from "../../data/mobiles";
import ItemList from "./ItemList";

function getData() {
  return new Promise((resolve) => {
    resolve(mobilePhones);
  });
}
/* ---------------------------------------------- */

function ItemListContainer() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((respuesta) => {
      console.log("llegaron los datos", respuesta);
      setProducts(respuesta);
    });
  }, []);

  return <ItemList products={products} />;
}

export default ItemListContainer;
