import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/Homepage";
import CartView from "./components/CartView/CartView";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhzrq6NZMxQk8EhbcDNNgfUDd2XV8Whfg",
  authDomain: "react-coder-deede.firebaseapp.com",
  projectId: "react-coder-deede",
  storageBucket: "react-coder-deede.appspot.com",
  messagingSenderId: "214234342632",
  appId: "1:214234342632:web:88d25164959139735c155d",
};

const firebaseApp = initializeApp(firebaseConfig);
// conectarnos a Firestore
const db = getFirestore(firebaseApp);
console.log(db);

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
