import Button from "./components/Button";
import Item from "./components/Item/Item";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  return (
    <div className="header">
      <NavBar />

      <div>
        <ViewCount initialValue={0} />

        <div style={{ display: "flex" }}>
          <Item
            title="Pantalon"
            price="456"
            img="https://via.placeholder.com/300x200"
            category="ofertas"
            color="green"
          />
          <Item
            title="Remera"
            price="123"
            img="https://via.placeholder.com/300x200"
            category="ofertas"
            color="orange"
          />
          <Item
            title="Zapatilla"
            price="123"
            img="https://via.placeholder.com/300x200"
            category="ofertas"
            color="red"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
