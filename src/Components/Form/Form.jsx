import React, { useContext, useState } from 'react'
import StorageContext from '../Context/StorageContext.jsx'
import { v4 as uuidv4 } from 'uuid'
import './Form.css'

const Form = ({}) => {
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')
  const { addItem } = useContext(StorageContext)

  const onSubmit = () => {
    addItem(uuidv4(), url, comment)
    setUrl('')
    setComment('')
  }

  return (
    <form className="form">
      <input
        type="text"
        value={url}
        className="input"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Вставьте ссылку на картинку"
      />
      <input
        maxLength={10}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="input"
        placeholder="Напишите комментарий"
      />
      <button
        type="submit"
        disabled={url.length === 0}
        className="add-button"
        onClick={onSubmit}
      >
        Add
      </button>
    </form>
  )
}

export default Form
