import React from 'react'

import { useLocation } from 'react-router-dom'
import Navebar from '../Combonents/Navebar';
import favorite from '../assets/images/faverate.jpg'
function Favorite() {
    const location = useLocation();
   
  return (
    <div className="h-screen w-screen"
    style={{
      backgroundImage: `url(${favorite})`,
      backgroundAttachment: "fixed",
      backgroundSize:"contain",
  }}>
    <div className="flex flex-col min-h-screen">
      <Navebar />
     
      </div>
      </div>
  )
}

export default Favorite
