


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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-200">
      {/* Navbar */}
      <div className="z-10">
        <Navebar />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center   items-start gap-10 px-4 sm:px-6 lg:px-20  relative z-10">
        {/* Left Section */}
        <div className="w-full lg:w-[500px] lg:h-[680px]  flex-col bg-opacity-25 rounded-md p-2 shadow-2xl hidden sm:block lg:flex">
        <img
          src={plantscare}
          alt="Plant Care"
          className="w-full h-80 sm:h-72 p-2 lg:h-[606px] object-cover rounded-lg"
        />
        <h3 className="text-gray-800 font-semibold text-justify">
          Every plant you grow is a step towards a greener tomorrow. Add a plant today and watch life flourish!
        </h3>
      </div>


        {/* Right Section */}
        <div className="w-full lg:w-2/5 bg-white bg-opacity-45 h-full rounded-lg p-6 sm:p-8 shadow-lg flex flex-col gap-6">
          {/* Thumbnail Uploader */}
          <div className="w-full flex justify-center">
          <div className="w-48 sm:w-20 lg:w-80 h-48 sm:h-16 lg:h-72 bg-gray-200 rounded-md shadow">
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
            className="w-full p-2  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Day}
            placeholder="Planting Day"
            onChange={(e) =>
              dispatch({ type: "updatePlantingDay", payload: e.target.value })
            }
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Height}
            placeholder="Plant Height"
            onChange={(e) =>
              dispatch({ type: "updateHeight", payload: e.target.value })
            }
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />

          <input
            type="text"
            value={state.Price}
            placeholder="Price ₹ 00.00"
            onChange={(e) =>
              dispatch({ type: "updatePrice", payload: e.target.value })
            }
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
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
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow hover:opacity-90 text-sm sm:text-base">
              Save
            </button>
            <Link
              to="/chatting"
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-lg shadow hover:opacity-90 text-sm sm:text-base"
            >
              Comments
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[500px] lg:h-[680px] flex flex-col bg-opacity-25 rounded-md p-2 shadow-2xl lg:hidden">
          <img
            src={plantscare}
            className="w-full h-80 sm:h-72 p-2 lg:h-[606px] object-cover rounded-lg"
            alt="Plant Care"
          />
          <h3 className="text-gray-800 font-semibold text-justify">
            Every plant you grow is a step towards a greener tomorrow. Add a plant today and watch life flourish!
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Addproduct;
