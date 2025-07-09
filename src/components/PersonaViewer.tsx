import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faChartBar, faBullseye, faHandshake } from '@fortawesome/free-solid-svg-icons';

interface PersonaViewerProps {
  onPersonaClick: (personaId: string) => void;
}

const PersonaViewer: React.FC<PersonaViewerProps> = ({ onPersonaClick }) => {
  const personas = [
    {
      id: 'agencies',
      name: 'Agencies',
      image: '/images/case-studies/relo-census/agencies-persona.png',
      alt: 'Agencies Persona - Agency Analyst needing speed and deck-ready insights',
      icon: faChartBar,
      iconColor: 'text-blue-600'
    },
    {
      id: 'brands',
      name: 'Brands',
      image: '/images/case-studies/relo-census/brands-persona.png',
      alt: 'Brands Persona - Brand Marketer needing ROI views and presentation-ready dashboards',
      icon: faBullseye,
      iconColor: 'text-purple-600'
    },
    {
      id: 'rightsholder',
      name: 'Rightsholder',
      image: '/images/case-studies/relo-census/rightsholder-persona.png',
      alt: 'Rightsholder Persona - Rightsholder needing real-time reporting to upsell partners',
      icon: faHandshake,
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="personas-viewer">
      <h4 className="personas-viewer-title">User Personas</h4>
      <p className="personas-viewer-subtitle">Click on any persona to view detailed insights</p>
      <div className="personas-grid">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="persona-card"
            onClick={() => onPersonaClick(persona.id)}
          >
            <img
              src={persona.image}
              alt={persona.alt}
              className="persona-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7cGVyc29uYS5uYW1lfSBQZXJzb25hPC90ZXh0Pjwvc3ZnPg==`;
              }}
            />
            <div className="persona-overlay">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className="persona-label">
              <FontAwesomeIcon icon={persona.icon} className={persona.iconColor} />
              <span>{persona.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaViewer; 