import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  caseStudyId?: string;
}

// PERFORMANCE FIX: Move outside component to prevent recreation on every render
const MEDABLE_DESIGNS: { [key: string]: { title: string; subtitle: string } } = {
  'user-flow-diagram.jpg': {
    title: 'User Flow Diagram',
    subtitle: 'Complete workflow mapping from translation request to final delivery'
  },
  'translations-list-view.jpg': {
    title: 'Translations List View',
    subtitle: 'Dashboard overview showing all active translation projects and their status'
  },
  'new-export-form-start.jpg': {
    title: 'New Export Form Start',
    subtitle: 'Initial step of the translation export process with clear navigation'
  },
  'select-export-by-assessment.jpg': {
    title: 'Select Export By Assessment',
    subtitle: 'Assessment-based content selection for targeted translation exports'
  },
  'select-additional-languages.jpg': {
    title: 'Select Additional Languages',
    subtitle: 'Multi-language selection interface for comprehensive localization'
  },
  'select-assessments-button.jpg': {
    title: 'Select Assessments Button',
    subtitle: 'Assessment selection interface with clear interaction patterns'
  },
  'additional-languages-modal.jpg': {
    title: 'Additional Languages Modal',
    subtitle: 'Modal interface for adding multiple target languages to translation projects'
  },
  'additional-languages-modal-languages-select.jpg': {
    title: 'Additional Languages Modal Languages Select',
    subtitle: 'Detailed language selection with regional variants and preferences'
  },
  'select-push-notifications.jpg': {
    title: 'Select Push Notifications',
    subtitle: 'Notification preferences for translation project updates and alerts'
  },
  'select-study-strings.jpg': {
    title: 'Select Study Strings',
    subtitle: 'Study-specific content selection for contextual translations'
  },
  'select-non-assessment-study-strings.jpg': {
    title: 'Select Non-Assessment Study Strings',
    subtitle: 'Non-assessment content selection for comprehensive study localization'
  },
  'select-assessments-modal.jpg': {
    title: 'Select Assessments Modal',
    subtitle: 'Assessment selection modal with filtering and search capabilities'
  },
  'select-assessments-modal-selected-states.jpg': {
    title: 'Select Assessments Modal Selected States',
    subtitle: 'Assessment modal showing selected items and confirmation states'
  },
  'final-translation-package-request.jpg': {
    title: 'Final Translation Package Request',
    subtitle: 'Comprehensive translation request summary with selected options'
  },
  'success-toast-message-translation-mgmt-confirm.jpg': {
    title: 'Success Toast Message Translation Management Confirm',
    subtitle: 'Success confirmation with clear feedback and next steps'
  },
  'translation-ready-for-download.jpg': {
    title: 'Translation Ready For Download',
    subtitle: 'Download-ready status with file management and access controls'
  },
  'download-hover-menu.jpg': {
    title: 'Download Hover Menu',
    subtitle: 'Contextual download options with file format selection'
  },
  'final-exported-json-files-architecture.png': {
    title: 'Final Exported JSON Files Architecture',
    subtitle: 'Technical architecture view of exported translation file structure'
  },
  'final-exported-json-files-structure.png': {
    title: 'Final Exported JSON Files Structure',
    subtitle: 'Detailed view of the standardized JSON export format for translations'
  }
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
  caseStudyId,
}) => {
  const [imageLoadStates, setImageLoadStates] = useState<{ [key: string]: 'loading' | 'loaded' | 'error' }>({});
  const preloadedImages = useRef<{ [key: string]: HTMLImageElement }>({});

  // PERFORMANCE BOOST: Preload adjacent images
  useEffect(() => {
    if (!isOpen || !images.length) return;

    const preloadImage = (src: string) => {
      if (preloadedImages.current[src]) return; // Already preloaded

      const img = new Image();
      setImageLoadStates(prev => ({ ...prev, [src]: 'loading' }));
      
      img.onload = () => {
        preloadedImages.current[src] = img;
        setImageLoadStates(prev => ({ ...prev, [src]: 'loaded' }));
      };
      
      img.onerror = () => {
        setImageLoadStates(prev => ({ ...prev, [src]: 'error' }));
      };
      
      img.src = src;
    };

    // Preload current image immediately
    preloadImage(images[currentIndex]);

    // Preload next and previous images in background
    const preloadAdjacent = () => {
      // Preload next 2 images
      for (let i = 1; i <= 2; i++) {
        const nextIndex = currentIndex + i;
        if (nextIndex < images.length) {
          preloadImage(images[nextIndex]);
        }
      }

      // Preload previous 2 images
      for (let i = 1; i <= 2; i++) {
        const prevIndex = currentIndex - i;
        if (prevIndex >= 0) {
          preloadImage(images[prevIndex]);
        }
      }
    };

    // Small delay to prioritize current image
    const timer = setTimeout(preloadAdjacent, 100);
    
    return () => clearTimeout(timer);
  }, [isOpen, currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  // PERFORMANCE OPTIMIZED: Get design info for Medable Translation Tool
  const getMedableDesignInfo = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';

    if (MEDABLE_DESIGNS[filename]) {
      return MEDABLE_DESIGNS[filename];
    }

    // Fallback for unrecognized files
    const nameWithoutExtension = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
    const formattedName = nameWithoutExtension
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    return {
      title: formattedName,
      subtitle: ''
    };
  };

  // Extract and format design name from filename (for non-Medable case studies)
  const getDesignName = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';
    const nameWithoutExtension = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
    
    // Replace hyphens and underscores with spaces, then convert to sentence case
    const formattedName = nameWithoutExtension
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    return formattedName;
  };

  // PERFORMANCE OPTIMIZED: Memoize design info calculation
  const currentDesignInfo = useMemo(() => {
    return caseStudyId === 'medable-translation-tool' 
      ? getMedableDesignInfo(images[currentIndex])
      : { title: getDesignName(images[currentIndex]), subtitle: '' };
  }, [caseStudyId, images, currentIndex]);

  const currentImageSrc = images[currentIndex];
  const currentImageState = imageLoadStates[currentImageSrc] || 'loading';

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 w-full max-w-7xl h-[90vh] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {/* Close button */}
            <div className="absolute right-0 top-0 pr-4 pt-4 z-20">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-white/90 hover:bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2 shadow-md"
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>

            {/* Left Arrow - Inside modal, left side */}
            <button
              type="button"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-105"
            >
              <span className="sr-only">Previous image</span>
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            </button>

            {/* Right Arrow - Inside modal, right side */}
            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-105"
            >
              <span className="sr-only">Next image</span>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>

            {/* Modal content */}
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-full flex flex-col">
              <div className="sm:flex sm:items-start h-full">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full h-full flex flex-col">
                  
                  {/* Title */}
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-2 flex-shrink-0">
                    {currentDesignInfo.title}
                  </DialogTitle>
                  
                  {/* Subtitle */}
                  {currentDesignInfo.subtitle && (
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-shrink-0">
                      {currentDesignInfo.subtitle}
                    </p>
                  )}
                  
                  {/* Image container - Fixed height container like legacy modal */}
                  <div className="flex-1 flex items-center justify-center min-h-0 relative">
                    {/* Loading spinner overlay */}
                    {currentImageState === 'loading' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                          <span className="text-gray-600 font-medium">Loading image...</span>
                        </div>
                      </div>
                    )}

                    {/* Main image */}
                    <img
                      src={currentImageSrc}
                      alt={`Design: ${currentDesignInfo.title}`}
                      className={`max-w-full max-h-full object-contain rounded-lg shadow-lg modal-image-border transition-opacity duration-300 ${
                        currentImageState === 'loaded' ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => {
                        setImageLoadStates(prev => ({ ...prev, [currentImageSrc]: 'loaded' }));
                      }}
                      onError={(e) => {
                        setImageLoadStates(prev => ({ ...prev, [currentImageSrc]: 'error' }));
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />

                    {/* Error state */}
                    {currentImageState === 'error' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-red-500 text-4xl mb-2">⚠️</div>
                          <span className="text-gray-600">Failed to load image</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            {/* Counter overlay - Bottom center */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} of {images.length}
              
              {/* Preload indicator for next images */}
              {images.length > 1 && (
                <span className="ml-2 text-xs opacity-75">
                  {currentIndex < images.length - 1 && imageLoadStates[images[currentIndex + 1]] === 'loaded' && '• Next ready'}
                </span>
              )}
            </div>
            </div>
          </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ImageModal; 