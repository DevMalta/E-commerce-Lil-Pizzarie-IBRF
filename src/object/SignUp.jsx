import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importar o hook useNavigate
import "../styles/SignUp.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate(); // 1. Obter a função navigate usando o hook useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Aqui você pode adicionar a lógica para cadastrar o usuário com o email e senha fornecidos
    // Por exemplo, chamar uma função para fazer uma requisição ao servidor para criar o novo usuário

    // Redirecionar para a página de usuário após o cadastro bem-sucedido
      // navigate('/user');
      alert ('Cadastro efetuado com sucesso')
  };

  return (
    <div className="signup-container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme a senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Cadastre-se</button>
      </form>
    </div>
  );
};

export default Signup;
