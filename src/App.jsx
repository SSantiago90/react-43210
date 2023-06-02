import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/Homepage";
import CartView from "./components/CartView/CartView";

/* Rendering condicional:
  { codicion} ? <h1>Hola</h1> : <h2>Chau</h2> 
  { codicion} && <h1>Esto</h1>
  if(codicion) return <h1>Esto<h1>.... return <h2>Otra cosa</h2>
*/

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<Homepage />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<h4>Error 404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
