import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import mobilePhones from "../../data/mobiles";
import ItemList from "./ItemList";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 2000);
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
