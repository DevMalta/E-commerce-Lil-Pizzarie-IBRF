import React, { useState } from "react";
import logo from './assets/logoFrioLis.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";
import Cart from "../../object/Cart";
import CartModal from "../../object/CartModal";
import imagens from "../../object/ImageImport";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const listaDeItens = imagens;

  const [quantidades, setQuantidades] = useState({});

  const listaDeItensComQuantidadeSelecionada = listaDeItens.filter((item) => quantidades[item.name]);

  const handleQuantityIncrement = (item) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [item.name]: (prevQuantidades[item.name] || 0) + 1,
    }));
  };

  const handleQuantityDecrement = (item) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [item.name]: Math.max(0, (prevQuantidades[item.name] || 0) - 1),
    }));
  };

  const handleFinalizarCompra = () => {
    console.log('Compra finalizada:', listaDeItens, quantidades);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className='search'>
        <div className='container_c_flex'>
          <div className="navbar-search">
            <Navbar />
          </div>
          <div className='logo_width '>
            <img src={logo} alt='' />
          </div>
          <div className='icon_f_flex_width'>
            <div className="usuario">
              <Link to='/login'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <div className="cart-icon">
              <Link to='/Address'>
               <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <CartModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {/* Passar as props necessárias para o componente Cart */}
        <Cart
          listaDeItens={listaDeItensComQuantidadeSelecionada}
          quantidades={quantidades}
          handleQuantityIncrement={handleQuantityIncrement}
          handleQuantityDecrement={handleQuantityDecrement}
          handleFinalizarCompra={handleFinalizarCompra}
        />
      </CartModal>
    </>
  );
}

export default Search;