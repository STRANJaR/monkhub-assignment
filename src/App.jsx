import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import CategoriesPage from './components/CategoriesPage'
import Home from './components/Home'
import ProductCheckout from './components/ProductCheckout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/checkout" element={<ProductCheckout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App