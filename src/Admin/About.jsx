import React from 'react';

import Aboutme from './Aboutme';
import ContactUS from './ContactUS';
import Navebar from '../Combonents/Navebar';

function About(props) {
  return (
    <div className=" min-w-screen w-screen  flex items-center justify-center bg-gray-200  overflow-hidden flex-col">
    <div className="h-[100px] w-full">
      <Navebar id=" w-full fixed z-20" />
    </div>
     <Aboutme/>
    <div className="w-screen mt-2">
     <ContactUS/>
     </div>
    </div>
  );
}

export default About;
