import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faCheckCircle,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactPage: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(prev => ({ ...prev, [type]: true }));
      
      // Reset the success message after 2 seconds
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactMethods = [
    {
      icon: faPhone,
      label: 'Phone',
      value: '+1 (703) 303-0684',
      copyText: '+17033030684',
      type: 'phone',
      clickable: true
    },
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'john.edelatorre@gmail.com',
      copyText: 'john.edelatorre@gmail.com',
      type: 'email',
      clickable: true
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/uesuxguy',
      href: 'https://www.linkedin.com/in/uesuxguy/',
      type: 'linkedin',
      clickable: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Contact Photo */}
            <div className="mb-12 flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-xl">
                <img
                  src="/images/contact/contactmephoto.png"
                  alt="John Delatorre Contact Photo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBmWT0iMjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOWVhM2E4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29udGFjdCBQaG90bzwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
            </div>

            {/* Drop Me A Line Section */}
            <div className="mb-12">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                Drop Me A Line
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Actively seeking an innovative product design role to contribute creativity and expertise to. 
                If you feel I would be a good fit for your team, drop me a line.
              </p>
            </div>

            {/* Status Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full border border-green-200">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                <span className="font-medium">Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
                <span className="font-medium">Based in New York, NY</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="max-w-lg mx-auto space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="relative">
                  {method.clickable ? (
                    <button
                      onClick={() => copyToClipboard(method.copyText!, method.type)}
                      className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group w-full text-left"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <FontAwesomeIcon icon={method.icon} className="text-lg" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-medium text-gray-900 mb-1">{method.label}</p>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <FontAwesomeIcon 
                          icon={copyStatus[method.type] ? faCheck : faCopy} 
                          className={`text-lg transition-colors duration-200 ${
                            copyStatus[method.type] ? 'text-green-500' : 'text-gray-400 group-hover:text-gray-600'
                          }`} 
                        />
                      </div>
                    </button>
                  ) : (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group w-full"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <FontAwesomeIcon icon={method.icon} className="text-lg" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-medium text-gray-900 mb-1">{method.label}</p>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </a>
                  )}
                  
                  {/* Success Message */}
                  {copyStatus[method.type] && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                      {method.label} copied to clipboard!
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Marketing Showcase Section */}
            <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl max-w-4xl mx-auto">
              {/* Background Design Image */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/images/case-studies/relo-census/Dashboard Builder View.png"
                  alt="Design Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Marketing Copy */}
                  <div className="text-white">
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                      Ready to Transform Your Product?
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      From complex data dashboards to intuitive user experiences—I turn ambitious product visions into reality through strategic design and seamless execution.
                    </p>
                    
                    {/* Key Value Props */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">15+ years of product design expertise</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Full-stack design and development skills</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">AI-enhanced design workflows</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Visual Stats */}
                  <div className="text-center lg:text-right">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">50+</div>
                        <div className="text-gray-300 text-sm">Products Designed</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">15+</div>
                        <div className="text-gray-300 text-sm">Years Experience</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-gray-300 text-sm">Client Satisfaction</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">NYC</div>
                        <div className="text-gray-300 text-sm">Based & Available</div>
                      </div>
                    </div>
                    
                    {/* Subtle CTA */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-400 text-sm italic">
                        "Design is not just what it looks like—design is how it works." - Steve Jobs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 