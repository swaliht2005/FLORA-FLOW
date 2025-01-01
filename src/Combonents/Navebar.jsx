import React, { useState } from 'react';
import FloraflowLogo from '../assets/images/FloraflowLogo.png';
import Profileicon from '../assets/images/profileicon.png';
import Navebarinput from '../assets/images/Navebarinput.png';
import { Link } from 'react-router-dom';
import Useredeuser from './Useredeuser';

function Navebar() {
  const [state, setState] = useState({
    isMobileMenuOpen: false,
  });

  const toggleMobileMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  return (
    <div className="h-auto w-full bg-green-800 shadow-md fixed z-20 ">
      <Useredeuser />

      {/* Navbar Container */}
      <div className="h-[100px] w-full flex items-center justify-between px-4 lg:px-8 overflow-hidden">
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
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline cursor-pointer">
            <Link to="/favorite">Favorite</Link>
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
            onClick={() => console.log('Open Modal')}
          >
            <Link to={'/profile'}>
            <img
              src={Profileicon}
              alt="Profile Icon"
              className="h-full w-full object-cover"
            />
            </Link>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {state.isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-green-800 shadow-md">
          <Link
            to="/homePage"
            className="text-white px-4 py-2 hover:bg-green-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white px-4 py-2 hover:bg-green-700"
          >
            About
          </Link>
          <Link
            to="/favorite"
            className="text-white px-4 py-2 hover:bg-green-700"
          >
           favorite
          </Link>
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
          
          >
            <Link to={'/profile'}>
            Profile
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navebar;
