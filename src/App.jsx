import Flex from "./components/Flex/Flex";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  return (
    <div className="header">
      <NavBar />
      <ViewCount initialValue={0} />

      <Flex>
        <ItemListContainer />
      </Flex>
    </div>
  );
}

export default App;
