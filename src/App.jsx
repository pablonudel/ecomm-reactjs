import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
