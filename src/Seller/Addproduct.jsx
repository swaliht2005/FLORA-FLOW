import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Navebar from "../Combonents/Navebar";
import ThumbnailUploader from "./ThumbnailUploader";

function Addproduct() {
  const initialState = {
    name: "",
    Day: "",
    Height: "",
    Price: "",
    about: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateName":
        return { ...state, name: action.payload };
      case "updatePlantingDay":
        return { ...state, updatePlantingDay: action.payload };
      case "updateHeight":
        return { ...state, height: action.payload };
      case "updatePrice":
        return { ...state, price: action.payload };
      case "updateAbout":
        return { ...state, about: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <Navebar />
      <div className=" flex flex-col lg:flex-row gap-8 items-center p-5 lg:p-40 mt-10 sm:mt-0 ">
        {/* Thumbnail Uploader Section */}
        <div className="flex justify-center items-center w-full lg:w-1/3">
          <div className="h-48 w-48 sm:h-64 sm:w-64   flex items-center justify-center   shadow-gray-400">
            <ThumbnailUploader />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3 max-w-3xl flex flex-col gap-4">
          {/* Plant Name Input */}
          <input
            type="text"
            value={state.name}
            placeholder="Plant Name"
            onChange={(e) => dispatch({ type: "updateName", payload: e.target.value })}
            className="text-lg md:text-xl font-bold w-full outline-none px-3 border-b border-gray-600"
          />

          {/* Planting Day Input */}
          <input
            type="text"
            value={state.updatePlantingDay}
            placeholder="Planting Day"
            onChange={(e) => dispatch({ type: "updatePlantingDay", payload: e.target.value })}
            className="text-lg md:text-xl font-bold w-full outline-none px-3 border-b border-gray-600"
          />

          {/* Plant Height Input */}
          <input
            type="text"
            value={state.updateHeight}
            placeholder="Plant Height"
            onChange={(e) => dispatch({ type: "updateHeight", payload: e.target.value })}
            className="text-lg md:text-xl font-bold w-full outline-none px-3 border-b border-gray-600"
          />

          {/* Price Input */}
          <input
            type="text"
            value={state.updatePrice}
            placeholder="Price ₹"
            onChange={(e) => dispatch({ type: "updatePrice", payload: e.target.value })}
            className="text-lg md:text-xl font-bold w-full outline-none px-3 border-b border-gray-600"
          />

          {/* About Textarea */}
          <textarea
            value={state.about}
            placeholder="About you"
            onChange={(e) => dispatch({ type: "updateAbout", payload: e.target.value })}
            className="w-full mt-2 border border-gray-300 outline-none px-3 rounded p-2"
            rows="3"
          ></textarea>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-3 justify-start lg:justify-center">
            <button
              className="w-full sm:w-auto sm:min-w-[100px] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Set
            </button>
            <Link
              to="/chatting"
              className="w-full sm:w-auto sm:min-w-[100px] text-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
