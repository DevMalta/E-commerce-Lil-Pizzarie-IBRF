import React, { useState } from 'react';
import PixPayment from './PixPayment';
import CreditCardPayment from './CreditCardPayment';
import './styles/PaymentPage.css'; // Importe o arquivo CSS para estilização

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Função para renderizar o conteúdo do componente selecionado
  const renderSelectedPayment = () => {
    if (selectedPayment === 'pix') {
      return <PixPayment />;
    } else if (selectedPayment === 'creditCard') {
      return <CreditCardPayment />;
    }
    return null;
  };

  return (
    
    <div className="payment-page">
        <div className='payments-container-left'>
            <div className='payments-title'>
                <h2>Métodos de Pagamento</h2>
            </div>
            <div className='payment-option-box'>
                <label className="payment-option">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={selectedPayment === 'pix'}
                    onChange={() => setSelectedPayment('pix')}
                    />
                    Pix
                </label>
                <label className="payment-option">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={selectedPayment === 'creditCard'}
                    onChange={() => setSelectedPayment('creditCard')}
                    />
                    Cartão de Crédito
                </label>
            </div>
        </div>
        <div className="selected-payment-content">
            {renderSelectedPayment()}
        </div>
    
    </div>
  );
};

export default PaymentPage;
