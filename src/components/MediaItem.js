import React from 'react';

const MediaItem = ({ item, onAddToCart }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>Type: {item.type}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MediaItem;