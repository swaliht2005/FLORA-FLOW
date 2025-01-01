import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '../Admin/About'

function SellerRoutes() {
  return (
   <Routes>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default SellerRoutes
