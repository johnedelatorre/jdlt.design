import React, { useEffect } from 'react';
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

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
  caseStudyId,
}) => {
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

  // Get design info for Medable Translation Tool
  const getMedableDesignInfo = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';
    
    // Define specific titles and subtitles for Medable Translation Tool images
    const medableDesigns: { [key: string]: { title: string; subtitle: string } } = {
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
        subtitle: 'Study-specific content selection for clinical trial localization'
      },
      'select-non-assessment-study-strings.jpg': {
        title: 'Select Non Assessment Study Strings',
        subtitle: 'General study content selection excluding assessment-specific materials'
      },
      'select-assessments-modal.jpg': {
        title: 'Select Assessments Modal',
        subtitle: 'Modal interface for choosing specific clinical assessments for translation'
      },
      'select-assessments-modal-selected-states.jpg': {
        title: 'Select Assessments Modal Selected States',
        subtitle: 'Visual feedback showing selected assessments with clear state indicators'
      },
      'final-translation-package-request.jpg': {
        title: 'Final Translation Package Request',
        subtitle: 'Summary view before submitting translation request for processing'
      },
      'success-toast-message-translation-mgmt-confirm.jpg': {
        title: 'Success Toast Message Translation Mgmt Confirm',
        subtitle: 'Confirmation feedback indicating successful translation request submission'
      },
      'translation-ready-for-download.jpg': {
        title: 'Translation Ready For Download',
        subtitle: 'Completion state with download options for finalized translations'
      },
      'download-hover-menu.jpg': {
        title: 'Download Hover Menu',
        subtitle: 'Interactive menu showing available download formats and options'
      },
      'final-exported-json-files-architecture.png': {
        title: 'Final Exported Json Files Architecture',
        subtitle: 'Technical documentation showing JSON file structure and organization'
      },
      'final-exported-json-files-structure.png': {
        title: 'Final Exported Json Files Structure',
        subtitle: 'Detailed view of the standardized JSON export format for translations'
      }
    };

    if (medableDesigns[filename]) {
      return medableDesigns[filename];
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

  // Get title and subtitle based on case study
  const currentDesignInfo = caseStudyId === 'medable-translation-tool' 
    ? getMedableDesignInfo(images[currentIndex])
    : { title: getDesignName(images[currentIndex]), subtitle: '' };

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
                  <div className="flex-1 flex items-center justify-center mb-6 min-h-0">
                    <img
                      src={images[currentIndex]}
                      alt={`Design: ${currentDesignInfo.title}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>

                </div>
              </div>
              
              {/* Footer with counter */}
              <div className="bg-gray-50 -mx-4 -mb-4 px-4 py-3 flex-shrink-0 text-center border-t border-gray-200">
                <div className="text-sm text-gray-500 font-medium">
                  {currentIndex + 1} of {images.length}
                </div>
              </div>
            </div>
          </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ImageModal; 