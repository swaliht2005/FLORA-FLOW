import React from 'react';
import { useLocation } from 'react-router-dom';
import Navebar from '../Combonents/Navebar';
import { Link } from 'react-router-dom';
function Detailse() {
  const location = useLocation();
  const { cart } = location.state || {};

  return (
    <div>
      <Navebar />
      <div className="h-[800px] w-full border-black p-4 flex items-center justify-center">
        {cart ? (
            <div className="h-[500px] w-[350px] bg-white p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
        <div className="flex items-center flex-col">
          <img
            src={cart.url}
            alt={cart.PlantName}
            className="h-[80%] w-[80%] object-cover rounded mb-4"
          />
          <div className="">
        
          <h2 className="">{cart.PlantName}</h2>
          </div>
        </div>
        <div className="relative left-[10px] bottom-[20px]">
          <h2 className="text-gray-600">Planting Day: {cart.plantingDay}</h2>
          <h2 className="text-gray-600">Height: {cart.Height}</h2>
        </div>
        <div className="w-full flex justify-around gap-5">
  <button className="w-[150px]  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    Order
  </button>
  <button className="w-[150px] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <Link to={'/chating'}>
    Comment
    </Link>
  </button>
</div>
        </div>
        ) : (
          <p>No details available</p>
        )}
      </div>
    </div>
  );
}

export default Detailse;
