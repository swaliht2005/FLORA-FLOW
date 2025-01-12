import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FloraflowLogo from '../assets/images/FloraflowLogo.png';
import Profileicon from '../assets/images/profileicon.png';
import Navebarinput from '../assets/images/Navebarinput.png';
import Useredeuser from './Useredeuser';
import home from '../assets/images/home.png'

function Navebar({id = ''}) {
  const [state, setState] = useState({ isMobileMenuOpen: false });

  const toggleMobileMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  return (
    <div className={`h-auto w-[100%]  rounded-full backdrop-blur-md bg-white/30   shadow-xl ${id}`}>
      <Useredeuser />
   
      <div className="h-[100px] w-full flex items-center justify-between px-4 lg:px-8 ">
        <div className="flex items-center">
          <img
            src={FloraflowLogo}
            alt="Flora Flow Logo"
            className="h-[20px] w-[20px] lg:h-[80px] lg:w-[80px]  "
          />
      <h3 className='font-handwriting text-3xl text-white sm:text-2xl md:text-sm lg:text-3xl xl:text-4xl'>
      Flora Flow
    </h3>

         
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

        <div className=" md:flex items-center gap-x-4 lg:gap-x-6">
        <h3 className="text-sm lg:text-lg font-medium text-white hover:underline hidden lg:block">
            <Link to="/addproduct">Add Plants</Link>
          </h3>
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline hidden lg:block">
            <Link to="/homePage">Home</Link>
          </h3>
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline hidden lg:block">
            <Link to="/about">About</Link>
          </h3>
          <h3 className="text-sm lg:text-lg font-medium text-white hover:underline hidden lg:block">
            <Link to="/favorite">Favorite</Link>
          </h3>
          
          <Link to={'/notification'}>
          <button
            className="bg-gradient-to-l from-purple-300 to-purple-500 rounded-full text-white font-semibold w-36 h-10 hidden lg:flex items-center justify-center gap-1   "
          >
            <svg
            viewBox="0 0 448 512"
            className="w-4 h-4 animate-none hover:animate-bell"
            xmlns="http://www.w3.org/2000/svg"
                  >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
              fill="currentColor"
            ></path>
            </svg>
            Notifications
          </button>
          </Link>
          <button className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] rounded-full overflow-hidden hidden lg:block">
            <Link to="/profile">
              <img
                src={Profileicon}
                alt="Profile Icon"
                className="h-full w-full object-cover"
              />
            </Link>
          </button>
          <div className="sm:w-auto flex flex-row  md:relative left-24 gap-4 md:w-auto lg:hidden ">
            <Link to={'/notification'}>
          <button 
          className="flex items-center justify-center gap-2 bg-gradient-to-l from-purple-300 to-purple-500 rounded-full text-white font-semibold border-none relative cursor-pointer transition-transform duration-200 shadow-lg hover:shadow-md active:scale-95 w-36 h-10 lg:hidden max-w-5 max-h-5  sm:left-20">
          <svg
            viewBox="0 0 448 512"
            className="w-4 h-4 animate-none hover:animate-bell"
            xmlns="http://www.w3.org/2000/svg"
                  >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
              fill="currentColor"
            ></path>
            </svg>
          </button>
          </Link>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-l rounded-full text-white font-semibold border-none relative cursor-pointer transition-transform duration-200 shadow-lg hover:shadow-md active:scale-95 w-36 h-10 lg:hidden max-w-5 max-h-5 sm:left-20 md:left-0">
                    <Link to="/homePage">
              <img src={home} alt="" />
          </Link>
            </button>

        </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className=" text-white focus:outline-none relative  lg:hidden md:right-2"
        >
          ☰
        </button>
      </div>
             

      {state.isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-green-800">
         <Link to="/addproduct" className="text-white px-4 py-2">
            Add plants
          </Link>
          <Link to="/about" className="text-white px-4 py-2">
            About
          </Link>
          <Link to="/favorite" className="text-white px-4 py-2">
            Favorite
          </Link>
          <Link to="/profile" className="text-white px-4 py-2">
            Profile
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navebar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import FloraflowLogo from '../assets/images/FloraflowLogo.png';
// import Profileicon from '../assets/images/profileicon.png';
// import Navebarinput from '../assets/images/Navebarinput.png';
// import Useredeuser from './Useredeuser';
// import home from '../assets/images/home.png';

// function Navebar({ id = '' }) {
//   const [state, setState] = useState({ isMobileMenuOpen: false });

//   const toggleMobileMenu = () => {
//     setState((prevState) => ({
//       ...prevState,
//       isMobileMenuOpen: !prevState.isMobileMenuOpen,
//     }));
//   };

//   return (
//     <div
//       className={`backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-xl ${id}`}
//     >
//       <Useredeuser />

//       <div className="h-[100px] w-full flex items-center justify-between px-4 lg:px-8">
//         <div className="flex items-center">
//           <img
//             src={FloraflowLogo}
//             alt="Flora Flow Logo"
//             className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] rounded-full border border-white/50"
//           />
//           <h3 className="font-handwriting text-3xl text-white sm:text-2xl md:text-sm lg:text-3xl xl:text-4xl ml-4">
//             Flora Flow
//           </h3>

//           <div className="hidden md:flex h-[40px] w-[200px] lg:w-[400px] bg-white/50 backdrop-blur-md rounded-full shadow-md items-center px-4 ml-4">
//             <img
//               src={Navebarinput}
//               alt="Search Icon"
//               className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]"
//             />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="h-full w-full outline-none px-2 text-gray-700 bg-transparent placeholder-gray-500"
//             />
//           </div>
//         </div>

//         <div className="md:flex items-center gap-x-4 lg:gap-x-6">
//           {['Add Plants', 'Home', 'About', 'Favorite'].map((item) => (
//             <h3
//               key={item}
//               className="text-sm lg:text-lg font-medium text-white hover:text-purple-200 hover:underline hidden lg:block"
//             >
//               <Link to={`/${item.toLowerCase().replace(' ', '')}`}>
//                 {item}
//               </Link>
//             </h3>
//           ))}
//           <Link to="/notification">
//             <button className="bg-gradient-to-r from-purple-400 to-purple-600 backdrop-blur-md rounded-full text-white font-semibold w-36 h-10 hidden lg:flex items-center justify-center gap-1 shadow-lg hover:shadow-purple-500/50">
//               <svg
//                 viewBox="0 0 448 512"
//                 className="w-4 h-4 animate-none hover:animate-bell"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//               Notifications
//             </button>
//           </Link>
//           <button className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] rounded-full overflow-hidden hidden lg:block border border-white/50 shadow-md">
//             <Link to="/profile">
//               <img
//                 src={Profileicon}
//                 alt="Profile Icon"
//                 className="h-full w-full object-cover"
//               />
//             </Link>
//           </button>
//         </div>
//         <button
//           onClick={toggleMobileMenu}
//           className="lg:hidden text-white focus:outline-none"
//         >
//           ☰
//         </button>
//       </div>

//       {state.isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-4">
//           {['Add Plants', 'About', 'Favorite', 'Profile'].map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase().replace(' ', '')}`}
//               className="text-white hover:text-purple-200 px-4 py-2"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navebar;
