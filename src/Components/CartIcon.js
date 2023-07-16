import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
