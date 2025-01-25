// import React, { useReducer, useState } from 'react';
// import Profileicon from '../assets/images/profileicon.png';
// import Navbar from '../Combonents/Navebar';
// import profaile from '../assets/images/profail.jpg';
// import Footer from '../Combonents/Footer';

// function Profile() {
//   const initialState = {
//     name: '',
//     about: '',
//     number: '',
//     email: '',
//     address: '',
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'updateName':
//         return { ...state, name: action.payload };
//       case 'updateAbout':
//         return { ...state, about: action.payload };
//       case 'updateNumber':
//         return { ...state, number: action.payload };
//       case 'updateEmail':
//         return { ...state, email: action.payload };
//       case 'updateAddress':
//         return { ...state, address: action.payload };
//       default:
//         throw new Error('Unknown action type');
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [image, setImage] = useState(null);

//   const imageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const isFormValid = state.name && state.email && state.number;

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center bg-gray-200"
//       style={{
//         backgroundImage: `url(${profaile})`,
//         backgroundAttachment: 'fixed',
//         backgroundSize: 'cover',
//         backgroundBlendMode: 'darken',
//       }}
//     >
//       {/* Navbar */}
//       <div className="w-full z-20">
//         <Navbar />
//       </div>

//       {/* Profile Form */}
//       <div className="relative mx-4 bottom-10 md:mt-20 w-full max-w-sm lg:max-w-[1000px]  bg-white p-7 rounded-lg shadow-lg">
//         <div className="flex flex-col items-center">
//           {/* Profile Image */}
//           <div className="relative w-36 h-36 rounded-full bg-gray-100 flex justify-center items-center">
//             {image ? (
//               <img
//                 src={image}
//                 alt="Profile Thumbnail"
//                 className="absolute w-full h-full object-cover rounded-full"
//               />
//             ) : (
//               <img
//                 src={Profileicon}
//                 alt="Profile Icon"
//                 className="h-20 md:h-24 w-20 md:w-24 rounded-full"
//               />
//             )}
//             {/* Edit Image Overlay */}
//             <label
//               className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-xs sm:text-sm cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
//               title="Edit Profile Picture"
//             >
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//                 onChange={imageChange}
//               />
//               Change Photo
//             </label>
//           </div>

//           {/* User Info */}
//           <input
//             type="text"
//             value={state.name}
//             placeholder="Enter your name"
//             onChange={(e) =>
//               dispatch({ type: 'updateName', payload: e.target.value })
//             }
//             className="mt-4 w-full text-lg md:text-xl font-bold outline-none text-center border-b border-gray-600"
//           />
//           <textarea
//             value={state.about}
//             placeholder="About you"
//             onChange={(e) =>
//               dispatch({ type: 'updateAbout', payload: e.target.value })
//             }
//             className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
//             rows="3"
//           ></textarea>
//           <input
//             type="tel"
//             value={state.number}
//             placeholder="Enter your number"
//             onChange={(e) =>
//               dispatch({ type: 'updateNumber', payload: e.target.value })
//             }
//             className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
//           />
//           <input
//             type="email"
//             value={state.email}
//             placeholder="Enter your email"
//             onChange={(e) =>
//               dispatch({ type: 'updateEmail', payload: e.target.value })
//             }
//             className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
//           />
//           <input
//             type="text"
//             value={state.address}
//             placeholder="Enter your address"
//             onChange={(e) =>
//               dispatch({ type: 'updateAddress', payload: e.target.value })
//             }
//             className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
//           />
//           <div className="mt-4">
//             <button
//               disabled={!isFormValid}
//               className={`group px-4 py-2 rounded-md border border-orange-400 
//               ${
//                 isFormValid
//                   ? 'bg-red-500 text-orange-400 hover:brightness-150'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               }
//               font-medium overflow-hidden duration-300`}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="w-full mt-auto">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from 'react'
import EditProfile from './EditProfile'
import  profaile  from '../assets/images/profail.jpg'
import Navebar from '../Combonents/Navebar'
import Footer2 from '../Combonents/Footer2'
function Profile() {
  return (
    <div
    className="h-screen w-screen"
    
  >
    <div className="w-full z-20">
        <Navebar/>
      </div>

      <EditProfile/>
      <div className="w-full mt-auto">
        <Footer2/>
      </div>
    </div>
  )
}

export default Profile
