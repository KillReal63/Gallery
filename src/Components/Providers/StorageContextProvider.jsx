import React, { useEffect, useState } from 'react'

import Context from '../Context/StorageContext.jsx'

const StorageContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const arrayItems = []
  const dataArray = localStorage.getItem('store')
  const dataArrayPush = JSON.parse(dataArray)

  const addItem = (id, url, comment) => {
    if (dataArray) {
      const data = [...dataArrayPush, { id, url, comment }]
      localStorage.setItem('store', JSON.stringify(data))
      setItems(data)
    } else {
      arrayItems.push({ id, url, comment })
      localStorage.setItem('store', JSON.stringify(arrayItems))
      setItems(arrayItems)
    }
  }

  const updateComment = (id, comment) => {
    const array = items.map((item) => {
      if (item.id === id) {
        item.comment = comment
        return item
      }
      return item
    })

    localStorage.setItem('store', JSON.stringify(array))
    setItems(array)
  }

  const keydownHelper = ({ key }) => {
    switch (key) {
      case 'Escape':
        setIsEdit(false)
        setOpenModal(false)
        break
      default:
    }
  }

  useEffect(() => {
    if (dataArray) {
      setItems(dataArrayPush)
    }
    document.addEventListener('keydown', keydownHelper)
    return () => document.removeEventListener('keydown', keydownHelper)
  }, [])

  const value = {
    addItem,
    updateComment,
    dataArray,
    items,
    isEdit,
    setIsEdit,
    openModal,
    setOpenModal,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default StorageContextProvider
