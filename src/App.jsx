import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import HomeContent from "./components/HomeContent/HomeContent";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<HomeContent />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
