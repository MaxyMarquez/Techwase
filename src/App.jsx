import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
