import React, { useState } from 'react';
import Pesquisa from './componentes_Menu/pesquisa';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Teste.css';
import StarRating from './object/StarRating';
import f01 from '../img/flavor01.jpeg';
import f02 from '../img/flavor02.jpeg';
import f03 from '../img/flavor03.jpeg';
import f04 from '../img/flavor04.jpeg';
import f05 from '../img/flavor05.jpeg';
import f06 from '../img/flavor06.jpeg';
import f07 from '../img/flavor07.jpeg';
import f08 from '../img/flavor08.jpeg';
import f09 from '../img/flavor09.jpeg';

// Resto do código do componente Menu

const Menu = () => {
  
  const [showSecondGrid, setShowSecondGrid] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([
    { src: f01, 
        name: 'Marguerita', 
        price: '$ 9.99', 
        description: 'Delicious pizza topped with tomato, mozzarella, and basil.',
        views: 0, quantity: 0 
      },
      { src: f02, 
        name: 'Exotic', 
        price: '$ 11.99', 
        description: 'An exotic blend of flavors including pineapple, ham, and barbecue sauce.',
        views: 0, quantity: 0 
      },
      { src: f03, 
        name: 'Mussarela', 
        price: '$ 8.99', 
        description: 'Classic pizza with melted mozzarella cheese and tomato sauce.',
        views: 0, quantity: 0 
      },
      { src: f04, 
        name: 'House special', 
        price: '$ 12.99', 
        description: 'Our special pizza with a combination of various toppings.',
        views: 0, quantity: 0 
      },
      { src: f05, 
        name: 'Mexican pepper', 
        price: '$ 10.99', 
        description: 'Spicy pizza with jalapenos, bell peppers, and seasoned ground beef.',
        views: 0, quantity: 0 
      },
      { src: f06, 
        name: 'Tomato with Olive', 
        price: '$ 9.99', 
        description: 'Fresh tomato slices and black olives make this pizza a delight.',
        views: 0, quantity: 0 
      },
      { src: f07, 
        name: 'M&M', 
        price: '$ 8.99', 
        description: 'A unique pizza with a sweet twist - M&M candies as toppings.',
        views: 0, quantity: 0 
      },
      { src: f08, 
        name: 'Tarantela', 
        price: '$ 11.99', 
        description: 'A flavorful pizza with Italian sausage, mushrooms, and onions.',
        views: 0, quantity: 0 
      },
      { src: f09, 
        name: 'Broccoli', 
        price: '$ 10.99', 
        description: 'Healthy and delicious pizza topped with broccoli and cheese.',
        views: 0, quantity: 0 
      }, 
    ]);
      // Restante dos dados das imagens


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
                  alt={`Image ${index + 7}`}
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
                  alt={`Image ${index + 1}`}
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
    <div className="menu-container">
      <h2 className="menu-title">Escolha sua Lil Pizza</h2>
      <Pesquisa handleChange={handleSearchChange} />
      <div className="menu-grid">
        {renderImages()}
      </div>
      <button className="toggle-button" onClick={handleToggleGrid}>
        {showSecondGrid ? 'Menos sabores' : 'Mais sabores'}
      </button>
    </div>
  );
};

export default Menu;
