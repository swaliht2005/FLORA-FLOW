import React from "react";

const WeekendOffer = () => {
  return (
    <div className="h-40 md:h-56 lg:h-32 flex items-center bg-gradient-to-r from-green-500 via-lime-400 to-teal-500 overflow-hidden relative">
      {/* Background Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-700 rounded-full opacity-40 animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-500 rounded-full opacity-40 animate-spin-reverse"></div>
      </div>
      <marquee  direction="left" >
      {/* Marquee Text */}
      <div className="whitespace-nowrap animate-marquee">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white inline-block mx-4">
          🌱 Weekend Offer Sales 🌿
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white inline-block mx-4">
          🌿 Limited Time Discount 🌱
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white inline-block mx-4">
          🍃 Grab Your Green Now! 🌟
        </h1>
      </div>

      {/* Floating Leaves */}
      <div className="absolute top-5 left-5 animate-float">
        🌿
      </div>
      <div className="absolute top-8 right-10 animate-float-slow">
        🍃
      </div>
      <div className="absolute bottom-5 left-16 animate-float-reverse">
        🌿
      </div>
      <div className="absolute bottom-8 right-20 animate-float">
        🍃
      </div>
      </marquee>
    </div>
  );
};

export default WeekendOffer;
