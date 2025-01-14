
import React, { useReducer, useState } from 'react';
import Profileicon from '../assets/images/profileicon.png';
import Navbar from '../Combonents/Navebar';
import profaile from '../assets/images/profail.jpg'

function Profile() {
  const initialState = {
    name: '',
    about: '',
    number: '',
    email: '',
    address: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateName':
        return { ...state, name: action.payload };
      case 'updateAbout':
        return { ...state, about: action.payload };
      case 'updateNumber':
        return { ...state, number: action.payload };
      case 'updateEmail':
        return { ...state, email: action.payload };
      case 'updateAddress':
        return { ...state, address: action.payload };
      default:
        throw new Error('Unknown action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-50 z-30 overflow-hidden h-full w-full"
    style={{
      backgroundImage: `url(${profaile})`,
      backgroundAttachment: "fixed",
      backgroundSize:"contain",
  }}>
      {/* Navbar */}
      <div className="absolute top-0 w-full ">
        <Navbar id="fixed z-20" />
      </div>

      {/* Profile Form */}
      <div className="mx-4 mt-16 md:mt-20  w-full max-w-sm bg-white p-7  rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <div className="flex flex-col items-center py-10 sm:py-0"
        >
          <div className='relative  w-48  h-48 sm:w-60 sm:h-60  lg:w-96 lg:h-72 border border-gray-300 rounded-lg  bg-gray-100 flex justify-center items-center overflow-hidden'>
          {image ? (
            <img
              src={image}
              alt="Thumbnail"
              className="w-full h-full  object-cover"
            />
          ) : (
            <img
              src={Profileicon}
              alt="Profile Icon"
              className="h-20 md:h-24 w-20  md:w-24 rounded-full"
            />
          )}
          <label
            className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer text-sm sm:text-base"
            aria-label="Edit Thumbnail"
          >
            <input
              type="file"
              accept="image/*"
              onChange={imageChange}
              className="hidden "
            />
            ✏️
          </label>
          </div>
          <input
            type="text"
            value={state.name}
            placeholder="Enter your name"
            onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
            className="mt-4 w-full text-lg md:text-xl font-bold outline-none text-center border-b border-gray-600"
          />
          <textarea
            value={state.about}
            placeholder="About you"
            onChange={(e) => dispatch({ type: 'updateAbout', payload: e.target.value })}
            className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
            rows="3"
          ></textarea>
          <input
            type="tel"
            value={state.number}
            placeholder="Enter your number"
            onChange={(e) => dispatch({ type: 'updateNumber', payload: e.target.value })}
            className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
          />
          <input
            type="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })}
            className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
          />
          <input
            type="text"
            value={state.address}
            placeholder="Enter your address"
            onChange={(e) => dispatch({ type: 'updateAddress', payload: e.target.value })}
            className="w-full mt-2 border border-gray-300 outline-none rounded p-2"
          />
          <div className="relative top-3">
            <button className="group relative px-4 py-2 rounded-md border border-orange-400 bg-red-500 text-orange-400 font-medium overflow-hidden hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300">
              <span className="absolute -top-[150%] left-0 inline-flex w-80 h-1.5 bg-red-500 shadow-orange-400 rounded-md opacity-50 duration-500 group-hover:top-[150%] shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
``