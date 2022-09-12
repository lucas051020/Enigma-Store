import logo from './logo.png';
import "./Navbar.css";
import "./CartWidget"
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navBar">
          <div className="container-fluid">
            <img src={logo} alt="logo navbar" />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navBar-titles">
                <li className="nav-item">
                  <a className="nav-link" href="#">Categoria 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categoria 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categoria 3</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categoria 4</a>
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