


import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Navebar from "../Combonents/Navebar";
import ThumbnailUploader from "./ThumbnailUploader";
import addplants from "/src/assets/images/addplants.jpg";
import plantscare from "../assets/images/planscare.jpg";

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
        return { ...state, Day: action.payload };
      case "updateHeight":
        return { ...state, Height: action.payload };
      case "updatePrice":
        return { ...state, Price: action.payload };
      case "updateAbout":
        return { ...state, about: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-200">
      {/* Navbar */}
      <div className="z-10">
        <Navebar />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 px-4 sm:px-6 lg:px-20 py-5  relative z-10">
        {/* Left Section */}
        <div className="w-full lg:w-96 lg:h-[530px] flex flex-col justify-between bg-opacity-25 rounded-md p-3 shadow-2xl">
          <img
            src={plantscare}
            className="w-full h-60 sm:h-72 lg:h-96 object-cover rounded-lg"
          />
          <h3 className="mt-4  sm:text-xl text-gray-800 font-semibold  text-justify">
            Every plant you grow is a step towards a greener tomorrow. Add a
            plant today and watch life flourish!
          </h3>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/5 bg-white bg-opacity-45 h-screen rounded-lg p-6 sm:p-8 shadow-lg flex flex-col gap-6">
          {/* Thumbnail Uploader */}
          <div className="w-full flex justify-center">
            <div className="w-48 sm:w-60 lg:w-80 h-48 sm:h-60 lg:h-72 bg-gray-200 rounded-md overflow-hidden shadow">
              <ThumbnailUploader />
            </div>
          </div>

          {/* Form */}
          <input
            type="text"
            value={state.name}
            placeholder="Plant Name"
            onChange={(e) =>
              dispatch({ type: "updateName", payload: e.target.value })
            }
            className="w-full p-4  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Day}
            placeholder="Planting Day"
            onChange={(e) =>
              dispatch({ type: "updatePlantingDay", payload: e.target.value })
            }
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Height}
            placeholder="Plant Height"
            onChange={(e) =>
              dispatch({ type: "updateHeight", payload: e.target.value })
            }
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Price}
            placeholder="Price ₹ 00.00"
            onChange={(e) =>
              dispatch({ type: "updatePrice", payload: e.target.value })
            }
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          {/* <textarea
            value={state.about}
            placeholder="About the plant"
            onChange={(e) =>
              dispatch({ type: "updateAbout", payload: e.target.value })
            }
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            rows="4"
          ></textarea> */}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow hover:opacity-90 text-sm sm:text-base">
              Save
            </button>
            <Link
              to="/chatting"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-lg shadow hover:opacity-90 text-sm sm:text-base"
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
