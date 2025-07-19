import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUsers, faClipboardCheck, faEye as faObserve, faQuestion, faUser, faRoute, faChartLine, faLightbulb, faSitemap, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';
import type { ResearchArtifact } from '../types';

interface ResearchArtifactsViewerProps {
  onArtifactClick: (artifactId: string) => void;
  // Add researchArtifacts prop to receive data from parent
  researchArtifacts?: ResearchArtifact[];
}

const ResearchArtifactsViewer: React.FC<ResearchArtifactsViewerProps> = ({ onArtifactClick, researchArtifacts = [] }) => {
  // Use provided artifacts or fallback to empty array
  const artifacts = researchArtifacts.length > 0 ? researchArtifacts.map((artifact, index) => ({
    ...artifact,
    icon: [faUsers, faClipboardCheck, faObserve, faQuestion, faUser, faUser, faRoute, faRoute, faChartLine, faLightbulb, faLightbulb, faSitemap, faProjectDiagram, faCode, faCode][index] || faEye,
    iconColor: ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600', 'text-red-600', 'text-indigo-600', 'text-cyan-600', 'text-teal-600', 'text-amber-600', 'text-emerald-600', 'text-pink-600', 'text-violet-600', 'text-lime-600', 'text-sky-600', 'text-rose-600'][index] || 'text-gray-600'
  })) : [];

  console.log('ResearchArtifactsViewer rendering with', artifacts.length, 'artifacts');

  const handleArtifactClick = (artifactId: string) => {
    console.log('Research artifact clicked:', artifactId);
    onArtifactClick(artifactId);
  };

  return (
    <div style={{marginTop: '2rem', padding: '2rem', background: 'linear-gradient(to bottom right, #f8fafc, #ffffff)', border: '1px solid #e5e7eb', borderRadius: '0.75rem'}}>
      <p style={{color: '#6b7280', textAlign: 'center', marginBottom: '2rem', fontSize: '0.875rem', fontStyle: 'italic'}}>
        Click on any research artifact to view detailed documentation and insights
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto'}} className="research-artifacts-grid">
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            style={{
              position: 'relative',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => handleArtifactClick(artifact.id)}
            onMouseEnter={(e) => {
              console.log('Hover enter:', artifact.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              const overlay = e.currentTarget.querySelector('.artifact-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              console.log('Hover leave:', artifact.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '';
              const overlay = e.currentTarget.querySelector('.artifact-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <img
              src={artifact.image}
              alt={artifact.alt}
              style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}}
              onLoad={() => console.log('Research artifact image loaded:', artifact.id)}
              onError={(e) => {
                console.error('Research artifact image failed to load:', artifact.id, artifact.image);
                const img = e.target as HTMLImageElement;
                img.style.background = '#f3f4f6';
                img.style.display = 'flex';
                img.style.alignItems = 'center';
                img.style.justifyContent = 'center';
                img.style.color = '#9ca3af';
                img.alt = `Failed to load: ${artifact.name}`;
              }}
            />
            <div 
              className="artifact-overlay"
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
              zIndex: 3,
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem'}}>
                <FontAwesomeIcon icon={artifact.icon} className={artifact.iconColor} style={{fontSize: '1.125rem', flexShrink: 0}} />
                <span style={{fontWeight: '600', color: '#111827', fontSize: '0.875rem'}}>{artifact.name}</span>
              </div>
              <p style={{color: '#6b7280', fontSize: '0.75rem', lineHeight: '1.4', margin: 0}}>
                {artifact.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchArtifactsViewer; 