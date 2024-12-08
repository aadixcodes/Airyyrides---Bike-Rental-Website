// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Whyairyyrides from './components/whyairyyrides';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ImageCarousel } from './components/ImageCarousel';
import { Benefits } from './components/Benefits';
// bg-gradient-to-b from-black to-[#090C14]
function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <About />
      <Whyairyyrides />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;