import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs';
import Contato from './pages/Contato';
import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';
import Menu from "./pages/Menu";
import Address from './pages/AddressForm'
import './App.css';

function App() {
  
  return (
    <Router>
      <div>
      <Header />
        <div style={{ marginTop: '160px' }}>
          <Routes>
            <Route path="/" exact element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/pagamento" element={<PaymentPage/>} />
          </Routes>
        </div>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
