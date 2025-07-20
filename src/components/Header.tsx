import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
import { navigationItems } from '../data/navigation';
import { scrollToCaseStudies } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
      return;
    }

    if (href === '/' && location.pathname === '/') {
      // Scroll to case studies section on homepage with perfect positioning
      scrollToCaseStudies();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          hasScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Name */}
            <Link 
              to="/" 
              className="font-serif text-xl lg:text-2xl font-semibold text-black hover:text-gray-700 transition-colors duration-200"
            >
              John Delatorre
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                if (item.external) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href, item.external)}
                      className="text-gray-700 hover:text-black font-medium transition-colors duration-200 flex items-center gap-2"
                      aria-label={item.label}
                    >
                      {item.label}
                      {item.icon === 'download' && (
                        <FontAwesomeIcon icon={faDownload} className="text-sm" />
                      )}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-black font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="text-xl" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <span className="font-serif text-xl font-semibold">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-black transition-colors duration-200"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>
            <nav className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => {
                if (item.external) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href, item.external)}
                      className="w-full text-left py-3 text-lg text-gray-700 hover:text-black font-medium transition-colors duration-200 flex items-center gap-3"
                      aria-label={item.label}
                    >
                      {item.label}
                      {item.icon === 'download' && (
                        <FontAwesomeIcon icon={faDownload} className="text-base" />
                      )}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 text-lg text-gray-700 hover:text-black font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header; 