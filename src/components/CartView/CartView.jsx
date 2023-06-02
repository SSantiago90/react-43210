/* 
  1. mostrar los productos del context  
    A. ! importar el context, y el hook useContext
    B. ! Extraer del context el listado de productos
    C. Hacer el listado de productos ----> 
  ! 2. de forma condcional dar un mensaje si el carrito está vacío
*/
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartView() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      {cart.map((item) => (
        <ul key={item.id}>
          <li>
            Producto: {item.title}
            <br />
            Cantidad: {item.count}
            <button onClick={() => removeItem(item.id)}>X</button>
            <br />$ {item.count * item.price}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CartView;
