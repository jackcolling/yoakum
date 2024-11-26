import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img 
              src="/yoakumLogo.png" 
              alt="Yoakum Well Drilling & Pump Co." 
              className="h-16 w-auto"
            />
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yoakum-blue transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-yoakum-blue transition-colors">Services</a>
            <a href="#work" className="text-white hover:text-yoakum-blue transition-colors">Our Work</a>
            <a href="#reviews" className="text-white hover:text-yoakum-blue transition-colors">Reviews</a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/30 backdrop-blur-sm transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}