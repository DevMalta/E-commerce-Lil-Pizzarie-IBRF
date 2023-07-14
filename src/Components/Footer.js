import React from 'react';
import './styles/Footer.css'; // Importe o arquivo CSS para estilização


function Footer() {
  return (
    <footer>
      <div className="container">
        <h2>Informações de Contato</h2>
        <p>
          Email: exemplo@example.com<br />
          Telefone: (11) 1234-5678<br />
          Endereço: Rua Exemplo, 123 - Cidade, Estado
        </p>
      </div>
    </footer>
  );
}

export default Footer;
