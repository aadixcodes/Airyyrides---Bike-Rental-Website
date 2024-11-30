// import React from 'react';
import { ImageCarousel } from "./ImageCarousel";

const Hero = () => {
  return (
    // <div className="relative h-screen">
    //   <div 
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //     style={{
    //       backgroundImage: 'url("https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80")',
    //     }}
    //   >
    //     <div className="absolute inset-0 bg-black/50" />
    //   </div>
      
    //   <div className="relative h-full flex items-center justify-center">
    //     <div className="text-center px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
    //         Experience the Future of
    //         <span className="text-[#D1AB10]"> Urban Mobility</span>
    //       </h1>
    //       <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
    //         Premium bikes for your journey. Ride in style, comfort, and convenience with AiRYYRIDES.
    //       </p>
    //       <button className="bg-[#D1AB10] text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-[#D1AB10]/90 transition-all transform hover:scale-105">
    //         Rent Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-[80px]">
        Experience the Future of{' '}
        <span className="text-yellow-400">Urban Mobility</span>
      </h1>
      <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
        Premium bikes for your journey. Ride in style, comfort, and convenience with AiRYYRIDES.
      </p>
      <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold 
        hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
        Rent Now
      </button>
    </div>
  );
};

export default Hero;

// import React from 'react';

// export function Hero() {
//   return (
//     <div className="text-center py-20">
//       <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//         Experience the Future of{' '}
//         <span className="text-yellow-400">Urban Mobility</span>
//       </h1>
//       <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
//         Premium bikes for your journey. Ride in style, comfort, and convenience with AiRYYRIDES.
//       </p>
//       <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold 
//         hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
//         Rent Now
//       </button>
//     </div>
//   );
// }