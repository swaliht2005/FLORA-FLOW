import React, { useReducer, useState, useEffect } from 'react';
import FloraflowLogo from '/src/assets/FloraflowLogo.png';
import Profileicon from '/src/assets/Profileicon.png';
import Navebarinput from '/src/assets/Navebarinput.png';
import { Link } from 'react-router-dom';
import Useredeuser from './Useredeuser';

function Navebar() {
  const initialState = { isModalOpen: false, isMobileMenuOpen: false };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'openModal':
        return { ...state, isModalOpen: true };
      case 'closeModal':
        return { ...state, isModalOpen: false };
      case 'toggleMobileMenu':
        return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
      default:
        throw new Error('Unknown action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState('Swalih');
  const [about, setAbout] = useState(
    'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.'
  );
  const [number, setNumber] = useState('+91 80956 35402');

  // Disable scrolling on body when modal is open
  useEffect(() => {
    if (state.isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state.isModalOpen]);

  return (
    <div className="h-auto w-full bg-green-800 shadow-md fixed z-20 overflow-hidden">
      <Useredeuser />

      {/* Navbar Container */}
      <div className="h-[80px] w-full flex items-center justify-between px-4 lg:px-8 overflow-hidden">
        {/* Left Section */}
        <div className="flex items-center">
          <img
            src={FloraflowLogo}
            alt="Flora Flow Logo"
            className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] rounded-full"
          />
          <div className="hidden md:flex h-[40px] w-[200px] lg:w-[400px] bg-white rounded-full shadow items-center px-4 ml-4">
            <img
              src={Navebarinput}
              alt="Search Icon"
              className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]"
            />
            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full outline-none px-2 text-gray-700 rounded-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6">
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline cursor-pointer">
            <Link to="/homePage">Home</Link>
          </h3>
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline cursor-pointer">
            <Link to="/about">About</Link>
          </h3>
          <select
            name="languages"
            id="language-selector"
            className="h-[30px] lg:h-[35px] w-[120px] lg:w-[150px] px-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ml">Malayalam</option>
          </select>
          <button
            className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] rounded-full overflow-hidden hover:shadow-md transition"
            onClick={() => dispatch({ type: 'openModal' })}
          >
            <img
              src={Profileicon}
              alt="Profile Icon"
              className="h-full w-full object-cover"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => dispatch({ type: 'toggleMobileMenu' })}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {state.isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-green-800 shadow-md">
          <Link to="/homePage" className="text-white px-4 py-2 hover:bg-green-700">Home</Link>
          <Link to="/about" className="text-white px-4 py-2 hover:bg-green-700">About</Link>
          <select
            name="languages"
            id="mobile-language-selector"
            className="text-white px-4 py-2 bg-green-800 hover:bg-green-700"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ml">Malayalam</option>
          </select>
          <button
            className="text-white px-4 py-2 hover:bg-green-700"
            onClick={() => dispatch({ type: 'openModal' })}
          >
            Profile
          </button>
        </div>
      )}

      {/* Profile Modal */}
      {state.isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 overflow-hidden">
          <div className="h-auto max-h-[90vh] w-full max-w-[400px] bg-white p-6 rounded-lg shadow-lg overflow-y-auto mx-4 md:mx-0">
            <div className="flex flex-col items-center">
              <img
                src={Profileicon}
                alt="Profile Icon"
                className="h-[80px] md:h-[100px] w-[80px] md:w-[100px] rounded-full"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg md:text-xl font-bold mt-4 w-full text-center"
              />
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full mt-2 border border-gray-300 rounded p-2"
                rows="3"
              ></textarea>
              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mt-2 border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <button
              onClick={() => dispatch({ type: 'closeModal' })}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navebar;
