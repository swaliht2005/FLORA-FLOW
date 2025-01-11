
import Navebar from '../Combonents/Navebar';



import HomePagecarts from './HomePagecarts';

import HomeBanner from './HomeBanner';

import Album from './Album';

function HomePage() {
 
 

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
    {/* Navbar */}
    <div className="h-[100px] w-full">
      <Navebar id="fixed z-20" />
    </div>
      <HomeBanner/>
    {/* Cards Section */}
      <Album/>
   
    <HomePagecarts/>
    
    {/* Footer */}
   
  </div>
);
}

export default HomePage;
