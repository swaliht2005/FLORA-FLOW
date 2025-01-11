

import React from "react";
import Aboutbgimg from "../assets/images/aboutbgimg.jpg";
import aboutimg from "../assets/images/aboutimg.png";
import aboutourimg from '../assets/images/aboutourimg.png';
import img from '../assets/images/images.jpg';
import forcostomer from '../assets/images/forcostomer.jpg'
import choice from '../assets/images/Choise.jpg' 
import forsellerce from '../assets/images/forsellerse.jpg'
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
          <h2 className=" md:text-4xl font-bold text-green-700"
           >
            About Flora Flow
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-white text-center mt-2">
            Cultivating a Greener Planet, One Plant at a Time
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8   "
     
      >
        {/* About Paragraph */}
        <div className="w-[100%] h-full border  flex "
        // style={{
        //   backgroundImage:`url(${img})`,
    
        // }}
        >
        <p className="text-gray-700 leading-7 text-2xl font-serif flex items-center rounded">
          Welcome to Flora Flow, a platform dedicated to bringing nature closer
          to you while promoting sustainability and green living. At Flora
          Flow, we believe that plants are more than just decorative
          elements they are a source of life, beauty, and well-being. Whether
          you're a seasoned gardener or someone looking to add a touch of green
          to your home or workspace, Flora Flow is here to make it easy and
          enjoyable for everyone.
        </p>
        <div className="h-[250px] sm:h-[300px] md:h-[450px] rounded-lg lg:h-[450px] w-[500px] sm:w-[300px] md:w-[1000px] lg:w-[1550px]   bg-gray-400 
       ">
        <img
          src={aboutimg}
          alt="About Flora Flow"
          className="w-44 sm:w-48 md:w-80  lg:w-[100%]  lg:h-[500px] rounded-lg  shadow-lg rotate-12 sm:mt-8 md:bottom-11"
        />
      </div>
     </div>

        {/* Mission Section */}
        <div className="h-[400px] w-[450px] border border-black rounded-full"  
              style={{
                backgroundImage:`url(${aboutourimg})`,
                backgroundAttachment: "fixed",
                backgroundSize:"contain",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-700 text-center mt-10 font- font-rubikvinyl">
                Our Mission
              </h3>
              <p className="text-white leading-7 font-mono text-2xl text-justify mt-20 p-2">
                To inspire a greener, healthier planet by making plants accessible,
                affordable, and a natural part of everyday life.
              </p>
            
        </div>

        {/* What We Offer */}
     <div >
                <h2 className="text-2xl md:text-3xl font-bold text-green-700 ">
                  What We Offer
                </h2>

                {/* For Customers */}
                <div className="flex flex-wrap gap-10 justify-start h-[500px] w-[1500px]  ">
          {/* For Customers */}
          <div
            className="mt-4 w-full sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%] border p-6 rounded-lg shadow-lg hover:shadow-xl shadow-cyan-500/50 relative group"
            style={{
              backgroundImage: `url(${forcostomer})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white px-4 text-justify mt-10 font-custom">
              At Flora Flow, customers can enjoy a seamless shopping experience
              with access to comprehensive product details, including plant
              type, height, care instructions, and growth characteristics.
              High-quality images of each plant help customers make informed
              decisions. The platform also features customer reviews, enabling
              users to share experiences and find the perfect plant for their
              space. Powered by Socket.IO, Flora Flow offers real-time chat
              functionality, allowing customers to connect directly with
              sellers for advice or inquiries. Transactions are secure and
              convenient with various payment options, including GPay, PhonePe,
              UPI, credit/debit cards, and net banking. Additionally, customers
              can stay updated on their purchases with real-time order tracking
              and secure authentication using JWT (JSON Web Token) technology.
              </p>
            </div>

            {/* Content */}
            <div className="relative p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                For Customers:
              </h3>
            </div>
          </div>

          {/* For Sellers */}
          <div
  className="mt-4 w-full sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%] border p-6 rounded-lg shadow-lg hover:shadow-xl shadow-cyan-500/50 relative group"
  style={{
    backgroundImage: `url(${forsellerce})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Content */}

  {/* Overlay */}
  <div className="relative p-4">
    <h3 className="text-xl md:text-2xl font-semibold text-white">
      For Sellers:
    </h3>
  </div>
  <div className="absolute inset-0 bg-ilamgreen bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-gray-100 leading-7 px-4 group-hover:text-white group-hover:rounded-md group-hover:p-2 transition-all">
      Flora Flow empowers sellers with features like easy product uploads,
      inventory management, and billing automation. Sellers can add photos,
      set pricing, and provide detailed descriptions with plant care tips.
      Inventory and billing are streamlined, and sellers can attract customers
      with discounts and promotions. Real-time notifications keep sellers
      informed about orders, payments, and inquiries. The platform encourages
      meaningful customer interactions through real-time chats and ensures
      robust account security with advanced authentication mechanisms.
    </p>
  </div>
</div>

        </div>            
    </div>

        {/* Why Choose Flora Flow */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            Why Choose Flora Flow?
          </h2>
        <div className="h-[400px] w-[500px]"
        style={{
          backgroundImage:`url(${choice})`,
          backgroundSize:"cover",
          backgroundPosition: "center",
        }}>
        <div className="w-[100%] h-full border  flex font-handwriting text-justify justify-between gap-8 ">
          <p className="text-gray-700 leading-7 p-2 w-[90%]">
            Flora Flow isn’t just a marketplace it’s a community of plant
            lovers, environmental enthusiasts, and sustainable living
            advocates. By choosing Flora Flow, you’re enriching your life with
            the beauty of plants while contributing to a global effort to
            create a greener, more sustainable future.
          </p>

        </div>
</div>
        {/* Call to Action */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            Join the Green Revolution
          </h2>
          <p className="text-gray-700 leading-7">
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

      {/* Image Section */}
     

    </div>
  );
}

export default Aboutme;


