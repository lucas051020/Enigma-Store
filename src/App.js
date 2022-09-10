import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer name="Lucas Alastuey" />
    </>
  );
}

export default App;
