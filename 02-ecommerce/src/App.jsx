import { createContext, useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import { NavBar } from './components/NavBar'
import useFetch from './hooks/useFetch'
import { CartPage } from './components/CartPage'
import { CartContext, CartProvider } from './context/cartContext'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FilterContext, FilterProvider } from './context/FilterContext'
import Presentation from './components/Presentation'


function App() {


  const { cartTotal, incrementCartTotal } = useContext(CartContext)
  const { filter, setFilter } = useContext(FilterContext)

  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={
              <Presentation />
            } />
            <Route path='/all' element={
              <HomePage />
            } />
            <Route path='/electronics' element={
              <HomePage />
            } />
            <Route path='/furniture' element={
              <HomePage />
            } />
            <Route path='/shoes' element={
              <HomePage />
            } />
            <Route path='/miscellaniues' element={
              <HomePage />
            } />
            <Route path='/cart' element={
              <CartPage productos={
                cartTotal
              } />
            } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
