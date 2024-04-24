import React, { useState } from 'react';
import MediaList from './MediaList';

const App = () => {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'VHS', title: 'Back to the Future' },
    { id: 2, type: 'DVD', title: 'The Matrix' },
    { id: 3, type: 'CD', title: 'Thriller - Michael Jackson' },
  ]);

  const handleAddToCart = (item) => {
    console.log(`Added ${item.title} to cart`);
  };

  return (
    <div>
      <h1>Retro Media Store</h1>
      <MediaList mediaItems={mediaItems} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;