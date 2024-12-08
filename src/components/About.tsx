const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="./Public/Assets/airyyridesoffice.jpg"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* <div className="absolute inset-0 bg-[#D1AB10]/10 rounded-lg backdrop-blur-[2px]" /> */}
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About <span className="text-[#D1AB10]">AiRYYRIDES</span>
            </h2>
            <p className="text-gray-300 text-lg">
            We go beyond just providing bikes, we're dedicated to creating unforgettable experiences. Our commitment to sustainable urban mobility fuels our mission to offer a diverse fleet of meticulously maintained bikes, ensuring that AiRYY ride is not only smooth and safe but also packed with adventure. 
            </p>
            <p className="text-gray-300 text-lg">
            Visit us at Bhawarkua, Indore, and embark on a journey with AiRYY that transforms your commute into a memorable adventure. Get ready to explore the city with ease, style, and a touch of excitement.
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
