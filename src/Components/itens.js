import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes_Menu/style/Itens.css';
import StarRating from './object/StarRating';

// ... Suas importações de imagens ...

const initialImages = [
  // ... Seus dados iniciais das imagens ...
];

const Itens = () => {
  const [showSecondGrid, setShowSecondGrid] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState(initialImages.map(image => ({ ...image, views: 0, quantity: 0 })));

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleImageClick = (index) => {
    const updatedImages = [...images];
    updatedImages[index].views += 1;
    setImages(updatedImages);
  };

  const handleQuantityIncrement = (index) => {
    const updatedImages = [...images];
    updatedImages[index].quantity += 1;
    setImages(updatedImages);
  };

  const handleQuantityDecrement = (index) => {
    const updatedImages = [...images];
    if (updatedImages[index].quantity > 0) {
      updatedImages[index].quantity -= 1;
      setImages(updatedImages);
    }
  };
  
  const handleRatingChange = (index, newRating) => {
    const updatedImages = [...images];
    updatedImages[index].rating = newRating;
    setImages(updatedImages);
  };
  
  const renderImages = () => {
    const filteredImages = images.filter((image) =>
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
                  <div className="product-rating">
                    <StarRating initialValue={images[index].rating} onChange={(newRating) => handleRatingChange(index, newRating)} />
                  </div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(index)}>-</button>
                    <span className="quantity">{image.quantity}</span>
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
                  <div className="product-rating">
                    <StarRating initialValue={images[index].rating} onChange={(newRating) => handleRatingChange(index, newRating)} />
                  </div>
                  <div className="product-buttons">
                    <button className="quantity-button minus" onClick={() => handleQuantityDecrement(index)}>-</button>
                    <span className="quantity">{image.quantity}</span>
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

  return (
    <div>
      {/* Seu código JSX vai aqui */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={handleToggleGrid}>
          {showSecondGrid ? 'Mostrar Primeira Grade' : 'Mostrar Segunda Grade'}
        </button>
      </div>
      {/* Call the renderImages function to display the images */}
      {renderImages()}
    </div>
  );
};

export default Itens;
