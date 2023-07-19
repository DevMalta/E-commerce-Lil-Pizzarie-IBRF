import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/AboutUs';
import Contato from './Components/Contato';
import Menu from './Components/Menu';
import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"
import Login from './Components/Login';
// import Cart from "./Components/componentes_Menu/Cart";
import Teste from "./Components/Teste";
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
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/teste" element={<Teste />} />
        {/* <Route path="/cart" exact element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
