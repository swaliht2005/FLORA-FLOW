import React from 'react';
import Combonentsimgs from '../Combonents/Combonentsimgs/add.png'
function Footer() {
  return (
    <div className="h-[100px] w-full shadow-md fixed bottom-0 z-20 flex items-center justify-center">
      <button className="h-[50px] w-[50px] text-2xl  shadow-md flex bg-green-400 items-center justify-center rounded-full">
      <img src={Combonentsimgs} alt="" className='h-[50px] w-[50px] rounded-full' />
      </button>
    </div>
  );
}

export default Footer;
