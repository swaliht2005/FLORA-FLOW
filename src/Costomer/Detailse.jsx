

// import { useLocation, } from 'react-router-dom';
// import Navebar from '../Combonents/Navebar';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';


// function Detailse() {
//   const location = useLocation();
//   const { cart } = location.state || {};
// const [count,Setcount ] = useState(1)
  
//  const incriment = ()=>{
//   Setcount((prevCount)=>(prevCount+1));
//  }
//   const decriment =()=>{
//     Setcount((prevCount)=>(prevCount-1));
//   }
//   return (
//     <div className="flex flex-col min-h-screen  bg-gray-100">
//       {/* Navbar */}
//       <Navebar />

//       {/* Product Card */}
//       <div className=" flex items-center justify-center mt-[85px] md:mt-2">
//         {cart ? (
//           <div className="w-screen  h-screen  bg-white rounded-lg shadow-md p-8 flex flex-col justify-center lg:flex-row items-center">
//             {/* Image Section */}
//             <div className="w-full lg:w-1/5 flex justify-center">
//               <img
//                 src={cart.url}
//                 alt={cart.PlantName}
//                 className="rounded h-auto object-cover shadow-sm"
//               />
//             </div>

//             {/* Details Section */}
//             <div className="w-full lg:w-1/2 lg:ml-8 mt-6 lg:mt-0">
//               <h1 className=" font-semibold text-4xl text-gray-800">
//                 {cart.PlantName}
//               </h1>
//               <Link to={'/homePagecarts'}>
//                   <a href="#_" className="relative  left-[680px] bottom-[55px] inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
//                       <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
//                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//                       </span>
//                       <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">SHOP MORE</span>
//                       <span className="relative invisible">Shop More</span>
//                  </a>
//                  </Link>
//               <p className="text-gray-600 mt-2 ">Planting Day: {cart.plantingDay}</p>
//               <p className="text-gray-600 mt-2">Height: {cart.Height}</p>
//               {cart.price && (
//                 <p className="text-xl font-bold text-green-600 mt-4">
//                    ₹{cart.price}
//                 </p>
//               )}

//               {/* Actions */}
//               <div className="flex gap-4 mt-6 flex-col">
//                 <div className="">
//             <button onClick={decriment} className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out">-</button>
//             <label htmlFor="" className="text-lg mx-4">{count}</label>
//             <button onClick={incriment} className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out">+</button>
//             </div>
//             <div className=" flex gap-2">
//                 <button className="flex-1 bg-green-500 text-white py-2  hover:bg-green-600">
//                 Add to cart
//                 </button>
               
//                 <Link
//                   to="/chatting"
//                   className="flex-1 text-center bg-blue-500 text-white py-2  hover:bg-blue-600"
//                 >
//                   Comment
//                 </Link>
//                 </div>
                
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-600">No details available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Detailse;



import { useLocation } from "react-router-dom";
import Navebar from "../Combonents/Navebar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Detailse() {
  const location = useLocation();
  const { cart } = location.state || {};
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navebar />

      {/* Product Card */}
      <div className="flex items-center justify-center mt-8 px-4 lg:mt-12 lg:py-14 overflow-hidden">
        {cart ? (
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 lg:p-12 flex flex-wrap lg:flex-nowrap items-center gap-8 sm:pb-16 mt-20 sm:mt-0">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <img
                src={cart.url}
                alt={cart.PlantName || "Plant Image"}
                className="rounded h-auto max-w-full lg:max-w-md object-cover shadow-sm  sm:pb-0"
              />
              <Link to={'/homePagecarts'}>
              <button
                type="button"
                className="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
              >
                SHOP MORE
              </button>
              </Link>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                {cart.PlantName || "Unknown Plant"}
              </h1>
              <p className="text-gray-600 mt-4">
                Planting Day: {cart.plantingDay || "N/A"}
              </p>
              <p className="text-gray-600 mt-2">Height: {cart.Height || "Unknown"}</p>
              {cart.price && (
                <p className="text-xl lg:text-2xl font-bold text-green-600 mt-4">
                  ₹{cart.price}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-6 mt-8">
                {/* Quantity Selector */}
                <div className="flex justify-center sm:justify-start items-center gap-4">
                  <button
                    onClick={decrement}
                    className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <label htmlFor="quantity" className="text-lg">
                    {count}
                  </label>
                  <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
                    Add to Cart
                  </button>
                  <Link
                    to="/chatting"
                    className="flex-1 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Comment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No details available</p>
        )}
      </div>
    </div>
  );
}

export default Detailse;
