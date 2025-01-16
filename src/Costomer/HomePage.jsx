
import Navebar from '../Combonents/Navebar';



import HomePagecarts from './HomePagecarts';

import HomeBanner from './HomeBanner';

import Album from './Album';

function HomePage() {
 
 

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
    {/* Navbar */}
    <div className=" w-full">
      <Navebar id="fixed z-20" />
    </div>
      <HomeBanner />
    {/* Cards Section */}
      <Album/>
   <div className="h-auto  lg:bottom-96  sm:bottom-0">
    
    <HomePagecarts />
    </div>
    {/* Footer */}
   
  </div>
);
}

export default HomePage;
