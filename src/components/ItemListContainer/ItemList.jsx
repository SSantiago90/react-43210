import Item from "../Item/Item";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader";

function ItemList({ products }) {
  /* early return / retorno anticipado */
  if (products.length === 0) return <Loader />;

  return (
    <>
      <div>
        <Flex title="Mi catálogo">
          {products.map((itemInArray) => (
            <Item key={itemInArray.id} {...itemInArray} />
          ))}
        </Flex>
      </div>
    </>
  );
}

export default ItemList;
