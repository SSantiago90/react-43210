import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/Homepage";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryid" element={<Homepage />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<h4>Error 404: Page not found</h4>} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
