import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './object/NavBar';
import Logo from '../assets/logo.png';
import { Button } from 'react-bootstrap'; // Importe o componente Button do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css'; // Importe o arquivo CSS para estilização

const Header = () => {
  return (
    <header>
      <Navbar />
      <img src={Logo} alt="Logo" />
        <div className='login_btn'>
          <Button variant="secondary">
            <Link to="/login">Login</Link>
          </Button>
        </div>
    </header>
  );
};

export default Header;
