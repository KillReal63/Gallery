import React, { useContext, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import StorageContext from '../Context/StorageContext.jsx'
import Modal from '../Modal/Modal.jsx'
import './GalleryItem.css'

const GalleryItem = ({ id, url, comment = '' }) => {
  const [value, setValue] = useState(comment)
  const { updateComment, isEdit, setIsEdit, openModal, setOpenModal } =
    useContext(StorageContext)

  return (
    <div
      className="item"
      onMouseEnter={() => (comment.length === 0 ? setIsEdit(true) : undefined)}
      onMouseLeave={() => (comment.length === 0 ? setIsEdit(false) : undefined)}
    >
      <div className="img-container">
        <img src={url} className="img" onClick={() => setOpenModal(true)} />
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
        ) : comment.length !== 0 ? (
          <>
            <div className="comment">{comment}</div>
            <button className="edit-button" onClick={() => setIsEdit(true)} />
          </>
        ) : undefined}
      </div>
    </div>
  )
}

export default GalleryItem
