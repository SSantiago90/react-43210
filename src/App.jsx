import Flex from "./components/Flex/Flex";
import Item from "./components/Item/Item";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  return (
    <div className="header">
      <NavBar />
      <ViewCount initialValue={0} />

      <Flex>
        <Item
          title="Remera"
          price="123"
          img="/src/assets/remera.png"
          category="ofertas"
          color="orange"
        />
        <Item
          title="Pantalon"
          price="456"
          img="https://via.placeholder.com/300x200"
          category="ofertas"
          color="green"
        />
        <Item
          title="Zapatilla"
          price="123"
          img="https://via.placeholder.com/300x200"
          category="ofertas"
          color="red"
        />
      </Flex>
    </div>
  );
}

export default App;
