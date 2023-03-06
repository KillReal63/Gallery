import React, { useContext } from 'react';
import Form from '../Form/Form.jsx';
import StorageContext from '../Context/StorageContext.jsx';
import { v4 as uuidv4 } from 'uuid';
import './Header.css';

const Header = () => {
  const { addItem } = useContext(StorageContext);

  const addRandomImage = () => {
    fetch('https://random.imagecdn.app/600/600').then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      addItem(uuidv4(), response.url, '');
    });
  };

  return (
    <div className='header'>
      <span className='logo'>gallery</span>
      <div className='header-forms'>
        <span>add your moment</span>
        <Form />
        <button
          type='submit'
          className='random-button'
          onClick={addRandomImage}
        >
          Add Random
        </button>
      </div>
    </div>
  );
};

export default Header;
