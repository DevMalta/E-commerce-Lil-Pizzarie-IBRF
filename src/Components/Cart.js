import React from 'react';

const Cart = ({ selectedItems }) => {
  return (
    <div className="cart">
      <h2>Itens selecionados:</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;