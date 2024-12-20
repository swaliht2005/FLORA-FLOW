import React, { useState } from 'react';
import Navebar from '../Combonents/Navebar';
import Bananatree from '../Costomer/costomerimgs/Bananatree.png'; 
import Footer from '../Combonents/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  const carts = [
    {
      id: 1, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/17/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/18/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/19/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/20/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/21/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/22/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/23/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/24/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/25/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/26/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/27/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/28/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/29/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/30/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },

    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },

    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    {
      id: 2, url: Bananatree, PlantName: "Banana Plant", plantingDay: "12/16/24", Height: "10cm",
    },
    
  ];
 

  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Navbar */}
    <div className="h-[100px] w-full">
      <Navebar />
    </div>

    {/* Cards Section */}
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {carts.map((cart) => (
        <Link to={`/detailse`} key={cart.id} state={{ cart }}>
          <div className="h-[450px] w-[350px] bg-white p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
            <div className="flex items-center flex-col">
              <img
                src={cart.url}
                alt={cart.PlantName}
                className="h-[80%] w-[80%] object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold">{cart.PlantName}</h2>
            </div>
            <div className="relative left-[10px] bottom-[20px]">
              <h2 className="text-gray-600">Planting Day: {cart.plantingDay}</h2>
              <h2 className="text-gray-600">Height: {cart.Height}</h2>
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
