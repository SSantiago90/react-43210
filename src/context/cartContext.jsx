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

  /*  function addItem(product, count) {
    const newCart = [...cart]; // shallow copy

    if (isInCart(product.id)) {
      let index = cart.findIndex((cartItem) => cartItem.id === product.id);
      let itemUpdated = { ...newCart[index] };
      itemUpdated.count += count;
      setCart(newCart);
    } else {
      newCart.push({ ...product, count });
      setCart(newCart);
    }
  } */

  function addItem(product, count) {
    const newCart = [...cart]; // shallow copy

    if (isInCart(product.id)) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, count: cartItem.count + count };
          } else {
            return { ...cartItem };
          }
        })
      );
    } else {
      newCart.push({ ...product, count });
      setCart(newCart);
    }
  }

  function getItem(id) {
    const itemBuscado = cart.find((item) => item.id === id);
    return itemBuscado;
    /* {} => truthy */
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function countItems() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function countTotalPrice() {
    return 999;
  }

  function clear() {
    setCart([]);
  }

  function removeItem(idDelete) {
    setCart(cart.filter((item) => item.id !== idDelete));
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        saludo,
        addItem,
        countItems,
        removeItem,
        getItem,
        isInCart,
        countTotalPrice,
        clear,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
