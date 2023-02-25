import React from 'react'
import './Modal.css'

const Modal = ({ url, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose} />
      <img className="modal-img" src={url} />
    </div>
  )
}

export default Modal
