import React, { useEffect } from 'react';
import './Modal.css';
import 'animate.css';

const Modal = ({ url, onClose }) => {
  const keydownHelper = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHelper);
    return () => document.removeEventListener('keydown', keydownHelper);
  }, []);

  return (
    <div className='modal'>
      <div className='modal-close' onClick={onClose} />
      <img className='modal-img' src={url} />
    </div>
  );
};

export default Modal;
