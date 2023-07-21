import React from 'react';
import './style/Cart.css';

const Cart = ({
  listaDeItens,
  quantidades,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleFinalizarCompra,
}) => {
  const pizzasComQuantidade = listaDeItens.filter((item) => quantidades[item.name] > 0);

  return (
    <div className="cart-container">
      <h3 className="cart-title">Carrinho de Compras</h3>
      <ul className="cart-list">
        {pizzasComQuantidade.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-product-details">
                <div className="cart-product-name">{item.name}</div>
              </div>
            </div>
            <div className="cart-quantity-buttons">
              <button className="cart-quantity-button minus" onClick={() => handleQuantityDecrement(index)}>
                -
              </button>
              <span className="cart-quantity">{quantidades[item.name]}</span>
              <button className="cart-quantity-button plus" onClick={() => handleQuantityIncrement(index)}>
                +
              </button>
              <div className="cart-product-price">{item.price * quantidades[item.name]}</div>
            </div>
          </li>
        ))}
      </ul>
      <button className="finalizar-compra-button" onClick={handleFinalizarCompra}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Cart;
