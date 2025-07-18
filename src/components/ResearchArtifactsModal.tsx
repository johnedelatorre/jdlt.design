import React, { useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ResearchArtifactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  artifacts: ArtifactData[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

interface ArtifactData {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

const ResearchArtifactsModal = ({
  isOpen,
  onClose,
  artifacts,
  currentIndex,
  onPrevious,
  onNext,
}: ResearchArtifactsModalProps) => {
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



  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50" onKeyDown={handleKeyDown}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-auto sm:max-w-7xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {/* Header with close button */}
            <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </button>
            </div>

            {/* Modal content */}
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
                      onLoad={() => console.log('Research artifacts modal image loaded:', currentArtifact.id)}
                      onError={(e) => {
                        console.error('Research artifacts modal image error:', currentArtifact.id);
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Footer with navigation */}
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              
              {/* Next Button */}
              <button
                type="button"
                onClick={onNext}
                disabled={currentIndex === artifacts.length - 1}
                className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-4 w-4" />
              </button>
              
              {/* Counter */}
              <div className="mt-3 inline-flex w-full justify-center items-center px-3 py-2 text-sm text-gray-500 sm:mt-0 sm:w-auto">
                {currentIndex + 1} of {artifacts.length}
              </div>
              
              {/* Previous Button */}
              <button
                type="button"
                onClick={onPrevious}
                disabled={currentIndex === 0}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed sm:mt-0 sm:w-auto"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-4 w-4" />
                Previous
              </button>
              
            </div>

            {/* Navigation arrows inside modal - positioned in white space */}
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
    </Dialog>
  );
};

export default ResearchArtifactsModal; 