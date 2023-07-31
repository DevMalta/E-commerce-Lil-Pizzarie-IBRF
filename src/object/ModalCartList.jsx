// Modal.jsx
import React from 'react';
import '../styles/Modal.css';
import Cart from './Cart';

const ModalCartList = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        <Cart />
      </div>
    </div>
  );
};

export default ModalCartList;
