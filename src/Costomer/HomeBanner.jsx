


import Homeimages from '../assets/images/homeimages.png'; // Replace this with the path to your image

const HomeBanner = () => {
  return (
    <div
      className="relative  h-[700px] mx-auto w-screen flex  justify-center items-center  bg-cover bg-center"
      style={{
        backgroundImage: `url(${Homeimages})`,
        backgroundAttachment: "fixed",
        backgroundSize:"contain",
        // backgroundRepeat:"no-repeat"
      }}
    >
      <div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Spruce Up Your Space: Discover Fresh Greenery with Exclusive Deals
        </h3>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
};

export default HomeBanner;
