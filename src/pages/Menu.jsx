import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menu.css';
import Cart from '../object/Cart';
import PizzaModal from '../object/Modal';
import imagens from '../object/ImageImport';

const Menu = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showSecondGrid, setShowSecondGrid] = useState(false);
  const [quantidades, setQuantidades] = useState({});
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleImageClick = (image) => {
    const updatedQuantidades = { ...quantidades };
    updatedQuantidades[image.name] = (updatedQuantidades[image.name] || 0);
    setQuantidades(updatedQuantidades);
    setSelectedPizza(image);
  };

  const handleQuantityIncrement = (image) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [image.name]: (prevQuantidades[image.name] || 0) + 1,
    }));
  };

  const handleQuantityDecrement = (image) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [image.name]: Math.max(0, (prevQuantidades[image.name] || 0) - 1),
    }));
  };

  useEffect(() => {
    const initialQuantidades = {};
    imagens.forEach((image) => {
      initialQuantidades[image.name] = 0;
    });
    setQuantidades(initialQuantidades);
  }, []);

  const renderImages = () => {
    const filteredImages = imagens.filter((image) =>
      image.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const grid = [];

    if (showSecondGrid) {
      const rowImages = filteredImages.slice(6, 9);

      const row = (
        <Row key={1}>
          {rowImages.map((image, index) => (
            <Col key={index} md={4}>
              <div className="product-box">
                <img
                  src={image.src}
                  alt={`product ${index + 1}`}
                  className="product-image"
                  onClick={() => handleImageClick(image)}
                />
                <div className="product-info">
                  <div className="product-name">{image.name}</div>
                  <div className="product-price">{image.price}</div>
                  <div className="product-description">{image.description}</div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(image)}>-</button>
                    <span className="quantity">{quantidades[image.name]}</span>
                    <button className="quantity-button plus" onClick={() => handleQuantityIncrement(image)}>+</button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      );

      grid.push(row);
    } else {
      const rowImages = filteredImages.slice(0, 6);
      const row = (
        <Row key={0}>
          {rowImages.map((image, index) => (
            <Col key={index} md={4}>
              <div className="product-box">
                <img
                  src={image.src}
                  alt={`Product ${index + 1}`}
                  className="product-image"
                  onClick={() => handleImageClick(image)}
                />
                <div className="product-info">
                  <div className="product-name">{image.name}</div>
                  <div className="product-price">R$ {image.price}</div>
                  <div className="product-description">{image.size}</div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(image)}>-</button>
                    <span className="quantity">{quantidades[image.name]}</span>
                    <button className="quantity-button plus" onClick={() => handleQuantityIncrement(image)}>+</button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      );

      grid.push(row);
    }

    return grid;
  };

  const handleToggleGrid = () => {
    setShowSecondGrid(!showSecondGrid);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
  };

  return (
    <div className='page1'>
      <div className='flavor'>
        <div className="menu-container">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Pesquisar pizza..."
            className="fixed-search-bar"
          />
          <div className="menu-grid">
            {renderImages()}
            <PizzaModal
              show={!!selectedPizza}
              onHide={handleCloseModal}
              pizza={selectedPizza}
            />
          </div>
          <button className="toggle-button" onClick={handleToggleGrid}>
            {showSecondGrid ? 'Outros sabores' : 'Outros sabores'}
          </button>
        </div>
        <div className='transparent'>oooooooooooooooooooooooooooooo</div>
      </div>
      <Cart
        listaDeItens={imagens}
        quantidades={quantidades}
        handleQuantityIncrement={handleQuantityIncrement}
        handleQuantityDecrement={handleQuantityDecrement}
      />
    </div>
  );
};

export default Menu;