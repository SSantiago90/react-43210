import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryid" element={<Homepage />} />
        <Route path="*" element={<h4>Error 404: Page not found</h4>} />
      </Routes>
      <footer>Hola soy un footer</footer>
    </BrowserRouter>
  );
}

export default App;
