import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Collection, PlaceOrder,Home,About,Contact,Product,Cart,Login, Orders } from './pages'
import Navbar from './components/Navbar'
import { Footer } from './components'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/collection" element={<Collection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App