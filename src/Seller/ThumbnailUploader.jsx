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
    <div className="flex  flex-col  justify-center items-center text-center font-sans text-gray-500 ">
      {/* Heading */}
      <h3 className="font-bold text-lg mb-2 sm:text-xl">Add Plant Photo</h3>
      
      {/* Image Container */}
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-96 lg:h-72 border border-gray-300 rounded-lg bg-gray-100 flex justify-center items-center overflow-hidden">
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

        {/* Edit Thumbnail Button */}
        <label
          className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer text-sm sm:text-base"
          aria-label="Edit Thumbnail"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          ✏️
        </label>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm sm:text-base lg:text-lg px-2">
        Set the product thumbnail image. Only image files are accepted.
      </p>
    </div>
  );
};

export default ThumbnailUploader;
