import React from 'react';
import { Shield, Clock, MapPin, Bike } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#D1AB10]" />,
      title: "Premium Safety",
      description: "All bikes are regularly maintained and equipped with safety features"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#D1AB10]" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your riding needs"
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#D1AB10]" />,
      title: "Multiple Locations",
      description: "Convenient pickup and drop-off points across the city"
    },
    {
      icon: <Bike className="w-8 h-8 text-[#D1AB10]" />,
      title: "Diverse Fleet",
      description: "Choose from a wide range of premium bikes for any occasion"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#D1AB10]">AiRYYRIDES</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of convenience, safety, and style with our premium bike rental service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-[#D1AB10]/20 transform hover:scale-105 transition-all"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;