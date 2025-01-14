import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '../Admin/About.jsx'
import Addproduct from '../Seller/addproduct.jsx'
function SellerRoutes() {
  return (
   <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path='/addproduct' element={<Addproduct/>} />
    </Routes>
  )
}

export default SellerRoutes
