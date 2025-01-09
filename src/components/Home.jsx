import React from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import HeroPage from './HeroPage'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <ProductList/>
    </div>
  )
}

export default Home