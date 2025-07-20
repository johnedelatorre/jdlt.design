import React, { useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface VisualDnaArtifact {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

interface VisualDnaModalProps {
  isOpen: boolean;
  onClose: () => void;
  artifacts: VisualDnaArtifact[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const VisualDnaModal = ({
  isOpen,
  onClose,
  artifacts,
  currentIndex,
  onPrevious,
  onNext,
}: VisualDnaModalProps) => {
  // Global keyboard event handler for better reliability
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        onPrevious();
      } else if (e.key === 'ArrowRight' && currentIndex < artifacts.length - 1) {
        e.preventDefault();
        onNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleGlobalKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isOpen, currentIndex, artifacts.length, onPrevious, onNext, onClose]);

  if (!artifacts.length) {
    return null;
  }

  const currentArtifact = artifacts[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      if (currentIndex > 0) {
        onPrevious();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      if (currentIndex < artifacts.length - 1) {
        onNext();
      }
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel 
            className="relative w-full max-w-6xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="text-white text-sm">
                  Visual DNA {currentIndex + 1} of {artifacts.length}
                </div>
              </div>
              
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  
                  {/* Title */}
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                    {currentArtifact.name}
                  </DialogTitle>
                  
                  {/* Image container */}
                  <div className="mt-2 flex justify-center mb-6">
                    <img
                      src={currentArtifact.image}
                      alt={currentArtifact.alt}
                      className="w-auto h-auto max-w-6xl max-h-[calc(100vh-200px)] object-contain"
                      onLoad={() => console.log('Visual DNA modal image loaded:', currentArtifact.id)}
                      onError={(e) => {
                        console.error('Visual DNA modal image error:', currentArtifact.id);
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Footer with navigation */}
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  onClick={onPrevious}
                  disabled={currentIndex === 0}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  ← Previous
                </button>
                
                <span className="text-sm text-gray-500">
                  {currentIndex + 1} of {artifacts.length}
                </span>
                
                <button
                  type="button"
                  onClick={onNext}
                  disabled={currentIndex === artifacts.length - 1}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Navigation arrows - positioned over the image */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              {/* Left Arrow - Inside modal left side */}
              <button
                type="button"
                onClick={onPrevious}
                disabled={currentIndex === 0}
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="sr-only">Previous artifact</span>
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
              </button>

              {/* Right Arrow - Inside modal right side */}
              <button
                type="button"
                onClick={onNext}
                disabled={currentIndex === artifacts.length - 1}
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="sr-only">Next artifact</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
              </button>
                         </div>
           </DialogPanel>
         </div>
       </div>
     </Dialog>
   );
 };

 export default VisualDnaModal; 