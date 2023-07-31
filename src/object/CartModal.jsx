// Modal.js

import React from 'react';
import Modal from 'react-modal';
import '../styles/CartModal.css'; // Importando o arquivo de estilos

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // content: {
  //   top: '50%',
  //   left: '50%',
  //   right: 'auto',
  //   bottom: 'auto',
  //   transform: 'translate(-50%, -50%)',
  //   maxWidth: '500px',
  //   maxHeight: '80%',
  //   overflow: 'auto',
  // },
};

Modal.setAppElement('#root');

const CartModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Modal Title</h2>
            <button className="close-button" onClick={onRequestClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="close-button" onClick={onRequestClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
