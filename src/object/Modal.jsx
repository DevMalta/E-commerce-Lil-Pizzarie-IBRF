/* eslint-disable no-undef */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import StarRating from './StarRating';

const PizzaModal = ({ show, onHide, pizza }) => {
  // Verificar se a pizza está definida antes de acessar suas propriedades
  if (!pizza) return null;

  const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '80%',
    height: 'auto',
  };

  // Defina a função handleRatingChange para lidar com as alterações na classificação por estrelas
  const handleRatingChange = (newRating) => {
    // Faça algo com o valor newRating (por exemplo, atualize a classificação da pizza)
    console.log('Nova classificação:', newRating);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={modalStyle}> {/* Aplicar o estilo diretamente na div */}
          <img
            src={pizza.src}
            alt={pizza.name}
            style={imageStyle} 
          />
          <p>{pizza.description}</p>
          <p>Preço: {pizza.price}</p>
          <p>Informações nutricionais: {pizza.description}</p>

          {/* Aqui estão os componentes StarRating */}
          <div className="product-rating">
            <StarRating initialValue={pizza.rating} onChange={(newRating) => handleRatingChange(newRating)} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaModal;
