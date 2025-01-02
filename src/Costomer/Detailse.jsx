

import { useLocation, } from 'react-router-dom';
import Navebar from '../Combonents/Navebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Detailse() {
  const location = useLocation();
  const { cart } = location.state || {};
const [count,Setcount ] = useState(1)
  
 const incriment = ()=>{
  Setcount((prevCount)=>(prevCount+1));
 }
  const decriment =()=>{
    Setcount((prevCount)=>(prevCount-1));
  }
  return (
    <div className="flex flex-col min-h-screen  bg-gray-100">
      {/* Navbar */}
      <Navebar />

      {/* Product Card */}
      <div className=" flex items-center justify-center mt-[85px] md:mt-2">
        {cart ? (
          <div className="w-screen  h-screen  bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/5 flex justify-center">
              <img
                src={cart.url}
                alt={cart.PlantName}
                className="rounded h-90 object-cover shadow-sm"
              />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 lg:ml-8 mt-6 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800">
                {cart.PlantName}
              </h1>
              <p className="text-gray-600 mt-2">Planting Day: {cart.plantingDay}</p>
              <p className="text-gray-600 mt-2">Height: {cart.Height}</p>
              {cart.price && (
                <p className="text-xl font-bold text-green-600 mt-4">
                   ₹{cart.price}
                </p>
              )}
            <button onClick={decriment} className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out">-</button>
<label htmlFor="" className="text-lg mx-4">{count}</label>
<button onClick={incriment} className="bg-green-500 hover:bg-white text-white hover:text-black hover:border-green-500 hover:border-2 font-semibold py-2 px-4 rounded transition duration-400 ease-in-out">+</button>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                  Order Now
                </button>
                <Link
                  to="/chatting"
                  className="flex-1 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Comment
                </Link>
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
