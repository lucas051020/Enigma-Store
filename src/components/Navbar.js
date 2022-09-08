import logo from './logo.png';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <img src={logo} alt='logo navbar' />
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Categoria 1</a>
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
            </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;