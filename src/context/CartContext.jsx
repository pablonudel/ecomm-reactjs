import { createContext, useState, useContext } from "react";


const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [CartList, setCartList] = useState([]);
  const [CartCant, setCartCant] = useState(0);
  const [CartTotal, setCartTotal] = useState(0);

  const handleTotales = (op, propiedad, item, estado) => {
    if (op === "sumar") {
      return estado + item[propiedad];
    } else {
      return estado - item[propiedad];
    }
  };

  const agregarItem = (item) => {
    let itemAdded = CartList.find((i) => i.id === item.id);

    if (itemAdded) {
      itemAdded.cantidad += item.cantidad;
      itemAdded.subtotal += item.precio * item.cantidad;
    } else {
      setCartList([...CartList, item]);
    }

    setCartTotal(handleTotales("sumar", "subtotal", item, CartTotal));
    setCartCant(handleTotales("sumar", "cantidad", item, CartCant));
  };

  const vaciarCart = () => {
    setCartList([]);
    setCartCant(0);
    setCartTotal(0);
  };

  const quitarItem = (item) => {
    let itemQuitar = CartList.indexOf(CartList.find((i) => i.id === item.id));
    CartList.splice(itemQuitar, 1);
    setCartList(CartList);
    setCartTotal(handleTotales("restar", "subtotal", item, CartTotal));
    setCartCant(handleTotales("restar", "cantidad", item, CartCant));
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        CartCant,
        CartTotal,
        agregarItem,
        vaciarCart,
        quitarItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
