import React, { useState } from 'react';
import '../styles/Contato.css'; // Importe o arquivo CSS para estilização

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Criar um objeto com as informações do formulário
    const formData = {
      nome,
      email,
      mensagem,
    };

    // Chamar uma função para salvar as informações (pode ser uma chamada para uma API, por exemplo)
    salvarInformacoes(formData);

    // Resetar os campos após o envio
    setNome('');
    setEmail('');
    setMensagem('');
  };

  const salvarInformacoes = (formData) => {
    // Aqui você pode adicionar a lógica para salvar as informações do formulário
    // Exemplo: fazer uma chamada para uma API ou escrever em um arquivo
    console.log('Salvando informações:', formData);
  };

  return (
    <div className="contato-container">
      <h2>Entre em Contato Conosco !</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            required
          ></textarea>
        </div>
        <button className='button-send' type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
