
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
      <HomeBanner />
    {/* Cards Section */}
      <Album/>
   <div className="h-[2700px] relative bottom-96 ">
    <HomePagecarts />
    </div>
    {/* Footer */}
   
  </div>
);
}

export default HomePage;
