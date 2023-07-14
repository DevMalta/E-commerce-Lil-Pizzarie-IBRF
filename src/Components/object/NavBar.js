import React, { useState } from 'react';
import './styles/NavBar.css'; // Importe o arquivo CSS para estilização

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About Us</a>
          <a href="/menu" className="navbar-item">Menu</a>
          <a href="/contact" className="navbar-item">Contact</a>
        </div>
      </div>
      <div className={`navbar-burger ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
