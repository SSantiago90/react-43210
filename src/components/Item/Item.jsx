import Button from "../Button";
import "./item.css";

function Item(props) {
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={props.img} alt="imagen"></img>
      </div>

      <div className="item-card_detail">
        <h4>$ {props.price}</h4>
        <small>{props.category}</small>
      </div>
      {/* <Button label="ver detalle" color="purple" /> */}
      <Button color="purple">Ver detalle</Button>
    </div>
  );
}

export default Item;
