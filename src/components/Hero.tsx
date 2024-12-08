const Hero = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-[100px]">
      Elevate Your Ride with{' '}
        <span className="text-yellow-400">Airyyrides</span>
      </h1>
      <p className="text-gray-300 text-3xl font-bold md:text-4xl max-w-3xl mx-auto mb-4">Ride Return Repeat</p>
      <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
      Rediscover the joy of travel with our electric bikes—your perfect partner for eco-friendly, hassle-free rides. Whether you're commuting, exploring, or adventuring, our bikes are designed to take you farther with ease and style. Book now and experience the freedom of effortless mobility!
      </p>
      <a href="https://api.whatsapp.com/send/?phone=9826977757&text&type=phone_number&app_absent=0" className="bg-yellow-400 text-black px-8 cursor-pointer py-3 rounded-full text-lg font-semibold 
        hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
        Rent Now
      </a>
    </div>
  );
};

export default Hero;