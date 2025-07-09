import React, { useEffect } from 'react';
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

const PersonaModal: React.FC<PersonaModalProps> = ({
  isOpen,
  onClose,
  personas,
  currentIndex,
  onPrevious,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !personas.length) {
    return null;
  }

  const currentPersona = personas[currentIndex];

  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
            
            {/* Close button */}
            <div className="absolute right-0 top-0 pr-4 pt-4">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </button>
            </div>

            {/* Modal content */}
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                
                {/* Title */}
                <h3 className="text-base font-semibold leading-6 text-gray-900 mb-4" id="modal-title">
                  {currentPersona.name} Persona
                </h3>
                
                {/* Image container */}
                <div className="mt-2 flex justify-center">
                  <img
                    src={currentPersona.image}
                    alt={currentPersona.alt}
                    className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                  />
                </div>

                {/* Navigation */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50"
                    onClick={onPrevious}
                    disabled={currentIndex === 0}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                    Previous
                  </button>
                  
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} of {personas.length}
                  </span>
                  
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50"
                    onClick={onNext}
                    disabled={currentIndex === personas.length - 1}
                  >
                    Next
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaModal; 