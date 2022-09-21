import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js";
import Cart from "./components/Cart.js";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;