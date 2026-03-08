import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faTimes, faExternalLinkAlt, faFolderOpen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';

const DESKTOP_BREAKPOINT = 768;
const SCROLL_TOP_THRESHOLD = 10;

const ProjectNavigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const [mobileTooltipFadedIn, setMobileTooltipFadedIn] = useState(false);
  const [desktopLabelFadedIn, setDesktopLabelFadedIn] = useState(false);
  const hasShownMobileTooltipRef = useRef(false);
  const mobileTooltipTimeoutRef = useRef<number | null>(null);
  const mobileTooltipRafRef = useRef<number | null>(null);
  const desktopLabelRafRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = (caseStudyId: string) => {
    const currentCaseStudyId = location.pathname.split('/case-study/')[1];
    
    if (currentCaseStudyId === caseStudyId) {
      // If clicking on the same case study, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to different case study
      navigate(`/case-study/${caseStudyId}`);
    }
    setIsOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open(personalInfo.contact.linkedin, '_blank');
  };

  // Scroll position (desktop: show label at top)
  useEffect(() => {
    const checkScroll = () => {
      setIsAtTop(window.scrollY < SCROLL_TOP_THRESHOLD);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Desktop vs mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Mobile: auto-show tooltip once on load (fade in, stay 2000ms, fade out)
  useEffect(() => {
    if (!isDesktop && !hasShownMobileTooltipRef.current) {
      setMobileTooltipFadedIn(false);
      setShowMobileTooltip(true);
      mobileTooltipTimeoutRef.current = window.setTimeout(() => {
        setShowMobileTooltip(false);
        hasShownMobileTooltipRef.current = true;
      }, 200 + 2000 + 300);
    }
    return () => {
      if (mobileTooltipTimeoutRef.current) {
        clearTimeout(mobileTooltipTimeoutRef.current);
      }
    };
  }, [isDesktop]);

  // Desktop at top: fade in label (same transition as hover)
  useEffect(() => {
    if (!(isDesktop && isAtTop && !isOpen)) {
      setDesktopLabelFadedIn(false);
      return;
    }
    if (desktopLabelRafRef.current) cancelAnimationFrame(desktopLabelRafRef.current);
    desktopLabelRafRef.current = requestAnimationFrame(() => {
      desktopLabelRafRef.current = requestAnimationFrame(() => {
        setDesktopLabelFadedIn(true);
        desktopLabelRafRef.current = null;
      });
    });
    return () => {
      if (desktopLabelRafRef.current) cancelAnimationFrame(desktopLabelRafRef.current);
    };
  }, [isDesktop, isAtTop, isOpen]);

  // Mobile: delay opacity-100 so fade-in transition runs (paint opacity-0 first)
  useEffect(() => {
    if (!showMobileTooltip) {
      setMobileTooltipFadedIn(false);
      return;
    }
    if (mobileTooltipRafRef.current) cancelAnimationFrame(mobileTooltipRafRef.current);
    mobileTooltipRafRef.current = requestAnimationFrame(() => {
      mobileTooltipRafRef.current = requestAnimationFrame(() => {
        setMobileTooltipFadedIn(true);
        mobileTooltipRafRef.current = null;
      });
    });
    return () => {
      if (mobileTooltipRafRef.current) cancelAnimationFrame(mobileTooltipRafRef.current);
    };
  }, [showMobileTooltip]);

  // Mobile: dismiss tooltip immediately on scroll or tap
  useEffect(() => {
    if (!isDesktop || !showMobileTooltip) return;
    const dismiss = () => {
      setShowMobileTooltip(false);
      hasShownMobileTooltipRef.current = true;
      if (mobileTooltipTimeoutRef.current) {
        clearTimeout(mobileTooltipTimeoutRef.current);
      }
    };
    const handleScroll = () => dismiss();
    const handleTouchStart = () => dismiss();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { once: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isDesktop, showMobileTooltip]);

  // Dismiss mobile tooltip when drawer opens
  useEffect(() => {
    if (isOpen && showMobileTooltip) {
      setShowMobileTooltip(false);
      hasShownMobileTooltipRef.current = true;
      if (mobileTooltipTimeoutRef.current) {
        clearTimeout(mobileTooltipTimeoutRef.current);
      }
    }
  }, [isOpen, showMobileTooltip]);

  // ESC key to close
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Manage body overflow when drawer is open/closed
  useEffect(() => {
    if (isOpen) {
      // Hide main page scrollbar when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore main page scrollbar when drawer is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrollbar when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);
  const tooltipLabel = (
    <div className="relative bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
      View Projects
      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent" />
    </div>
  );

  return (
    <>
      {/* Floating Action Button — single element on desktop to avoid twitch on scroll */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {/* Desktop when drawer closed: one control, transform transitions with scroll */}
        {isDesktop && !isOpen && (
          <button
            type="button"
            onClick={handleToggle}
            className={`
              group flex flex-row-reverse items-center gap-0 cursor-pointer bg-transparent border-0 p-0
              transition-transform duration-300 ease-out
              ${isAtTop ? 'scale-110 rotate-12' : 'scale-100 rotate-0 hover:scale-110 hover:rotate-12'}
            `}
            aria-label="View Projects"
          >
            <span className="flex w-14 h-14 flex-shrink-0 items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <FontAwesomeIcon icon={faTh} className="text-white text-lg" />
            </span>
            {/* Label: at top = fade in by state; scrolled = show on hover */}
            <span
              className={`
                mr-3 flex-shrink-0 pointer-events-none transition-opacity duration-300
                ${isAtTop
                  ? (desktopLabelFadedIn ? 'opacity-100' : 'opacity-0')
                  : 'opacity-0 group-hover:opacity-100'}
              `}
            >
              {tooltipLabel}
            </span>
          </button>
        )}

        {/* Desktop drawer open OR mobile: compact button */}
        {(isOpen || !isDesktop) && (
          <button
            onClick={handleToggle}
            className={`
              group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 
              hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg 
              hover:shadow-xl transition-all duration-300 transform
              ${isOpen ? 'rotate-180' : ''}
              ${!isOpen && !isDesktop && showMobileTooltip && mobileTooltipFadedIn ? 'scale-110 rotate-12' : ''}
              ${!isOpen && !isDesktop && (!showMobileTooltip || !mobileTooltipFadedIn) ? 'hover:scale-110 hover:rotate-12' : ''}
            `}
            aria-label="View Projects"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faTh} 
              className="text-white text-lg transition-transform duration-300" 
            />
            {/* Mobile only: auto-show tooltip */}
            {!isDesktop && !isOpen && (
              <div
                className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  showMobileTooltip && mobileTooltipFadedIn ? '!opacity-100' : ''
                }`}
              >
                {tooltipLabel}
              </div>
            )}
          </button>
        )}
      </div>

      {/* Slide-out Drawer */}
      <div className={`
        fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-40
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        border-l border-gray-200
      `}>
        <div className="flex flex-col h-full relative">
          {/* Close Button - Floating in top-right corner */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 shadow-sm border border-gray-200 bg-white"
            aria-label="Close Projects"
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-600 text-sm" />
          </button>

          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3 pr-12">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-sm">
                <FontAwesomeIcon icon={faFolderOpen} className="text-white text-sm" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">Portfolio Navigator</h3>
            </div>
          </div>

          {/* Projects Grid with Custom Scrollbar */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <FontAwesomeIcon icon={faLayerGroup} className="text-purple-600 text-base" />
              <h4 className="text-base font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Case Studies</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {caseStudies.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="group text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-gray-200 hover:border-blue-300"
                >
                  {/* Project Image */}
                  <div className="relative mb-3 overflow-hidden rounded-lg">
                    <img 
                      src={project.headerImage} 
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FontAwesomeIcon 
                        icon={faExternalLinkAlt} 
                        className="text-white text-sm drop-shadow-lg" 
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {project.client}
                      </span>
                      <span className="text-xs text-gray-500">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* LinkedIn Footer */}
          <div className="border-t border-gray-200 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <button
              onClick={handleLinkedInClick}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              View LinkedIn Profile
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectNavigator; 