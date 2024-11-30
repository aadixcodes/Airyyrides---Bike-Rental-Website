import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: "AiRYYRIDES has transformed my daily commute. The bikes are always in perfect condition, and the service is exceptional."
    },
    {
      name: "Michael Chen",
      role: "Weekend Explorer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      content: "The variety of bikes available is impressive. Perfect for weekend adventures and exploring the city."
    },
    {
      name: "Emma Davis",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content: "High-quality bikes and fantastic customer service. AiRYYRIDES has become an essential part of my fitness routine."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#D1AB10]">Riders Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-[#D1AB10]/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D1AB10] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;