import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import StarRating from './StarRating';

const PizzaModal = ({ show, onHide, pizza }) => {
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

  const handleRatingChange = (newRating) => {
    console.log('Nova classificação:', newRating);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={modalStyle}>
          <img
            src={pizza.src}
            alt={pizza.name}
            style={imageStyle} 
          />
          <p>{pizza.description}</p>
          <p>Preço: {pizza.price}</p>
          <p className='infoNutricional'>Informações nutricionais: {pizza.description}</p>

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