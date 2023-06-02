import { useState } from "react";
import "./button.scss";

export default function Button({
  color,
  children,
  onClick,
  style,
  className = "btn",
}) {
  const [colorBtn, setColorBtn] = useState(color);

  const styleBtn = {
    backgroundColor: colorBtn,
    ...style,
  };

  function handleClick() {
    onClick();
  }

  return (
    <button className={className} onClick={handleClick} style={styleBtn}>
      {children}
    </button>
  );
}
