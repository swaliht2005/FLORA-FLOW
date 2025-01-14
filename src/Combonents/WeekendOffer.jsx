import React, { useState, useEffect } from "react";

const WeekendOffer = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false); // Stop animation after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-40 md:h-56 lg:h-32 flex justify-center items-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 overflow-hidden">
      <marquee  direction="right" >
      <h1
        className={`text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white transform transition-transform duration-500 ease-in-out ${
          isAnimating
            ? " "
            : "scale-100 opacity-90 translate-x-0"
        }`}
      >
        🌟 Weekend Offer Sales 🌟
      </h1> </marquee>
    </div>
  );
};

export default WeekendOffer;
