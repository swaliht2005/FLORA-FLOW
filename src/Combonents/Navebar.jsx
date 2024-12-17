import React from 'react'
import FloraflowLogo from '/src/assets/FloraflowLogo.png';
import Profileicon from '/src/assets/Profileicon.png';
import Navebarinput from '/src/assets/Navebarinput.png';
import { Link } from 'react-router-dom';
function Navebar() {
  return (
    <div className="h-[100px] w-full bg-green-300 shadow-md fixed z-20">
       <div className="h-[100px] w-full bg-green-300 flex items-center  justify-between px-6">
        {/* Left Section: Logo and Search Bar */}
        <div className="flex items-center  relative">
          <img
            src={FloraflowLogo}
            alt="Flora Flow Logo"
            className="h-[250px] w-[250px] rounded-full  "
          />
          <div className="h-[40px] w-[400px] bg-white rounded-full shadow flex items-center px-4">
            <img
              src={Navebarinput}
              alt="Search Icon"
              className="h-[25px] w-[25px] object-cover"
            />
            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full outline-none px-2 text-gray-700 rounded-full"
            />
          </div>
        </div>

        {/* Right Section: About, Language Selector, and Profile */}
        <div className="flex items-center gap-x-6">
          <h3 className="text-lg font-medium text-white hover:underline cursor-pointer">
         <Link to={"/about"}>
            About
          </Link>
          </h3>
          <select
            name="languages"
            id="language-selector"
            className="h-[35px] w-[150px] px-2 border border-gray-300 rounded shadow-sm hover:border-green-400 transition"
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ml">Malayalam</option>
          </select>
          <button className="h-[50px] w-[50px] rounded-full overflow-hidden  hover:shadow-md transition">
            <img
              src={Profileicon}
              alt="Profile Icon"
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navebar
