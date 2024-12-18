import React, { useReducer } from 'react';
import Combonentsimgs from '../Combonents/Combonentsimgs/add.png';
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

  return (
    <div className="h-[100px] w-full shadow-md fixed bottom-0 z-20 flex items-center justify-center">
     
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
          <div className="h-auto w-[400px] bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <img src={} alt="" />
            <button
              onClick={() => dispatch({ type: 'closeModal' })}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}

     
      <Useredeuser />
    </div>
  );
}

export default Footer;
