import { ChaoticOrbit } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return (
    <div className="loader_container">
      <ChaoticOrbit size={125} speed={1.5} color="pink" />
    </div>
  );
}

export default Loader;
