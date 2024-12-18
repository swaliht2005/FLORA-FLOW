import React, { useReducer, useState } from 'react';
import FloraflowLogo from '/src/assets/FloraflowLogo.png';
import Profileicon from '/src/assets/Profileicon.png';
import Navebarinput from '/src/assets/Navebarinput.png';
import { Link } from 'react-router-dom';
import Useredeuser from './Useredeuser';

function Navebar() {
  // Reducer for handling modal open/close states
  const initialState = { isModalOpen: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'openModal':
        return { isModalOpen: true };
      case 'closeModal':
        return { isModalOpen: false };
      default:
        throw new Error('Unknown action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // States for user profile details
  const [name, setName] = useState('Swalih');
  const [about, setAbout] = useState(
    'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.'
  );
  const [number, setNumber] = useState('+91 80956 35402');

  return (
    <div className="h-[100px] w-full bg-green-800 shadow-md fixed z-20">
      {/* Include Useredeuser component */}
      <Useredeuser />

      <div className="h-[100px] w-full bg-green-800 flex items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center relative">
          <img
            src={FloraflowLogo}
            alt="Flora Flow Logo"
            className="h-[150px] w-[150px] rounded-full"
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

        {/* Right Section */}
        <div className="flex items-center gap-x-6">
          <h3 className="text-lg font-medium text-white hover:underline cursor-pointer">
            <Link to="/homePage">Home</Link>
          </h3>
          <h3 className="text-lg font-medium text-white hover:underline cursor-pointer">
            <Link to="/about">About</Link>
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
          <button
            className="h-[50px] w-[50px] rounded-full overflow-hidden hover:shadow-md transition"
            onClick={() => dispatch({ type: 'openModal' })}
          >
            <img
              src={Profileicon}
              alt="Profile Icon"
              className="h-full w-full object-cover"
            />
          </button>

          {/* Profile Modal */}
          {state.isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
              <div className="h-auto w-[400px] bg-white p-6 rounded-lg shadow-lg flex flex-col">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src={Profileicon}
                    alt="Profile Icon"
                    className="h-[100px] w-[100px] rounded-full mb-4 object-cover"
                  />
                </div>

               
                <div className="text-center mb-6">
                
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-xl font-bold border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button className="text-gray-400 hover:text-gray-700 transition">
                      ✏️
                    </button>
                  </div>

                  {/* Editable About */}
                  <div className="flex flex-col items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-600">
                        About
                      </span>
                      <button className="text-gray-400 hover:text-gray-700 transition">
                        ✏️
                      </button>
                    </div>
                    <textarea
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      className="w-full mt-1 text-gray-700 focus:outline-none focus:border-blue-500"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Phone number</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="tel"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="w-[200px] text-gray-700 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      placeholder="Enter phone number"
                    />
                    <button className="text-gray-400 hover:text-gray-700 transition">
                      ✏️
                    </button>
                  </div>
                </div>

               
                <div className="flex justify-between text-center border-t pt-4">
                  <button
                    onClick={() => dispatch({ type: 'closeModal' })}
                    className="w-[100px] bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    Log out
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'closeModal' })}
                    className="w-[100px] bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navebar;
