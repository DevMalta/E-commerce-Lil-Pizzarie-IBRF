import React from 'react';
import './styles/CheckOut.css'; // Arquivo de estilo opcional

const CheckoutBox = ({ total }) => {
  return (
    <div className="box-value-pay">
      <div className="total-campo">Total a pagar:</div>
      <div className="value-campo">{`R$ ${total.toFixed(2)}`}</div>
    </div>
  );
};

export default CheckoutBox;
