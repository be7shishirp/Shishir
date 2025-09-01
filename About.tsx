import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { calculateNepaliAge } from '../utils/nepaliDate';

const About: React.FC = () => {
  const age = calculateNepaliAge();

  const locations = [
    {
      name: "Birth Place: Palpa, Tansen, Syangja",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
      coordinates: "27.8688,83.5583"
    },
    {
      name: "Home Town: Kaligandaki, Harmichour, Gulmi",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      coordinates: "28.0938,83.2054"
    },
    {
      name: "Current Location: Butwal",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      coordinates: "27.7000,83.4500"
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="rainbow-text text-5xl md:text-6xl font-bold text-center mb-16 animate-slide-in">
          About Me
        </h2>

        {/* Personal Information Card */}
        <div className="glass-card p-8 mb-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="rainbow-text text-3xl font-bold mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Date of Birth</p>
                    <p className="text-white/70">2061-07-07 BS / 2004-10-23 AD</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">Current Age</p>
                    <p className="text-white/70 font-mono text-lg">
                      {age.years} years, {age.months} months, {age.days} days
                    </p>
                    <p className="text-white/50 text-sm">
                      {age.hours} hours, {age.minutes} minutes, {age.seconds} seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Professional"
                className="w-full h-64 object-cover rounded-lg shadow-xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <h3 className="rainbow-text text-4xl font-bold text-center mb-12">My Journey</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">{location.name}</h4>
                  <a 
                    href={`https://www.google.com/maps?q=${location.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;