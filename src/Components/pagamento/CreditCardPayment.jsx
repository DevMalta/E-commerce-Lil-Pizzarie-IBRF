import React, { useState } from 'react';

const CreditCardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCreditCardPayment = () => {
    // Lógica para o pagamento via Cartão de Crédito
    // Neste exemplo, exibiremos apenas uma mensagem com os dados do cartão preenchidos.
    const cardData = {
      cardNumber,
      cardHolder,
      expiryDate,
      cvv,
    };
    alert(`Pagamento via Cartão de Crédito realizado com sucesso!\n\nDados do Cartão:\n${JSON.stringify(cardData, null, 2)}`);
  };

  return (
    <div className="payment-details">
      <h3>Pagamento via Cartão de Crédito</h3>
      <div>
        <label>Número do Cartão:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="**** **** **** ****" />

        <label>Nome no Cartão:</label>
        <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />

        <div>
          <label>Data de Expiração:</label>
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/AA" />
        </div>

        <div>
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="***" />
        </div>
      </div>
      
      <button onClick={handleCreditCardPayment} className="payment-button">Pagar com Cartão de Crédito</button>
    </div>
  );
};

export default CreditCardPayment;
