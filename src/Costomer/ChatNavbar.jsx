import React from 'react'
import Profileicon from '../assets/profileicon.png'
function ChatNavbar() {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
    {/* Left Section: Profile Image */}
    <div className="flex items-center space-x-3">
      <img
        src={Profileicon}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-medium text-gray-900">(You)</p>
        <p className="text-xs text-gray-500">Message yourself</p>
      </div>
    </div>

    {/* Right Section: Search Icon */}
    <div className='h-[30px] w- [100px] bg-white flex items-center p-1 rounded-full '>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      <input type="text" 
      placeholder='serch within chat.....'
      className='outline-none border-none'/>
     
    </div>
  </div>
);
 
}

export default ChatNavbar
