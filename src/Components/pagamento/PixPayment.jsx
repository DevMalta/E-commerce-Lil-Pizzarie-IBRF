import React from 'react';
import './styles/PixPayment.css'

const PixPayment = () => {
  const handlePixPayment = () => {
    // Lógica para o pagamento via Pix
    alert('Pagamento via Pix realizado com sucesso!');
  };

  const restaurantPixKey = 'lil_pizzarie@vamonessa.com';

  return (
    <div className="payment-details">
      <h3>Pagamento via Pix</h3>
      <div className="pix-box">
        <p>Chave PIX do restaurante:</p>
        <strong>{restaurantPixKey}</strong>
      </div>
      <button onClick={handlePixPayment} className="payment-button">Pagar via Pix</button>
    </div>
  );
};

export default PixPayment;
