
import Navebar from '../Combonents/Navebar';

import Footer from '../Combonents/Footer';

import HomePagecarts from './HomePagecarts';

import HomeBanner from './HomeBanner';
import Aboutme from '../Admin/Aboutme';
import Album from './Album';
import ContactUS from '../Admin/ContactUS';
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
    <Footer />
  </div>
);
}

export default HomePage;
