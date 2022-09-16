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
      <Navbar />
      <ItemListContainer name="Lucas Alastuey" />
    </>
  );
};

export default App;