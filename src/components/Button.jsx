import { useState } from "react";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState(props.color);

  const styleBtn = {
    backgroundColor: colorBtn,
  };

  function handleClick() {
    setColorBtn("grey");
    props.onClick();
  }

  return (
    <button onClick={handleClick} style={styleBtn}>
      {props.children}
    </button>
  );
}
