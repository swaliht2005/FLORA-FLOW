

import React from "react";
import Aboutbgimg from "../assets/images/aboutbgimg.jpg";
import aboutimg from "../assets/images/aboutimg.png";
import aboutourimg from '../assets/images/aboutourimg.png';
import img from '../assets/images/images.jpg';
import forcostomer from '../assets/images/forcostomer.jpg'
import choice from '../assets/images/Choise.jpg' 
import forsellerce from '../assets/images/forsellerse.jpg'
import join from '../assets/images/jointhegreenrevelution.jpg'
function Aboutme() {
  return (
    <div className="max-w-full w-full mx-auto  bg-gray-200 shadow-lg rounded-lg">
       
      {/* Background Section */}
      
      <div className=" w-full   relative">
        <div className="relative z-10 flex items-center flex-col  h-60 "
        style={{
          backgroundImage:`url(${Aboutbgimg})`,
          backgroundAttachment: "fixed",
          backgroundSize:"contain",
        }}>
          <div className="absolute h-60 inset-0 bg-black bg-opacity-40  "></div>
          <h2 className=" md:text-4xl font-bold text-green-700 mt-8"
           >
            About Flora Flow
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-white text-center mt-2">
            Cultivating a Greener Planet, One Plant at a Time
          </h3>
        </div>
      </div>

      {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        {/* About Paragraph */}
          <div className="w-full h-full border sm:flex sm:flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 sm:text-justify">
          <p className="text-gray-700 leading-7 sm:text-sm md:text-lg lg:text-2xl font-serif flex-1 sm:text-left md:text-center lg:text-center">
          Welcome to Flora Flow, a platform dedicated to bringing nature closer
          to you while promoting sustainability and green living. At Flora
          Flow, we believe that plants are more than just decorative
          elements—they are a source of life, beauty, and well-being. Whether
          you're a seasoned gardener or someone looking to add a touch of green
          to your home or workspace, Flora Flow is here to make it easy and
          enjoyable for everyone.
        </p>

            <div className="h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[300px] md:py-1 bg-gray-400 rounded-lg flex items-center justify-center">
                <img
                  src={aboutimg}
                  alt="About Flora Flow"
                  className="w-full h-full object-cover rounded-lg shadow-lg sm:mt-4  rotate-12 "
                />
              </div>

          </div>
        </div>


        {/* Mission Section */}
        <div
  className="sm:h-[150px] sm:w-[300px] md:h-[300px] md:w-[350px]  lg:h-[400px] lg:w-[440px] lg:p-3  lg:ml-72 sm:relative sm:top-16 lg:top-0 md:top-0 border border-black rounded-full flex flex-col items-center justify-center"
  style={{
    backgroundImage: `url(${aboutourimg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "contain",
  }}
>
<h3 className="text-green-700 font-bold text-center mt-4 sm:text-xs md:text-lg lg:text-2xl font-rubikvinyl">
  Our Mission
</h3>

<p className="text-white leading-7 text-center sm:text-[12px] md:text-sm lg:text-lg xl:text-xl sm:px-2 md:px-4 lg:px-6 font-mono mt-4">
  To inspire a greener, healthier planet by making plants accessible,
  affordable, and a natural part of everyday life.
</p>

</div>


        {/* What We Offer */}
     <div  >
                <h2 className="text-2xl  sm:text-[12px] md:text-[30px]  lg:text-[30px]  sm:px-2 sm:mt-10  lg:mt-10   lg:ml-52 font-bold text-green-700 ">
                  What We Offer
                </h2>

                {/* For Customers */}
                <div className="flex flex-wrap gap-6 justify-start w-full max-w-[1500px] h-auto sm:mt-5  lg:mt-5 lg:ml-52 md:mt-5 ">
  {/* For Customers */}
  <div
    className="h-[400px] w-[100%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%] border p-6 rounded-lg shadow-lg hover:shadow-xl shadow-cyan-500/50 relative group"
    style={{
      backgroundImage: `url(${forcostomer})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-gray-100 leading-7 px-4 sm:text-[10px] md:text-base lg:text-lg">
      Flora Flow offers a seamless shopping experience with detailed plant information,
       customer reviews, and high-quality images to guide decisions. Real-time chat via 
       Socket.IO connects customers with sellers for advice, while secure payments (GPay, UPI, cards)
        and real-time order tracking ensure convenience and security with JWT authentication.
      </p>
    </div>
    <div className="relative p-4">
    <h3 className="text-xl md:text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      For Customers:
    </h3>
  </div>
  </div>

  {/* For Sellers */}
  <div
    className="h-[400px] w-[100%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%] border p-6 rounded-lg shadow-lg text-justify hover:shadow-xl shadow-cyan-500/50 relative group  sm:p-5"
    style={{
      backgroundImage: `url(${forsellerce})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="relative p-4">
      <h3 className="text-xl md:text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        For Sellers:
      </h3>
    </div>
    <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
    <p className="text-gray-100 leading-7 px-4 sm:text-[10px] md:text-base lg:text-lg">
    Flora Flow simplifies selling with features like product uploads, inventory 
    management, billing automation, and real-time notifications. Sellers can share
     plant care tips, attract customers with promotions, and engage through live chats,
      all while ensuring account security with advanced authentication.
    </p>

    </div>
  </div>

     
    </div>

        {/* Why Choose Flora Flow */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 relative  sm:mt-10   lg:ml-52 lg:mt-10 md:mt-10 ">
          Why Choose Flora Flow?
        </h2>

        <div
          className="h-[400px] w-full mt-4 sm:w-[90%] md:w-[60%] lg:w-[45%] xl:w-[30%] lg:ml-52 border p-6 rounded-lg shadow-lg hover:shadow-xl shadow-cyan-500/50 relative group"
          style={{
            backgroundImage: `url(${choice})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <p className="text-gray-100 leading-7 px-4 group-hover:text-white group-hover:rounded-md group-hover:p-2 transition-all">
              Flora Flow isn’t just a marketplace; it’s a community of plant lovers, environmental enthusiasts, and sustainable living advocates. By choosing Flora Flow, you’re enriching your life with the beauty of plants while contributing to a global effort to create a greener, more sustainable future.
            </p>
          </div>

        </div>
        {/* Call to Action */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 sm:mt-10   lg:ml-52 lg:mt-10 md:mt-10">
            Join the Green Revolution
          </h2>
          <div
          className="h-[400px] w-full mt-4 sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[30%] border lg:ml-52 p-6 rounded-lg shadow-lg hover:shadow-xl shadow-cyan-500/50 relative group"
          style={{
            backgroundImage: `url(${join})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <p className="text-gray-100 leading-7 px-4 group-hover:text-white group-hover:rounded-md group-hover:p-2 transition-all">
              Whether you're looking to beautify your surroundings, support
              small-scale sellers, or contribute to environmental well-being,
              Flora Flow is your trusted partner. Let’s work together to make
              greenery an essential part of our lives and create a thriving,
              sustainable community.
            </p>
            <p className="text-green-700 font-semibold">
              Discover Flora Flow today. Cultivate green, inspire change.
            </p>
          </div>

        </div>
      </div>

     
     

    </div>
  );
}

export default Aboutme;


