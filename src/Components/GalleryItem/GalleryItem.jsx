import React, { useContext, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import StorageContext from '../Context/StorageContext.jsx'
import Modal from '../Modal/Modal.jsx'
import './GalleryItem.css'

const GalleryItem = ({ id, url, comment = '' }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState(comment)
  const { updateComment } = useContext(StorageContext)

  return (
    <div className="item">
      <div className="img-container">
        <img alt="Invalid URL" src={url} className="img" onClick={() => setOpenModal(true)} />
        {openModal &&
          createPortal(
            <Modal id={id} url={url} onClose={() => setOpenModal(false)} />,
            document.body
          )}
      </div>
      <div className="comment-container">
        {isEdit ? (
          <>
            <input
              type="text"
              value={value}
              className="edit-comment"
              onChange={(e) => setValue(e.target.value)}
              maxLength={12}
            />
            <button
              className="add-edit-button"
              onClick={() => {
                updateComment(id, value)
                setIsEdit(false)
              }}
            />
          </>
        ) : (
          <>
            <div className="comment">{comment}</div>
            <button className="edit-button" onClick={() => setIsEdit(true)} />
          </>
        )}
      </div>
    </div>
  )
}

export default GalleryItem
