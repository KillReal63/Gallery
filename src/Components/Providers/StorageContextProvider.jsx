import React, { useEffect, useState } from 'react'

import Context from '../Context/StorageContext.jsx'

const StorageContextProvider = ({ children }) => {
  const [items, setItems] = useState([])

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

  useEffect(() => {
    if (dataArray) {
      setItems(dataArrayPush)
    }
  }, [])

  const value = {
    addItem,
    updateComment,
    dataArray,
    items,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default StorageContextProvider
