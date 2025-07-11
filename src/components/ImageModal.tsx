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
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
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

  // Extract design name from filename
  const getDesignName = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || '';
    return filename.replace('.png', '').replace('.jpg', '').replace('.jpeg', '');
  };

  const currentDesignName = getDesignName(images[currentIndex]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <div className="relative flex items-center w-full max-w-7xl">
          {/* Left Arrow - Just outside modal container */}
          <button
            type="button"
            onClick={onPrevious}
            className="flex-shrink-0 mr-6 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-110"
          >
            <span className="sr-only">Previous image</span>
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </button>

          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 w-full max-w-6xl h-[90vh] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {/* Close button */}
            <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-white/90 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2"
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
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-4 flex-shrink-0">
                    {currentDesignName}
                  </DialogTitle>
                  
                  {/* Image container - Fixed height container */}
                  <div className="flex-1 flex items-center justify-center mb-6 min-h-0">
                    <img
                      src={images[currentIndex]}
                      alt={`Design: ${currentDesignName}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Footer with counter */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex-shrink-0 text-center">
              <div className="text-sm text-gray-500 font-medium">
                {currentIndex + 1} of {images.length}
              </div>
            </div>
          </DialogPanel>

          {/* Right Arrow - Just outside modal container */}
          <button
            type="button"
            onClick={onNext}
            className="flex-shrink-0 ml-6 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-110"
          >
            <span className="sr-only">Next image</span>
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageModal; 