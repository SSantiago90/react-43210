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

/* HOC */
function withSearch(OrigComponent) {
  function WrappedComponent() {
    const [searchword, setSearchword] = useState("");

    function handleChange(evt) {
      const valor = evt.target.value;
      setSearchword(valor);
    }

    function filterList(products) {
      if (searchword === "") {
        return products;
      } else {
        return products.filter((item) => {
          let textTitle = item.title.toLowerCase();
          let word = searchword.toLowerCase();
          return textTitle.includes(word);
        });
      }
    }

    return (
      <>
        <input
          onChange={handleChange}
          placeholder="Buscar productos..."
        ></input>
        <OrigComponent filterList={filterList} />
      </>
    );
  }

  /* 👁️ acá */
  return WrappedComponent;
}
/* end HOC */

function ItemListContainerSearch({ filterList }) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((respuesta) => {
      console.log("llegaron los datos", respuesta);
      setProducts(respuesta);
    });
  }, []);

  return <ItemList products={filterList(products)} />;
}

const WrappedItemListContainerSearch = withSearch(ItemListContainerSearch);

export default WrappedItemListContainerSearch;
