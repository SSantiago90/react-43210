import Carrousel from "./components/Carrousel/Carousel_2";
import Item from "./components/Item/Item";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  const imgs = [
    { title: "img1", url: "https://place-hold.it/500x101" },
    { title: "img2", url: "https://place-hold.it/500x102" },
    { title: "img3", url: "https://place-hold.it/500x103" },
  ];

  return (
    <div className="header">
      <NavBar />
      <Carrousel>
        <div>
          <h3>Primer slide</h3>
          <img src="https://place-hold.it/500x103"></img>
        </div>
        <div>
          <h3>Segundo Slide</h3>
          <p>Hola Mundo</p>
        </div>
        <div>
          <Item title="prueba" price="200" />
        </div>
      </Carrousel>
      <ViewCount initialValue={0} />

      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
