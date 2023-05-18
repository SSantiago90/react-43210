import { useEffect, useState } from "react";
import mobilePhones from "../../data/mobiles";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function getData(brandid) {
  return new Promise((resolve) => {
    if (brandid) {
      setTimeout(() =>
        resolve(
          mobilePhones.filter(
            (item) => item.category.toLowerCase() === brandid.toLowerCase()
          ),
          1000
        )
      );
    } else {
      setTimeout(() => resolve(mobilePhones), 1000);
    }
  });
}
/* ---------------------------------------------- */

function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const { brandid } = useParams();

  useEffect(() => {
    getData(brandid).then((respuesta) => {
      console.log("llegaron los datos", respuesta);
      setProducts(respuesta);
    });
  }, [brandid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
