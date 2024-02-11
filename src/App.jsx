import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'

import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
