

import React, { useState } from "react";
import Addproductimg from "../assets/images/Addproductimg.png";

const ThumbnailUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center font-sans text-black p-4">
      {/* Heading */}
      <h3 className="font-bold text-lg mb-4 sm:text-xl md:text-2xl">Add Plant Photo</h3>

      {/* Image Container */}
      <div
        className="relative w-40  h-32 lg:w-32 lg:h-32 rounded-lg flex justify-center items-center overflow-hidden border border-gray-300 bg-gray-100"
      >
        {image ? (
          <img
            src={image}
            alt="Thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={Addproductimg}
            alt="Add Product"
            className="w-full h-full object-contain"
          />
        )}

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>

      {/* Description */}
      <p className="mt-4 text-sm hidden sm:block md:text-lg lg:text-xl text-gray-600 px-4">
        Set the product thumbnail image. Only image files are accepted.
      </p>
    </div>
  );
};

export default ThumbnailUploader;
