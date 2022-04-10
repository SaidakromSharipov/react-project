import React, { useState } from 'react'
import Navbar from './Navbar';
import Mainn from './Mainn';
import NextMain from './NextMain';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Mainn />
        <NextMain/>
      </div>
    </div>
  )
}

export default App
