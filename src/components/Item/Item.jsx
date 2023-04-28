import { useState } from "react";
import Button from "../Button";
import "./item.css";

function CardDescription({ price, category }) {
  return (
    <div className="item-card_detail">
      <h4>$ {price}</h4>
      <small>{category}</small>
    </div>
  );
}

function Item({ title, img, price, category, color }) {
  const [isFavorite, setIsFavorite] = useState(false);

  let classNameFavorite;
  /* atras Ctrl+Z - adelante Ctrl+Shift+Z */
  if (isFavorite) {
    classNameFavorite = "item-card_favicon";
  } else {
    classNameFavorite = "item-card_favicon favorite";
  }

  /* let classNameFavorite = isFavorite
    ? "item-card_favicon favorite"
    : "item-card_favicon"; */

  function handleClickFav() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="item-card">
      <div onClick={handleClickFav} className={classNameFavorite}>
        ♥️
      </div>
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>

      <CardDescription price={price} category={category} />

      {/* <Button label="ver detalle" color="purple" /> */}
      <Button color={color}>Ver detalle</Button>
    </div>
  );
}

export default Item;
