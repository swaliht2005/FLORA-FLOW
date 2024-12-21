import React, { useReducer } from 'react';
import Profileicon from '/src/assets/Profileicon.png';
import Navbar from '../Combonents/Navebar';

function Profile() {
  const initialState = {
    name: '',
    about: '',
    number: '',
    email:'',
    address:'',
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

  return (
    <div className="h-full w-full bg-white fixed inset-0 bg-opacity-50 flex flex-col items-center justify-center z-30 overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* Profile Form */}
      <div className="max-h-[90vh] w-full max-w-[400px] bg-white p-6 rounded-lg shadow-lg overflow-y-auto mx-4 mt-16 md:mt-20">
        <div className="flex flex-col items-center">
          <img
            src={Profileicon}
            alt="Profile Icon"
            className="h-[80px] md:h-[100px] w-[80px] md:w-[100px] rounded-full"
          />
          <input
            type="text"
            value={state.name}
            placeholder="Enter your name"
            onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
            className="text-lg md:text-xl font-bold mt-4 w-full outline-none  text-center border-b border-gray-600"
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
            className="mt-2 border border-gray-300 outline-none  rounded p-2 w-full"
          />
          <input
            type="tel"
            value={state.email}
            placeholder="Enter your email"
            onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })}
            className="mt-2 border border-gray-300 outline-none  rounded p-2 w-full"
          />
          <input
            type="tel"
            value={state.address}
            placeholder="Enter your address"
            onChange={(e) => dispatch({ type: 'updateAddress', payload: e.target.value })}
            className="mt-2 border border-gray-300  rounded p-2 w-full"
          />
             <div className="relative top-3 ">  
            <button className="bg-red-500 text-orange-400 border border-orange-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-red-500 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Save
            </button>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Profile;
