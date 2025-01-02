
import Navebar from '../Combonents/Navebar';

import Footer from '../Combonents/Footer';

import HomePagecarts from './HomePagecarts';

import HomeBanner from './HomeBanner';
import Album from './Album';
function HomePage() {
 
 

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
    {/* Navbar */}
    <div className="h-[100px] w-full">
      <Navebar />
    </div>
      <HomeBanner/>
    {/* Cards Section */}
      <Album/>
   
    <HomePagecarts/>

    {/* Footer */}
    <Footer />
  </div>
);
}

export default HomePage;
