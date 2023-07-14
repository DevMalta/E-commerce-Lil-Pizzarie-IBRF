import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/AboutUs';
import Contato from './Components/Contato';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import CartIcon from './Components/CartIcon';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartIcon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
