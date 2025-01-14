import React from 'react'
import Navebar from '../Combonents/Navebar'
import notification from '../assets/images/notification.jpg'
function Notification() {
  return (
    <div className="h-screen w-screen "
   
      style={{
        backgroundImage: `url(${notification})`,
        backgroundAttachment: "fixed",
        backgroundSize:"contain",
    }}
    >
        <div className="h-[100px] w-full ">
        <Navebar id="fixed z-20" />
        </div>
        
  </div>
  )
}

export default Notification
