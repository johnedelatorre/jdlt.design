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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || personas.length === 0) return null;

  const currentPersona = personas[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`persona-modal-backdrop ${isOpen ? 'persona-modal-open' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="persona-modal-container">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="persona-modal-close"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Navigation Arrows */}
        {personas.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="persona-modal-nav persona-modal-nav-left"
              aria-label="Previous persona"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <button
              onClick={onNext}
              className="persona-modal-nav persona-modal-nav-right"
              aria-label="Next persona"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        {/* Image Container */}
        <div className="persona-modal-image-container">
          <img
            src={currentPersona.image}
            alt={currentPersona.alt}
            className="persona-modal-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7Y3VycmVudFBlcnNvbmEubmFtZX0gUGVyc29uYTwvdGV4dD48L3N2Zz4=`;
            }}
          />
        </div>

        {/* Persona Info */}
        <div className="persona-modal-info">
          <h3 className="persona-modal-title">{currentPersona.name} Persona</h3>
          {personas.length > 1 && (
            <p className="persona-modal-counter">
              {currentIndex + 1} of {personas.length}
            </p>
          )}
        </div>

        {/* Keyboard Hint */}
        <div className="persona-modal-hint">
          <p>Use ← → arrow keys to navigate • Press ESC to close</p>
        </div>
      </div>
    </div>
  );
};

export default PersonaModal; 