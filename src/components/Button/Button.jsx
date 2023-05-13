import { useState } from "react";
import "./button.scss";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState(props.color);

  const styleBtn = {
    backgroundColor: colorBtn,
  };

  function handleClick() {
    props.onClick();
  }

  return (
    <button className={props.className} onClick={handleClick} style={styleBtn}>
      {props.children}
    </button>
  );
}
