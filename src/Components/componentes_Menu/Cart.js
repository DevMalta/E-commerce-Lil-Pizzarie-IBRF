import React, { useState } from "react";
import "./style/Cart.css";

const Cart_list = () => {
  const listaDeItens = ["exotic", "Mussarela", "Marguerita"];

  const [quantidades, setQuantidades] = useState(
    listaDeItens.map(() => 0)
  );

  const handleQuantityChange = (index, amount) => {
    const newQuantidades = [...quantidades];
    newQuantidades[index] += amount;
    if (newQuantidades[index] < 0) newQuantidades[index] = 0;
    setQuantidades(newQuantidades);
  };

  const finalizarCompra = () => {
    console.log("abrir tela de pagamento");
  }

  return (
    <div className='buy_list fixed_cart'>
      <div className="title_buy_list">
        <h1>Minhas Lil Pizzas</h1>
      </div>
      <div className='list_buy_list'>
        <ul>
          {/* Usando o map para percorrer a lista de itens e gerar os elementos de lista */}
          {listaDeItens.map((item, index) => (
            <li key={index}>
              {item}
              <div className="quantity_container">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{quantidades[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <div className="item_value">
                Valor: {quantidades[index] * 10} {/* Aqui você pode substituir '10' pelo valor unitário de cada item */}
              </div>
            </li>
          ))}
        </ul>
        <button onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart_list;
