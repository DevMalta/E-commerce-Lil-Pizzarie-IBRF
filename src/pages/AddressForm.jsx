import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddressForm.css'; // Importando o arquivo de estilos CSS
import { Link } from 'react-router-dom';

const AddressForm = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);

  const buscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        const enderecoEncontrado = `${data.logradouro} - ${data.bairro} - ${data.localidade}/${data.uf}`;
        setEndereco(enderecoEncontrado);
        setShowSaveButton(true); // Mostra o botão "Salvar Endereço" quando o endereço é encontrado
      } else {
        setEndereco('CEP não encontrado.');
        setShowSaveButton(false); // Esconde o botão "Salvar Endereço" quando o CEP não é encontrado
      }
    } catch (error) {
      setEndereco('Ocorreu um erro ao buscar o endereço.');
      setShowSaveButton(false); // Esconde o botão "Salvar Endereço" em caso de erro
    }
  };

  const handleSaveEndereco = () => {
    // Verifica se todos os campos estão preenchidos antes de salvar o endereço
    if (numero.trim() === '' || complemento.trim() === '') {
      alert('Por favor, preencha o número e o complemento antes de salvar.');
    } else {
      // Aqui você pode adicionar a lógica para salvar o endereço
      // por exemplo, enviar os dados do endereço para o backend ou executar outras ações
      console.log('Endereço salvo:', {
        endereco,
        numero,
        complemento,
      });
    }
  };

  return (
    <div className="address-form">
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        name="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscarEndereco}>Buscar Endereço</button>

      <div className="address-result">
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={endereco}
          readOnly
        />
        {showSaveButton && (
          <div>
            <label htmlFor="numero">Número:</label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />

            <label htmlFor="complemento">Complemento:</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            
            <button onClick={handleSaveEndereco}>
                <Link to="/pagamento">
                    Salvar e continuar
                </Link>
                </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
