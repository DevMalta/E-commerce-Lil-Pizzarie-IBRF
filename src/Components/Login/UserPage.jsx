import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Bem-vindo à página do usuário!</h2>
      {/* Conteúdo da página do usuário */}
    </div>
  );
};

export default UserPage;
// import React, { useState } from 'react';
// import Modal from './Modal';

// const UserPage = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Abrir Modal</button>
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <h2>Título do Modal</h2>
//         <p>Conteúdo do Modal...</p>
//       </Modal>
//     </div>
//   );
// };

// export default UserPage;
