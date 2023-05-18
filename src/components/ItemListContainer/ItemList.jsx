import Item from "../Item/Item";
import Flex from "../Flex/Flex";

function ItemList({ products }) {
  return (
    <div>
      <Flex title="Mi catálogo">
        {products.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemList;
