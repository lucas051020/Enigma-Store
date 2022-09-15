import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer name="Lucas Alastuey" />}/>
          <Route path="category" element={<ItemListContainer name="Lucas Alastuey" />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
