import React, { useContext, useState } from 'react';
import StorageContext from '../Context/StorageContext.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './Gallery.css';

const Gallery = () => {
  const { items } = useContext(StorageContext);

  if (items.length === 0) return <div className='none-content'>No content</div>;

  return (
    <div className='gallery'>
      {items.map(({ comment, id, url }) => (
        <GalleryItem key={id} id={id} comment={comment} url={url} />
      ))}
    </div>
  );
};

export default Gallery;
