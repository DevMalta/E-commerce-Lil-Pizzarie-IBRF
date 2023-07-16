import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './object/NavBar';
import Logo from '../assets/logo.png';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css';
import Cart from './CartIcon';

const Header = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <header>
      <Navbar />
      <img src={Logo} alt="Logo" />
      <div className='login_btn'>
        <Button variant="secondary">
          <Link to="/login">Login</Link>
        </Button>
      </div>
      <div className='cart-icon'>
        <Button variant="secondary">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="cart-item-count">{cartItems.length}</span>
            )}
          </Link>
        </Button>
      </div>
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </header>
  );
};

export default Header;
