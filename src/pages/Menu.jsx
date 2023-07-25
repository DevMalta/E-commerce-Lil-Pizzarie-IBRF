import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menu.css';
import Cart from '../object/Cart';
import PizzaModal from '../object/Modal';

import f01 from '../img/flavor01.jpeg';
import f02 from '../img/flavor02.jpeg';
import f03 from '../img/flavor03.jpeg';
import f04 from '../img/flavor04.jpeg';
import f05 from '../img/flavor05.jpeg';
import f06 from '../img/flavor06.jpeg';
import f07 from '../img/flavor07.jpeg';
import f08 from '../img/flavor08.jpeg';
import f09 from '../img/flavor09.jpeg';

const initialImages = [
  { src: f01, name: 'Marguerita', price: 9.99, description: 'Delicious pizza topped with tomato, mozzarella, and basil.' },
  { src: f02, name: 'Exotic', price: 11.99, description: 'An exotic blend of flavors including pineapple, ham, and barbecue sauce.' },
  { src: f03, name: 'Mussarela', price: 8.99, description: 'Classic pizza with melted mozzarella cheese and tomato sauce.' },
  { src: f04, name: 'House special', price: 12.99, description: 'Our special pizza with a combination of various toppings.' },
  { src: f05, name: 'Mexican pepper', price: 10.99, description: 'Spicy pizza with jalapenos, bell peppers, and seasoned ground beef.' },
  { src: f06, name: 'Tomato with Olive', price: 9.99, description: 'Fresh tomato slices and black olives make this pizza a delight.' },
  { src: f07, name: 'M&M', price: 8.99, description: 'A unique pizza with a sweet twist - M&M candies as toppings.' },
  { src: f08, name: 'Tarantela', price: 11.99, description: 'A flavorful pizza with Italian sausage, mushrooms, and onions.' },
  { src: f09, name: 'Broccoli', price: 10.99, description: 'Healthy and delicious pizza topped with broccoli and cheese.' },
];

const Menu = () => {
  const [searchValue, setSearchValue] = useState(''); // Estado para armazenar o valor de pesquisa
  const [showSecondGrid, setShowSecondGrid] = useState(false);
  const [quantidades, setQuantidades] = useState({}); // Definindo o estado das quantidades
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleImageClick = (index) => {
    const filteredImages = initialImages.filter((image) =>
      image.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const selectedImageIndex = showSecondGrid ? index + 6 : index;
    const selectedImage = filteredImages[selectedImageIndex];
    const updatedQuantidades = { ...quantidades };
    updatedQuantidades[selectedImage.name] = (updatedQuantidades[selectedImage.name] || 0) + 1;
    setQuantidades(updatedQuantidades);
    setSelectedPizza(selectedImage);
  };

  const handleQuantityIncrement = (index) => {
    const filteredImages = initialImages.filter((image) =>
      image.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const selectedImageIndex = showSecondGrid ? index + 6 : index;
    const selectedImage = filteredImages[selectedImageIndex];
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [selectedImage.name]: (prevQuantidades[selectedImage.name] || 0) + 1,
    }));
  };

  const handleQuantityDecrement = (index) => {
    const filteredImages = initialImages.filter((image) =>
      image.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const selectedImageIndex = showSecondGrid ? index + 6 : index;
    const selectedImage = filteredImages[selectedImageIndex];
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [selectedImage.name]: Math.max(0, (prevQuantidades[selectedImage.name] || 0) - 1),
    }));
  };

  useEffect(() => {
    // Definir as quantidades iniciais de acordo com o estado initialImages
    const initialQuantidades = {};
    initialImages.forEach((image) => {
      initialQuantidades[image.name] = 0;
    });
    setQuantidades(initialQuantidades);
  }, []);

  const handleRatingChange = (index, newRating) => {
    const updatedImages = [...initialImages];
    updatedImages[index].rating = newRating;
    // eslint-disable-next-line no-undef
    setImages(updatedImages);
  };

  const renderImages = () => {
    const filteredImages = initialImages.filter((image) =>
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
                  onClick={() => handleImageClick(index + 6)}
                />
                <div className="product-info">
                  <div className="product-name">{image.name}</div>
                  <div className="product-price">{image.price}</div>
                  <div className="product-description">{image.description}</div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(index)}>-</button>
                    <span className="quantity">{quantidades[image.name]}</span>
                    <button className="quantity-button plus" onClick={() => handleQuantityIncrement(index)}>+</button>
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
                  onClick={() => handleImageClick(index)}
                />
                <div className="product-info">
                  <div className="product-name">{image.name}</div>
                  <div className="product-price">{image.price}</div>
                  <div className="product-description">{image.description}</div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(index)}>-</button>
                    <span className="quantity">{quantidades[image.name]}</span>
                    <button className="quantity-button plus" onClick={() => handleQuantityIncrement(index)}>+</button>
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
    // Quando o usuário fechar o modal, definimos a pizza selecionada como nula
    setSelectedPizza(null);
  };

  return (
    <div className='page1'>
      <>
      <div className='flavor'>
        <div className="menu-container">
            {/* <h2 className="menu-title">Escolha sua Lil Pizza</h2> */}
            {/* Adicione o campo de entrada (input) para pesquisa */}
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
      <div className='transparent'>ooooooooooooooooooooooooo</div>
      </div>
        <Cart listaDeItens={initialImages} quantidades={quantidades} handleQuantityIncrement={handleQuantityIncrement} handleQuantityDecrement={handleQuantityDecrement} />
        </>
    </div>
  );
};

export default Menu;
