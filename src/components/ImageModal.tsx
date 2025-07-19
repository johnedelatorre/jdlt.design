import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Dialog, DialogBackdrop, DialogTitle } from '@headlessui/react';
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
        className="fixed inset-0 bg-black/90 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      {/* Full-screen modal container */}
      <div className="fixed inset-0 z-10">
        
        {/* Top overlay - Only close button */}
        <div className="absolute top-0 right-0 z-20 p-6">
          <button
            type="button"
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center"
          >
            <span className="sr-only">Close</span>
            <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
          </button>
        </div>

        {/* Main image container - Full viewport height */}
        <div className="h-screen w-screen flex items-center justify-center relative">
          {/* Loading spinner overlay */}
          {currentImageState === 'loading' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="text-white font-medium">Loading image...</span>
              </div>
            </div>
          )}

          {/* Main image - Fit to full viewport height */}
          <img
            src={currentImageSrc}
            alt={`Design: ${currentDesignInfo.title}`}
            className={`max-h-screen max-w-screen object-contain transition-opacity duration-300 ${
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-red-400 text-4xl mb-2">⚠️</div>
                <span className="text-white">Failed to load image</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation arrows - Fixed to viewport center, not image center */}
        <button
          type="button"
          onClick={onPrevious}
          className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <span className="sr-only">Previous image</span>
          <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={onNext}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <span className="sr-only">Next image</span>
          <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
        </button>

        {/* Bottom overlay - Title, subtitle, and counter */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
          <div className="text-center space-y-3">
            {/* Title and subtitle */}
            <div className="space-y-2">
              <DialogTitle as="h2" className="text-2xl font-semibold text-white drop-shadow-lg">
                {currentDesignInfo.title}
              </DialogTitle>
              {currentDesignInfo.subtitle && (
                <p className="text-gray-200 text-base leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                  {currentDesignInfo.subtitle}
                </p>
              )}
            </div>
            
            {/* Counter */}
            <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
              {currentIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageModal; 