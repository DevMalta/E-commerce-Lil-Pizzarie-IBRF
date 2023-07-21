// PaymentPage.js
import React, { useState } from 'react';
import './style/PaymentPage.css'; // Importe o arquivo CSS para aplicar os estilos.

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para processar o pagamento, mas isso exigiria integração com um serviço de pagamento real.
    console.log('Pagamento processado com sucesso!');
  };

  return (
    <div className="payment-container">
      <h1>Página de Pagamento</h1>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label>Número do cartão:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            className="form-control"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="form-group">
          <label>Nome no cartão:</label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="form-control"
            placeholder="Seu Nome Completo"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Data de validade:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              maxLength="5"
              className="form-control"
              placeholder="MM/AA"
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              className="form-control"
              placeholder="123"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">
          Pagar
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
