// import React, { useState } from "react";
// import Addproductimg from "../assets/images/Addproductimg.png";

// const ThumbnailUploader = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="flex  flex-col  justify-center items-center text-center font-sans text-white ">
//       {/* Heading */}
//       <h3 className="font-bold text-lg mb-2 sm:text-xl">Add Plant Photo</h3>
      
//       {/* Image Container */}
//       <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-96 lg:h-72  rounded-lg  flex justify-center items-center overflow-hidden">
//         <button onChange={handleImageChange}>
//         {image ? (
//           <img
//             src={image}
//             alt="Thumbnail"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <img
//             src={Addproductimg}
//             alt="Add Product"
//             className="w-full h-full object-contain"
//           />
//         )}
//         </button>

//         {/* Edit Thumbnail Button */}
      
//       </div>

//       {/* Description */}
//       <p className="mt-2 text-sm sm:text-base lg:text-lg text-white px-2">
//         Set the product thumbnail image. Only image files are accepted.
//       </p>
//     </div>
//   );
// };

// export default ThumbnailUploader;
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
    <div className="flex flex-col justify-center items-center   text-center font-sans text-black">
      {/* Heading */}
      <h3 className="font-bold text-lg mb-2 sm:text-xl">Add Plant Photo</h3>
      
      {/* Image Container */}
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-44 lg:h-32 rounded-lg flex justify-center items-center overflow-hidden">
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
      <p className="mt-2 text-sm sm:text-base lg:text-lg text-black px-2">
        Set the product thumbnail image. Only image files are accepted.
      </p>
    </div>
  );
};

export default ThumbnailUploader;
