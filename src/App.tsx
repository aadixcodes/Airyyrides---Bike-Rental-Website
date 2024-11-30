// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ImageCarousel } from './components/ImageCarousel';

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-[#090C14] min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <About />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;