import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/AboutUs';
import Contato from './Components/Contato';
// import Menu from './Components/Menu';
import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"
import LoginPage from './Components/Login/LoginPage';
import UserPage from './Components/Login/UserPage';
import CartPage from './Components/componentes_Menu/CartPage';

import PaymentPage from './Components/pagamento/PaymentPage';


// import Cart from "./Components/componentes_Menu/Cart";
import Menu from "./Components/Teste";
import './App.css';

function App() {

  
  return (
    <Router>
      <div>
      <Header />
      <div style={{ marginTop: '215px' }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/teste" element={<Menu />} />
        <Route path="/pagamento" element={<PaymentPage/>} />
        {/* <Route path="/cart" exact element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} /> */}

      </Routes>
      </div>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
