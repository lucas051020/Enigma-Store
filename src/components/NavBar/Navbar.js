import logo from './logo.png';
import "./Navbar.css";
import "./CartWidget"
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
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="catrgory2" className="nav-link">PS2</Link>
                </li>
                <li className="nav-item">
                  <Link to="category3" className="nav-link">PS3</Link>
                </li>
                <li className="nav-item">
                  <Link to="category4" className="nav-link">PS4</Link>
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