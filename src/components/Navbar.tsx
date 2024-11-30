import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bike className="h-8 w-8 text-[#D1AB10]" />
            <span className="ml-2 text-xl font-bold text-white">AiRYYRIDES</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['About', 'Services', 'Benefits', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#D1AB10] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#D1AB10] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D1AB10]/90 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          {['About', 'Services', 'Benefits', 'Testimonials'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#D1AB10] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="w-full text-center bg-[#D1AB10] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D1AB10]/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;