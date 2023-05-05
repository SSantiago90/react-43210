import Flex from "../Flex/Flex";
import { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  let isDisabledSubstract = count === 1;
  /* let isDisabledAdd = ??? */

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <Flex>
          <button
            disabled={isDisabledSubstract}
            className="btn"
            onClick={handleSubstract}
          >
            -
          </button>
          <span className="itemcount_count">{count}</span>
          <button className="btn" onClick={handleAdd}>
            +
          </button>
        </Flex>
      </div>

      <div className="itemcount_btns">
        <button className="btn">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
