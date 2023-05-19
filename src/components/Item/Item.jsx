import { useState } from "react";
import Button from "../Button/Button";
import "./item.css";
import ItemCount from "../ItemCount/ItemCount";
import withConsoleLog from "../HOCs/withRenderCount";
import { Link } from "react-router-dom";

function CardDescription({ price, category }) {
  return (
    <div className="item-card_detail">
      <h4 className="item-card_price-tag">$ {price}</h4>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, color, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  let classNameFavorite;

  if (isFavorite === false) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  function handleClickFav() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Link to={`/product/${id}`}>
      <div className="item-card">
        <button onClick={handleClickFav} className={classNameFavorite}>
          ♥
        </button>
        <div className="item-card_header">
          <h2>{title}</h2>
          <small>{category}</small>
        </div>
        <div className="item-card_img">
          <img src={img} alt="imagen"></img>
        </div>

        <CardDescription price={price} color={color} />
        <ItemCount stock={5} />

        <Button color={color}>Ver detalle</Button>
      </div>
    </Link>
  );
}

const WrappedComponent = withConsoleLog(Item);
export default WrappedComponent;
