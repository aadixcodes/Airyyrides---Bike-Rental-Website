import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get in <span className="text-[#D1AB10]">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#D1AB10]" />
                <span className="ml-4 text-gray-300">airyyrides@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#D1AB10]" />
                <span className="ml-4 text-gray-300">+91 98269-77757</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#D1AB10]" />
                <span className="ml-4 text-gray-300">160/4, Bholaram Ustad Marg, Indrapuri Colony, Bhanwar Kuwa, Indore, Madhya Pradesh 452001</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-[#D1AB10]/20">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black/50 border border-[#D1AB10]/20 rounded-md text-white focus:outline-none focus:border-[#D1AB10]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black/50 border border-[#D1AB10]/20 rounded-md text-white focus:outline-none focus:border-[#D1AB10]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-black/50 border border-[#D1AB10]/20 rounded-md text-white focus:outline-none focus:border-[#D1AB10] h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-[#D1AB10] text-black px-6 py-3 rounded-md font-medium hover:bg-[#D1AB10]/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;