import React from 'react';
import ChatInterface from './ChatInterface';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013434775-f71db0030976?auto=format&fit=crop&q=80&w=2000"
          alt="Beautiful rural home with well-maintained lawn" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Helping You Secure a Reliable Water Source for Your Home
            </h1>
            <a 
              href="tel:8162558170"
              className="inline-flex items-center space-x-2 bg-yoakum-blue hover:bg-yoakum-blue/90 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors"
            >
              <Phone size={20} />
              <span>(816) 255-8170</span>
            </a>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <ChatInterface />
          </div>
        </div>
      </div>
    </header>
  );
}