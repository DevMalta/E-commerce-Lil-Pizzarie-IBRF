import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes_Menu/style/Itens.css';
import StarRating from './object/StarRating';
import Itens from './itens';
import Cart from './componentes_Menu/Cart';


  function Menu() {

  return (
    <div className='page1'>
      <>
        <div className="menu-container">
          {/* Componente Itens */}
          <Itens />
        </div>
        <div>
        {/* Componente Cart */}
        <Cart />
        </div>
      </>
    </div>
  );
};

export default Menu;
