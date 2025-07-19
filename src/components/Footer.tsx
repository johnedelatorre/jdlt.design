import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredTooltip, setHoveredTooltip] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: faEnvelope,
      href: undefined, // No href for email - just tooltip
      label: 'Email',
      tooltip: personalInfo.contact.email,
      isEmail: true
    },
    {
      icon: faLinkedin,
      href: personalInfo.contact.linkedin,
      label: 'LinkedIn',
      tooltip: 'LinkedIn Profile',
      isEmail: false
    }
  ];

  if (personalInfo.contact.instagram) {
    socialLinks.push({
      icon: faInstagram,
      href: personalInfo.contact.instagram,
      label: 'Instagram',
      tooltip: 'Instagram Profile',
      isEmail: false
    });
  }

  if (personalInfo.contact.github) {
    socialLinks.push({
      icon: faGithub,
      href: personalInfo.contact.github,
      label: 'GitHub',
      tooltip: 'GitHub Profile',
      isEmail: false
    });
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">
              {personalInfo.title} • Creating meaningful digital experiences
            </p>
          </div>

          {/* Right side - Social links and copyright */}
          <div className="text-center md:text-right">
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4 relative">
              {socialLinks.map((link, index) => {
                const isHovered = hoveredTooltip === index;
                
                if (link.isEmail) {
                  return (
                    <div key={index} className="relative">
                      <button
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label={link.label}
                        onMouseEnter={() => setHoveredTooltip(index)}
                        onMouseLeave={() => setHoveredTooltip(null)}
                      >
                        <FontAwesomeIcon icon={link.icon} className="text-sm" />
                      </button>
                      
                      {/* Elegant Custom Tooltip */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-lg shadow-xl border border-gray-200/50 whitespace-nowrap z-10 transition-all duration-200 ease-out ${
                        isHovered 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
                      }`}>
                        {link.tooltip}
                        {/* Elegant arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/95"></div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="relative">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label={link.label}
                        onMouseEnter={() => setHoveredTooltip(index)}
                        onMouseLeave={() => setHoveredTooltip(null)}
                      >
                        <FontAwesomeIcon icon={link.icon} className="text-sm" />
                      </a>
                      
                      {/* Elegant Custom Tooltip */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-lg shadow-xl border border-gray-200/50 whitespace-nowrap z-10 transition-all duration-200 ease-out ${
                        isHovered 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
                      }`}>
                        {link.tooltip}
                        {/* Elegant arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/95"></div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 