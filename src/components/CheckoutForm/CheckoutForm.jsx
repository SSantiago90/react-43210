import Button from "../Button/Button";
import "./checkoutform.css";

function CheckoutForm() {
  return (
    <div className="checkoutform-container">
      <small>Completa tu compra</small>
      <input placeholder="Nombre" />
      <input placeholder="Email" />
      <input placeholder="Teléfono" />
      <Button color="#03c46c">Comprar</Button>
    </div>
  );
}

export default CheckoutForm;
