import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const saludo = "hola";

  /* 
  addItem(item, quantity) 
  removeItem(itemId, quantity) 
  clear()
  totalItemsInCart()  
  .......  
  */

  function addItem(product, count) {
    const newCart = [...cart]; // shallow copy/deep clone
    newCart.push({ ...product, count });
    setCart(newCart);
  }

  function countItems() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function countTotalPrice() {
    /* .... */
  }

  function clear() {
    /*  */
  }

  function removeItem(idDelete) {
    setCart(cart.filter((item) => item.id !== idDelete));
  }

  return (
    <cartContext.Provider
      value={{ cart, setCart, saludo, addItem, countItems, removeItem }}
    >
      {children}
    </cartContext.Provider>
  );
}
