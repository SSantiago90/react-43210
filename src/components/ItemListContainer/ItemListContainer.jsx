import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryData, getData } from "../../services/firebase";
import ItemList from "./ItemList";

function ItemListContainer() {
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  const fetchData = categoryid === undefined ? getData : getCategoryData;

  useEffect(() => {
    fetchData(categoryid)
      .then((respuesta) => setProducts(respuesta))
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryid]);

  return <ItemList isLoading={isLoading} products={products} />;
}

export default ItemListContainer;
