import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-btn-burger"></div>
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contato">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/menu">
                Menu
              </Link>
            </li>
            {/* <li>
              <Link to="/login">
                Login 
              </Link>
            </li> */}
            {/* <li>
              <Link to="/teste">
                Teste
              </Link>
            </li> */}
            {/* <li>
              <Link to="/user">
                Usuário
              </Link>
            </li> */}
            {/* <li>
              <Link to="/pagamento">
                Pagamento
              </Link>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;