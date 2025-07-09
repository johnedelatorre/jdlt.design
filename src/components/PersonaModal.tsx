import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface PersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
  personas: PersonaData[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

interface PersonaData {
  id: string;
  name: string;
  image: string;
  alt: string;
}

const PersonaModal = ({
  isOpen,
  onClose,
  personas,
  currentIndex,
  onPrevious,
  onNext,
}: PersonaModalProps) => {
  if (!personas.length) {
    return null;
  }

  const currentPersona = personas[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50" onKeyDown={handleKeyDown}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                    {currentPersona.name} Persona
                  </DialogTitle>
                  
                  {/* Image container */}
                  <div className="mt-2 flex justify-center mb-6">
                    <img
                      src={currentPersona.image}
                      alt={currentPersona.alt}
                      className="w-auto h-auto max-w-6xl max-h-[calc(100vh-200px)] object-contain rounded-lg shadow-lg"
                      onLoad={() => console.log('Headless UI modal image loaded:', currentPersona.id)}
                      onError={() => console.log('Headless UI modal image error:', currentPersona.id)}
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
                disabled={currentIndex === personas.length - 1}
                className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-4 w-4" />
              </button>
              
              {/* Counter */}
              <div className="mt-3 inline-flex w-full justify-center items-center px-3 py-2 text-sm text-gray-500 sm:mt-0 sm:w-auto">
                {currentIndex + 1} of {personas.length}
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PersonaModal; 