import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sanket Sharma",
      role: "Daily Commuter",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUmgFB2DIm67Ol_97Cb_ptX_oiikcK545btGX9ZniVfhzA=w75-h75-p-rp-mo-br100",
      content: "Airyy rides se bike rent kiya indore main easy process, kam daam aur lajawaab experience. Indore main bike rent chahiye toh airyy rides hi sahi simple sasta aur top notch service"
    },
    {
      name: "Isha Patil",
      role: "Weekend Explorer",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXcowtM4bBa1sVHxOY6RQ5LaltCzfOLs_FNF176yj92AmWZ=w60-h60-p-rp-mo-br100",
      content: "Indore Ghoomne ka plan ? Toh Airyy rides se bike rent karlo super quick, budget friendly aur full dhamaal!"
    },
    {
      name: "Anubhav Singh",
      role: "Fitness Enthusiast",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWlFmTmuY3xuEuL4cLfgX0a_EBxuUylmbNBcGsEu62j5kY=w75-h75-p-rp-mo-br100",
      content: "Best service among all the dealers available in indore. One of the best bikes. Great Experience."
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
          Don't just take our word for it hear from our satisfied riders who have experienced the joy of AiRYY Rides.
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