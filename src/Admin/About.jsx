import React from 'react';

import Aboutme from './Aboutme';

import Navebar from '../Combonents/Navebar';
import Footer from '../Combonents/Footer';

function About(props) {
  return (
    <div className="h-[4000px] md:h-[2800px] min-w-screen w-screen lg:h-[3000px]   flex items-center justify-center bg-gray-200  overflow-hidden flex-col">
    <div className=" w-full lg:h-[100px]">
      <Navebar id=" w-full fixed z-20" />
    </div>
   
     <Aboutme/>
    
    <div className="w-screen mt-2">
    <Footer/>
     </div>
  
    </div>
  );
}

export default About;
