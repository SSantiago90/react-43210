import Flex from "./components/Flex/Flex";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  return (
    <div className="header">
      <NavBar />
      <ViewCount initialValue={0} />
      <ItemDetailContainer />

      <Flex>
        <ItemListContainer />
      </Flex>
    </div>
  );
}

export default App;
