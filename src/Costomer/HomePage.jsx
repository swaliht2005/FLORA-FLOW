import React, { useState } from 'react';
import Navebar from '../Combonents/Navebar';
import Bananatree from '../assets/images/Bananatree.png'; 
import Footer from '../Combonents/Footer';
import { Link } from 'react-router-dom';
import Faverate from '../assets/images/favorites.png'
import Pukspuu from '../assets/images/Pukspuu.jpg'
import bonsai from '../assets/images/bonsai.png'
import HomeBanner from './HomeBanner';
import Album from './Album';
function HomePage() {
  const carts = [
    {
      id: 1, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Pukspuu, PlantName: "Pukspuu", plantingDay: "12/17/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: bonsai, PlantName: "bonsai", plantingDay: "12/18/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/19/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/20/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/21/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/22/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/23/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/24/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/25/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/26/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/27/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/28/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/29/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/30/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },

    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },

    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",price: "200",
    },
    
  ];
 

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
    {/* Navbar */}
    <div className="h-[100px] w-full">
      <Navebar />
    </div>
      <HomeBanner/>
    {/* Cards Section */}
      <Album/>
   
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 rounded-[4px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {carts.map((cart) => (
    <Link to={`/details`} key={cart.id} state={{ cart }}>
      <div className="h-[460px] w-[350px] bg-white p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
        <button className='h-6 w-6'>
          <Link to={'/favorite'}>
            <img src={Faverate} alt="Favorite" />
          </Link>
        </button>

        <div className="flex items-center flex-col bg-slate-400 h-[300px]">
          <img
            src={cart.url}
            alt={cart.PlantName}
            className="h-full w-full object-cover rounded mb-4"
          />
        </div>
        <h2 className="text-lg font-semibold mt-4 text-center">{cart.PlantName}</h2>
        <div className="relative left-[10px] bottom-[5px]">
          <h2 className="text-gray-600">Planting Day: {cart.plantingDay}</h2>
          <h2 className="text-gray-600">Height: {cart.Height}</h2>
          <h1><b className='text-green-600'>₹ {cart.price} </b></h1>
        </div>
      </div>
    </Link>
  ))}
</div>


    {/* Footer */}
    <Footer />
  </div>
);
}

export default HomePage;
