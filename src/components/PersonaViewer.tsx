import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faChartBar, faBullseye, faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons';

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

  console.log('PersonaViewer rendering with', personas.length, 'personas');

  const handlePersonaClick = (personaId: string) => {
    console.log('Persona clicked:', personaId);
    onPersonaClick(personaId);
  };

  return (
    <div style={{marginTop: '4rem', padding: '2rem', background: 'linear-gradient(to bottom right, #f9fafb, #ffffff)', border: '1px solid #e5e7eb', borderRadius: '0.75rem'}}>
      <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', fontFamily: 'serif', textAlign: 'center', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem'}}>
        <FontAwesomeIcon icon={faUsers} style={{color: '#059669', fontSize: '1.25rem'}} />
        User Personas
      </h4>
      <p style={{color: '#6b7280', textAlign: 'center', marginBottom: '2rem'}}>Click on any persona to view detailed insights</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
        {personas.map((persona) => (
          <div
            key={persona.id}
            style={{
              position: 'relative',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => handlePersonaClick(persona.id)}
            onMouseEnter={(e) => {
              console.log('Hover enter:', persona.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              const overlay = e.currentTarget.querySelector('.test-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              console.log('Hover leave:', persona.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '';
              const overlay = e.currentTarget.querySelector('.test-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <img
              src={persona.image}
              alt={persona.alt}
              style={{width: '100%', height: 'auto', objectFit: 'cover', display: 'block'}}
              onLoad={() => console.log('Image loaded:', persona.id)}
              onError={(e) => {
                console.log('Image failed to load:', persona.id);
                (e.target as HTMLImageElement).src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7cGVyc29uYS5uYW1lfSBQZXJzb25hPC90ZXh0Pjwvc3ZnPg==`;
              }}
            />
            <div 
              className="test-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 2,
              }}
            >
              <FontAwesomeIcon icon={faEye} style={{color: 'white', fontSize: '2rem'}} />
            </div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(4px)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 3,
            }}>
              <FontAwesomeIcon icon={persona.icon} className={persona.iconColor} style={{fontSize: '1.125rem', flexShrink: 0}} />
              <span style={{fontWeight: '500', color: '#111827'}}>{persona.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaViewer; 