import React, { useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight, faChartBar, faSearch, faClipboardList, faFolder } from '@fortawesome/free-solid-svg-icons';

interface LegacyScreenshotsModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotData[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

interface ScreenshotData {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

const LegacyScreenshotsModal = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onPrevious,
  onNext,
}: LegacyScreenshotsModalProps) => {
  if (!screenshots.length) {
    return null;
  }

  const currentScreenshot = screenshots[currentIndex];

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
      if (currentIndex < screenshots.length - 1) {
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
      } else if (e.key === 'ArrowRight' && currentIndex < screenshots.length - 1) {
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
  }, [isOpen, currentIndex, screenshots.length, onPrevious, onNext, onClose]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50" onKeyDown={handleKeyDown}>
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
            <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-white/90 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 p-2"
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-full flex flex-col">
              <div className="sm:flex sm:items-start h-full">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full h-full flex flex-col">
                  
                  {/* Title */}
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-2 flex-shrink-0">
                    {currentScreenshot.name}
                  </DialogTitle>
                  
                  {/* Description with icon */}
                  <div className="flex items-start gap-3 mb-4 flex-shrink-0">
                    <div className="mt-0.5">
                      {currentScreenshot.id === 'legacy-dashboard' && (
                        <FontAwesomeIcon icon={faChartBar} className="text-blue-600 text-lg" />
                      )}
                      {currentScreenshot.id === 'legacy-insights' && (
                        <FontAwesomeIcon icon={faSearch} className="text-purple-600 text-lg" />
                      )}
                      {currentScreenshot.id === 'legacy-explorer' && (
                        <FontAwesomeIcon icon={faClipboardList} className="text-orange-600 text-lg" />
                      )}
                      {currentScreenshot.id === 'legacy-social' && (
                        <FontAwesomeIcon icon={faFolder} className="text-green-600 text-lg" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong>{currentScreenshot.name}</strong> – {currentScreenshot.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Image container - Fixed height container */}
                  <div className="flex-1 flex items-center justify-center mb-6 min-h-0">
                    <img
                      src={currentScreenshot.image}
                      alt={currentScreenshot.alt}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onLoad={() => console.log('Legacy screenshots modal image loaded:', currentScreenshot.id)}
                      onError={(e) => {
                        console.error('Legacy screenshots modal image error:', currentScreenshot.id);
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
                disabled={currentIndex === screenshots.length - 1}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-4 w-4" />
              </button>
              
              {/* Counter */}
              <div className="mt-3 inline-flex w-full justify-center items-center px-3 py-2 text-sm text-gray-500 sm:mt-0 sm:w-auto">
                {currentIndex + 1} of {screenshots.length}
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
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="sr-only">Previous screenshot</span>
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
              </button>

              {/* Right Arrow - Inside modal right side */}
              <button
                type="button"
                onClick={onNext}
                disabled={currentIndex === screenshots.length - 1}
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="sr-only">Next screenshot</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
              </button>
            </div>
          </DialogPanel>
      </div>
    </Dialog>
  );
};

export default LegacyScreenshotsModal; 