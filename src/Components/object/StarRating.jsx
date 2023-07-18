import React, { useState } from 'react';
import './styles.css'; // Importe o arquivo de estilos

const StarRating = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue || 0);
  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };

  return (
    <div className="star-container">
      {stars.map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  return (
    <span
      className={`star ${filled ? 'filled' : ''}`}
      onClick={onClick}
    >
      &#9733;
    </span>
  );
};

export default StarRating;
