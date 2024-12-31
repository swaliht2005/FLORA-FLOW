import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Combonentsimgs from '../assets/images/add.png';
import Useredeuser from './Useredeuser';

function Footer() {
  const initialState = { isModalOpen: false };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'openModal':
        return { isModalOpen: true };
      case 'closeModal':
        return { isModalOpen: false };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
 
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [plantingDay, setPlantingDay] = useState('');

  return (
    <div className="h-[100px] w-full  shadow-md fixed bottom-0 z-20 flex items-center justify-center">
      <button
        onClick={() => dispatch({ type: 'openModal' })}
        className="h-[50px] w-[50px] text-2xl shadow-md flex bg-green-800 items-center justify-center rounded-full"
      >
        <img
          src={Combonentsimgs}
          alt="Add"
          className="h-[50px] w-[50px] rounded-full"
        />
      </button>

      {state.isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="h-auto w-full max-w-[500px] bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center mx-4 md:mx-0">
            <div className="h-[100px] w-[100px] bg-white rounded-full flex items-center text-center justify-center mb-4">
              Add Plant Photo
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[40px] w-full p-2 text-gray-700 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Plant Name"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="h-[40px] w-full p-2 text-gray-700 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Plant Height"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={plantingDay}
                  onChange={(e) => setPlantingDay(e.target.value)}
                  className="h-[40px] w-full p-2 text-gray-700 border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Planting Day"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4 w-full justify-center">
              <button
                onClick={() => dispatch({ type: 'closeModal' })}
                className="w-[100px] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add
              </button>
              <Link to={`/chating`} className="w-[100px] text-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5">
                Comments
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <Useredeuser />
    </div>
  );
}

export default Footer;
