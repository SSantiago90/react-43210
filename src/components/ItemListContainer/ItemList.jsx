import React from "react";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div>
      {products.map((itemInArray) => (
        <Item key={itemInArray.id} {...itemInArray} />
      ))}
    </div>
  );
}

export default ItemList;
