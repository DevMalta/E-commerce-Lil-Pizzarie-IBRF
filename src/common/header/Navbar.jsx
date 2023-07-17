import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            Logo
          </Link>
        </div> */}
        <div className={`navbar-menu ${mobileMenu ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={toggleMobileMenu}>
                Contato
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={toggleMobileMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMobileMenu}>
                Login 
              </Link>
            </li>
            <li>
              <Link to="/teste" onClick={toggleMobileMenu}>
                Teste
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} />
        </button>
      </div>
      {mobileMenu && (
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={toggleMobileMenu}>
              Contato 
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMobileMenu}>
              Menu 
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMobileMenu}>
              Login 
            </Link>
          </li>
          <li>
            <Link to="/teste" onClick={toggleMobileMenu}>
              Teste
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
