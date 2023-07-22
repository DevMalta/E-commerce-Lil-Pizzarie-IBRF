import React, { useState, useEffect } from 'react';
import './style/Cart.css';

const Cart = ({
  listaDeItens,
  quantidades,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleFinalizarCompra,
}) => {
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    // Calcula o valor total toda vez que a lista de itens ou quantidades for alterada
    let total = 0;
    listaDeItens.forEach((item) => {
      total += item.price * quantidades[item.name];
    });
    setValorTotal(total);
  }, [listaDeItens, quantidades]);

// Função para formatar o valor para ter no máximo duas casas decimais
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
                    onClick={() => handleQuantityDecrement(index)}
                  >
                    -
                  </button>
                  <span className="cart-quantity">{quantidades[item.name]}</span>
                  <button
                    className="cart-quantity-button plus"
                    onClick={() => handleQuantityIncrement(index)}
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
        Finalizar Compra
      </button>
    </div>
  );
};

export default Cart;
