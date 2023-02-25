import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StorageContextProvider from './Components/Providers/StorageContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StorageContextProvider>
    <App />
    </StorageContextProvider>
  </React.StrictMode>
)
