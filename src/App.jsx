import React from 'react';
import Header from './Components/Header/Header.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import 'sanitize.css';
import 'animate.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
