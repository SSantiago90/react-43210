import "./App.css";

function App() {
  function authUser() {
    return {
      username: "Matias",
      colorPreferido: "lightblue",
    };
  }

  function contadorDeVistas() {
    return 123808053;
  }

  const user = authUser();

  const stylesViewCount = {
    backgroundColor: user.colorPreferido,
    color: "black",
    fontWeight: "700",
    marginTop: "5",
  };

  return (
    <div className="header">
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <h1>Hola {user.username} bienvenida a Coderhouse</h1>
      </div>
      <div>
        <h2>Hola de nuevo</h2>
        <div style={stylesViewCount}>{contadorDeVistas()}</div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
