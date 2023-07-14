import React from 'react';
import './styles/AboutUs.css'; // Importe o arquivo CSS para estilização
import forno from '../assets/forno.jpeg';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img className="forno-image" src={forno} alt="Forno a Lenha" />
      <div className="about-us-content-container">
        <h1 className="about-us-title">Sobre Nós</h1>
        <p className="about-us-description">Bem-vindo à nossa pizzaria! Somos apaixonados por entregar as melhores pizzas da cidade direto na sua porta. Nossa equipe de chefs habilidosos prepara cada pizza com amor e os melhores ingredientes. Oferecemos uma ampla variedade de sabores e opções de massa para satisfazer seu paladar. Se você prefere uma clássica Margherita ou uma recheada pizza de camarão, temos algo para todos os gostos.</p>
        <p className="about-us-description">Em nossa loja online, priorizamos a satisfação do cliente e nos esforçamos para proporcionar uma experiência de compra sem complicações. Desde fazer o pedido até rastrear a entrega, garantimos que você esteja informado a cada etapa do processo. Sua felicidade é nossa maior prioridade!</p>
        <p className="about-us-description">Explore nosso cardápio, faça seu pedido e prepare-se para uma deliciosa experiência com pizzas. Mal podemos esperar para servi-lo!</p>
      </div>
    </div>
  );
};

export default AboutUs;

