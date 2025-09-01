import React, { useState, useEffect } from 'react';
import { Star, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [wordsVisible, setWordsVisible] = useState<number>(0);

  const description = "Passionate explorer of knowledge and dedicated professional with expertise in financial management, audit processes, and continuous learning. Welcome to my digital journey where creativity meets professionalism.".split(' ');

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (textVisible) {
      const interval = setInterval(() => {
        setWordsVisible(prev => {
          if (prev < description.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [textVisible, description.length]);

  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Animated Logo */}
      <div className="logo-container mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center animate-bounce-slow glow-effect">
          <Star className="w-12 h-12 text-white animate-spin-slow" />
        </div>
      </div>

      {/* Profile Picture */}
      <div className="profile-container mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-rainbow animate-float">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
            alt="Shishir Pandey"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="rainbow-text text-6xl md:text-8xl font-bold text-center mb-4 animate-3d-appear">
        Shishir Pandey
      </h1>

      {/* Welcome Message */}
      <h2 className="text-2xl md:text-3xl text-white/80 text-center mb-6 animate-fade-in-up">
        Thanks for visiting
      </h2>

      {/* Animated Description */}
      <div className="max-w-4xl text-center mb-12">
        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
          {description.slice(0, wordsVisible).map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2 animate-word-appear"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-yellow-400 animate-pulse-glow" />
        <Sparkles className="absolute top-1/3 right-1/4 w-4 h-4 text-pink-400 animate-pulse-glow animation-delay-1000" />
        <Sparkles className="absolute bottom-1/3 left-1/3 w-5 h-5 text-blue-400 animate-pulse-glow animation-delay-2000" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;