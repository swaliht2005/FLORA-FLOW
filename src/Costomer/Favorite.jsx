import React from 'react'

import { useLocation } from 'react-router-dom'
import Navebar from '../Combonents/Navebar';
import { Link } from 'react-router-dom';
function Favorite() {
    const location = useLocation();
    const { cart } = location.state || {};
  return (
    <div className="flex flex-col min-h-screen">
      <Navebar />
     
      </div>
   
  )
}

export default Favorite
