import { useState } from "react";

export default function ViewCount() {
  /* let viewCount = 0;*/
  let [viewCount, setViewCount] = useState(0); // -> [ variableDeEstado, setterDeLaVariableDeEstado ]

  const stylesViewCount = {
    backgroundColor: "blue",
    textAlign: "center",
    padding: "15px",
    color: "white",
    fontWeight: "700",
    marginTop: "5",
  };

  function handleClick() {
    console.log("clickeado");
    setViewCount(viewCount + 1);
  }

  return (
    <div onClick={handleClick} style={stylesViewCount}>
      Hiciste {viewCount} clicks
    </div>
  );
}
