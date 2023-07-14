import React from 'react';
import './styles/Home.css'; // Importe o arquivo CSS para estilização
import pizza from '../assets/pizza_home.jpeg';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo à Lil Pizzarie</h1>
      <p className="home-description">Lil Pizzarie: o lugar onde cada fatia é uma obra de arte, e você é o artista que saboreia!</p>
      <img src={pizza} alt="Pizza" className="home-image" />
      <p className="home-text">Confira o nosso cardápio e faça seu pedido agora mesmo.</p>
    </div>
  );
}

export default Home;
