import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<Homepage />} />
          <Route path="*" element={<h4>Error 404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
