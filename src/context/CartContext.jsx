import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [CartList, setCartList] = useState([]);
  const [CartQty, setCartQty] = useState(0);
  const [CartTotal, setCartTotal] = useState(0);

  const handleTotals = (op, prop, item, state) => {
    return op === "add" ? () => {return state + item[prop]} : () => {return state - item[prop]}
  };

  const availCant = (product) => {
    const item = CartList.find((item) => product.id === item.id);
    return item ? product.stock - item.quantity : product.stock;
  };

  const addItem = (item) => {
    let itemAdded = CartList.find((i) => i.id === item.id);
    if (itemAdded) {
      itemAdded.quantity += item.quantity;
      itemAdded.subtotal += item.price * item.quantity;
    } else {
      setCartList([...CartList, item]);
    }

    setCartTotal(handleTotals("add", "subtotal", item, CartTotal));
    setCartQty(handleTotals("add", "quantity", item, CartQty));
  };

  const removeItem = (item) => {
    CartList.splice(CartList.indexOf(CartList.find((i) => i.id === item.id)), 1);
    setCartList(CartList);
    setCartTotal(handleTotals("subtract", "subtotal", item, CartTotal));
    setCartQty(handleTotals("subtract", "quantity", item, CartQty));
  };

  const emptyCart = () => {
    setCartList([]);
    setCartQty(0);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        CartQty,
        CartTotal,
        addItem,
        emptyCart,
        removeItem,
        availCant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
