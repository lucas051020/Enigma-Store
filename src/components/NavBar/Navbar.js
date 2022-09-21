import logo from './logo.png';
import "./Navbar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navBar">
          <div className="container-fluid">
            <img src={logo} alt="logo navbar" />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navBar-titles">
                <li className="nav-item">
                  <Link to="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/category2"><a className="nav-link" >PS2</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/category3"><a className="nav-link">PS3</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/category4"><a className="nav-link">PS4</a></Link>
                </li>
              </ul>
            </div>
            <CartWidget />
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;