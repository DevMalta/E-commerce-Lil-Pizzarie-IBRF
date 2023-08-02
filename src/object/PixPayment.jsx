import React from 'react';
import '../styles/PixPayment.css'

const PixPayment = () => {
  const handlePixPayment = () => {
    // Lógica para o pagamento via Pix
    alert('Pagamento via Pix realizado com sucesso!');
  };

  const restaurantPixKey = 'lil_pizzarie@vamonessa.com';
  const restaurantNumber = '+88012 3456 7894';
  return (
    <div className="payment-details">
      <h3>Pagamento via Pix</h3>
      <div className="pix-box">
        <p>Chave PIX do restaurante:</p>
        <strong>{restaurantPixKey}</strong>
      </div>
      <div className="pix-box">
        <p>Envie o Comprovante para:</p>
        <strong>{restaurantNumber}</strong>
      </div>
      {/* <button onClick={handlePixPayment} className="payment-button">Pagar via Pix</button> */}
    </div>
  );
};

export default PixPayment;
