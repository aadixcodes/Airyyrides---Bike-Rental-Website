import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80"
                alt="About AiRYYRIDES"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#D1AB10]/10 rounded-lg backdrop-blur-[2px]" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About <span className="text-[#D1AB10]">AiRYYRIDES</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Founded with a vision to revolutionize urban mobility, AiRYYRIDES brings you a premium bike rental experience that combines style, sustainability, and convenience.
            </p>
            <p className="text-gray-300 text-lg">
              Our fleet of meticulously maintained bikes caters to all riding styles and preferences, ensuring that every journey becomes a memorable experience.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-black/50 p-4 rounded-lg backdrop-blur-md border border-[#D1AB10]/20">
                <h3 className="text-[#D1AB10] text-xl font-semibold mb-2">500+</h3>
                <p className="text-gray-300">Premium Bikes</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg backdrop-blur-md border border-[#D1AB10]/20">
                <h3 className="text-[#D1AB10] text-xl font-semibold mb-2">10K+</h3>
                <p className="text-gray-300">Happy Riders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;