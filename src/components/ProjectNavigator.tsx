import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faTimes, faExternalLinkAlt, faFolderOpen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';

const ProjectNavigator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg 
            hover:shadow-xl transition-all duration-300 transform hover:scale-110
            ${isOpen ? 'rotate-180' : 'hover:rotate-12'}
          `}
          aria-label="View Projects"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faTh} 
            className="text-white text-lg transition-transform duration-300" 
          />
          
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                View Projects
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </div>
            </div>
          )}
        </button>
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
              <FontAwesomeIcon icon={faLayerGroup} className="text-purple-600 text-sm" />
              <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Case Studies</h4>
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