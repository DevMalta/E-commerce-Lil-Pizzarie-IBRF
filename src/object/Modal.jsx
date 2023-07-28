import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import '../styles/Modal.css';

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
    marginRight: '20px',
  };

  const handleRatingChange = (newRating) => {
    console.log('Nova classificação:', newRating);
  };

  return (
    <Modal show={show} onHide={onHide} className='custom-modal'>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='custom-modal-body'>
        <div style={modalStyle} className='modal_body'>
        <p>Informações nutricionais {pizza.info}</p>
        <div className='image-info-container'>
            <div>
            <img
              src={pizza.src}
              alt={pizza.name}
              style={imageStyle}
              className="pizza-image"
            />
            <p>R$ {pizza.price}</p>
            <div className="product-rating">
              <StarRating initialValue={pizza.rating} onChange={(newRating) => handleRatingChange(newRating)} />
            </div>
            </div>
            <div className="info-container">
              <table className='infoNutricional'>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
                <tr>
                  <td>
                    {pizza.at}<br />
                    {pizza.bt}<br />
                    {pizza.ct}<br />
                    {pizza.dt}<br />
                    {pizza.et}<br />
                    {pizza.ft}<br />
                    {pizza.gt}<br />
                    {pizza.ht}<br />
                    {pizza.it}<br />
                  </td>
                  <td>
                    {pizza.av}<br />
                    {pizza.bv}<br />
                    {pizza.cv}<br />
                    {pizza.dv}<br />
                    {pizza.ev}<br />
                    {pizza.fv}<br />
                    {pizza.gv}<br />
                    {pizza.hv}<br />
                    {pizza.iv}<br />
                  </td>
                </tr>
              </table>
            </div>
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
