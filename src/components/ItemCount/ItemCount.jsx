import Flex from "../Flex/Flex";
import { useState } from "react";

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  let isDisabledSubstract = count === 1;

  return (
    <div className="count-container">
      <div className="count-btns">
        <Flex>
          <button disabled={isDisabledSubstract} onClick={handleSubstract}>
            -
          </button>
          <p>{count}</p>
          <button onClick={handleAdd}>+</button>
        </Flex>
      </div>
      <div>
        <button>Agregar a mi carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
