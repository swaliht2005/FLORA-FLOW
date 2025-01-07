import React from 'react'

import { useLocation } from 'react-router-dom'
import Navebar from '../Combonents/Navebar';

function Favorite() {
    const location = useLocation();
   
  return (
    <div className="flex flex-col min-h-screen">
      <Navebar />
     
      </div>
   
  )
}

export default Favorite
