import Button from "./components/Button";
import Item from "./components/Item/Item";
import ViewCount from "./components/ViewCount/ViewCount";

function App() {
  function authUser() {
    return {
      username: "Matias",
      colorPreferido: "lightblue",
    };
  }

  const user = authUser();

  function handleNoClick() {
    alert("Te pedi que no me toques");
  }

  function handleClick() {
    alert("Gracias por clickear");
  }

  return (
    <div className="header">
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
          <Button>Ver documentación</Button>
        </p>
      </div>
      <div>
        <h1>Hola {user.username} bienvenida a Coderhouse</h1>
      </div>
      <div>
        <h2>Hola de nuevo</h2>
        <ViewCount />
        <div>
          <Item
            title="Pantalon"
            price="456"
            img="https://via.placeholder.com/300x200"
            category="ofertas"
          />
          <Item
            title="Remera"
            price="123"
            img="https://via.placeholder.com/300x200"
            category="ofertas"
          />
        </div>
        <div>
          <Button color="red" onClick={handleClick}>
            Clickeame por favor
          </Button>
          <Button color="green" onClick={handleNoClick}>
            No me clickeen
          </Button>
          {/* Button({color: "green", label="no me clickees"}) */}
        </div>
      </div>
    </div>
  );
}

export default App;
