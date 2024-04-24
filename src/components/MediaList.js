import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({ mediaItems, onAddToCart }) => {
  return (
    <div>
      <h2>Media Items</h2>
      {mediaItems.map((item) => (
        <MediaItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MediaList;