import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({
  listaDeItens,
  quantidades,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleFinalizarCompra,
}) => {
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    listaDeItens.forEach((item) => {
      total += item.price * quantidades[item.name];
    });
    setValorTotal(total);
  }, [listaDeItens, quantidades]);

  const formatarValor = (valor) => {
    return parseFloat(valor).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h3 className="cart-title">Carrinho de Compras</h3>
      <ul className="cart-list">
        {listaDeItens.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-product-details">
                <div className="cart-product-name">{item.name}</div>
                <div className="cart-quantity-buttons">
                  <button
                    className="cart-quantity-button minus"
                    onClick={() => handleQuantityDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-quantity">{quantidades[item.name]}</span>
                  <button
                    className="cart-quantity-button plus"
                    onClick={() => handleQuantityIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-price">
                  $ {formatarValor(item.price * quantidades[item.name])}
                </div>
              </div>
            </div>
            <hr className="row_list"></hr>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total:</strong> $ {formatarValor(valorTotal)}
      </div>
      <button className="finalizar-compra-button" onClick={handleFinalizarCompra}>
        <Link to="/pagamento">
          Finalizar Compra
        </Link>
      </button>
    </div>
  );
};

export default Cart;
