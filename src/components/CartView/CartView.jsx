import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import "./cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrderWithStockUpdate } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem, countTotalPrice, clear } = useContext(cartContext);
  const navigateTo = useNavigate();

  async function handleConfirm() {
    const order = {
      items: cart,
      buyer: {
        name: "Rodrigo Matias",
        phone: 123123,
        email: "rodrigo@mail.com",
      },
      date: new Date(),
      price: countTotalPrice(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      console.log("respuesta", id);
      clear();

      navigateTo(`/order-confirmation/${id}`);
      /* 
      1. alert: SweetAlert/toastify -> muestren el id
      2. redirección: React Router -> /confirmation
      3. rendering condicional -> modificando un state
    */
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <Button color="#d95555" onClick={() => removeItem(item.id)}>
                  X
                </Button>
              </td>
              <th>$ {(item.price * item.count).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
        {/* <CheckoutForm /> */}
        <button onClick={handleConfirm}>Crear orden de compra</button>
      </div>
    </>
  );
}

export default CartContainer;
