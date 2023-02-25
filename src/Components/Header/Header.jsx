import React from 'react'
import Form from '../Form/Form.jsx'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <span className="logo">gallery</span>
      <div className="logo-gallery">
        <span>add your moment</span>
        <Form />
      </div>
    </div>
  )
}

export default Header
