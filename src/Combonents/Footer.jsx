import React from "react";
import email from '../assets/images/icons8-email-30.png'
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'
import linkdin from '../assets/images/linkedin-.png'
import FloraflowLogo from '../assets/images/FloraflowLogo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">About Us</h3>
          <p className="text-sm leading-relaxed">
            Flowra Flow is dedicated to promoting greenery and sustainability.
            Join us in making the planet a greener place to live.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-teal-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/homePagecarts" className="hover:text-teal-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="hover:text-teal-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="hover:text-teal-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Contact Us</h3>
         <div className="flex items-center gap-4">
                   <img src={email} alt="Email" className="h-8 sm:h-10" />
                   <a
                     href="mailto:salumuhammadswalih@gmail.com"
                     className="text-sm sm:text-base hover:text-gray-300"
                   >
                     Click To Email
                   </a>
                 </div>
          <div className="flex items-center gap-4">
                  <img src={phone} alt="Phone" className="h-8 sm:h-10" />
                  <a
                    href="tel:8095635402"
                    className="text-sm sm:text-base hover:text-gray-300"
                  >
                    8095635402
                  </a>
                </div>
        
                
        
                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <img src={location} alt="GitHub" className="h-8 sm:h-10" />
                  <a
                    href="https://www.google.com/maps/search/calicut+kinfra/@11.207134,75.750338,12z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-sm sm:text-base hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calicut Kinfra
                  </a>
                </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Follow Us</h3>
          {/* LinkedIn */}
          <div className="flex items-center gap-4">
                  <img src={linkdin} alt="LinkedIn" className="h-8 sm:h-10" />
                  <a
                    href="https://www.linkedin.com/in/muhammed-swalih-3a12b931a/"
                    className="text-sm sm:text-base hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click To LinkedIn
                  </a>
                </div>
                {/* <div className="mb-5 lg:mb-0 flex justify-center">
        <img
          src={FloraflowLogo}
          alt="FloraFlow Logo"
          className="h-5 sm:h-20 lg:h-28  lg:ml-80"
        />
      </div> */}

        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Flowra Flow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
