import React from 'react';
import { Instagram, Globe, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/shishirpnde",
      icon: Instagram,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Website",
      url: "https://www.shishirp.com.np",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Email",
      url: "mailto:be7ccrp@gmail.com",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="rainbow-text text-5xl md:text-6xl font-bold mb-16 animate-slide-in">
          Let's Connect
        </h2>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleSocialClick(link.url)}
              className={`glass-card p-6 min-w-64 hover:scale-110 transition-all duration-500 animate-fade-in-up ripple-effect`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 glow-effect`}>
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
              <p className="text-white/70 text-sm break-all">
                {link.url.replace('https://', '').replace('mailto:', '')}
              </p>
            </button>
          ))}
        </div>

        {/* Footer Message */}
        <div className="glass-card p-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <span className="text-white/80 text-lg">Made with passion and creativity</span>
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
          </div>
          <p className="text-white/60">
            © {new Date().getFullYear()} Shishir Pandey. All rights reserved.
          </p>
          <p className="text-white/40 mt-2">
            Thank you for visiting my digital portfolio. Let's create something amazing together!
          </p>
        </div>

        {/* Floating Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 glow-effect z-20"
        >
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;