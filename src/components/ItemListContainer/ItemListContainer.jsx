import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* AsyncMockService - servicioMock / backend/nube/api */
import ItemList from "./ItemList";
import mobilePhones from "../../data/mobiles";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mobilePhones);
    }, 2000);
  });
}

/* ---------------------------------------------- */

function ItemListContainer() {
  /* isLoading = false */
  let [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getData().then((respuesta) => {
      if (categoryid) {
        const filterProducts = respuesta.filter(
          (item) => item.category === categoryid
        );
        setProducts(filterProducts);
      } else {
        setProducts(respuesta);
      }
    });
  }, [categoryid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
