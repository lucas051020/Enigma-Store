import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer name="Lucas Alastuey" />
    </>
  );
}

export default App;
