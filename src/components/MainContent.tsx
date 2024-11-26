import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MainContent() {
  return (
    <main>
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Expert Well Drilling & Installation Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Water Well Drilling',
                description: 'Providing new water well installations for homeowners.',
                image: 'https://images.unsplash.com/photo-1617392079938-61aae53e926c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Well & Pump Service',
                description: 'Maintenance, repair, and installation of well pumps',
                image: 'https://images.unsplash.com/photo-1635315619556-5802f22ce232?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Geothermal Well Drilling',
                description: 'Drilling for geothermal heating and cooling systems in homes.',
                image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=800'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="flex items-center space-x-2 text-yoakum-blue font-medium group">
                    <span>Read More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Wells Drilled" },
              { number: "25+", label: "Years Experience" },
              { number: "100%", label: "Licensed & Insured" },
              { number: "24/7", label: "Emergency Service" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-yoakum-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}