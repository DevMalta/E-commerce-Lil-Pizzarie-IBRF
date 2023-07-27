import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menu.css';
import PizzaModal from '../object/Modal';

const ImageGrid = ({
  filteredImages,
  showSecondGrid,
  handleImageClick,
  handleQuantityDecrement,
  handleQuantityIncrement,
  quantidades,
  selectedPizza,
  handleCloseModal,
}) => {
  const renderImages = () => {
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
                  <div className="product-price">Preço: R$ {image.price}</div>
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
                  <div className="product-price">Preço: R$ {image.price}</div>
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

  return (
    <div className="menu-grid">
      {renderImages()}
      <PizzaModal
        show={!!selectedPizza}
        onHide={handleCloseModal}
        pizza={selectedPizza}
      />
    </div>
  );
};

export default ImageGrid;
