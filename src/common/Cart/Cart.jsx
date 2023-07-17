import React from "react"
import "./style.css"


const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Seu carrinho de compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="item-info">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-quantity">Quantidade: {item.quantity}</p>
                  <p className="item-price">Preço: R$ {item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
