import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '/src/Admin/About'
import Addproduct from '/src/Seller/addproduct'
function SellerRoutes() {
  return (
   <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path='/addproduct' element={<Addproduct/>} />
    </Routes>
  )
}

export default SellerRoutes
