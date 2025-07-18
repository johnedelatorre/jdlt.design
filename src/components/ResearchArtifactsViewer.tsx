import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUsers, faClipboardCheck, faEye as faObserve, faQuestion, faUser, faRoute, faChartLine, faLightbulb, faSitemap, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';

interface ResearchArtifactsViewerProps {
  onArtifactClick: (artifactId: string) => void;
}

const ResearchArtifactsViewer: React.FC<ResearchArtifactsViewerProps> = ({ onArtifactClick }) => {
  const artifacts = [
    {
      id: 'user-interview-questions-ctm',
      name: 'User Interview Questions - Clinical Trials Manager',
      description: 'Structured interview guide for CTMs covering workflow pain points and efficiency challenges',
      image: '/images/case-studies/medable-translation-tool/1-user-interview-questions-clinical-trials-manager.png',
      alt: 'User Interview Questions for Clinical Trials Managers - structured questions about translation workflows',
      icon: faUsers,
      iconColor: 'text-blue-600'
    },
    {
      id: 'user-interview-questions-cs',
      name: 'User Interview Questions - Customer Success Teams',
      description: 'Interview framework for CS teams focusing on support challenges and process gaps',
      image: '/images/case-studies/medable-translation-tool/2-user-interview-questions-customer-success-teams.png',
      alt: 'User Interview Questions for Customer Success Teams - questions about support processes',
      icon: faClipboardCheck,
      iconColor: 'text-green-600'
    },
    {
      id: 'observational-studies',
      name: 'Observational Studies',
      description: 'Documentation of live workflow observations and behavioral pattern analysis',
      image: '/images/case-studies/medable-translation-tool/3-observational-studies.png',
      alt: 'Observational Studies - documentation of workflow observations and behavioral patterns',
      icon: faObserve,
      iconColor: 'text-purple-600'
    },
    {
      id: 'assumptions-challenges',
      name: 'User Interview Assumptions and Challenges',
      description: 'Analysis of initial assumptions vs. discovered challenges from user interviews',
      image: '/images/case-studies/medable-translation-tool/4-user-interview-assumptions-and-challenges.png',
      alt: 'User Interview Assumptions and Challenges - comparison of initial assumptions with discoveries',
      icon: faQuestion,
      iconColor: 'text-orange-600'
    },
    {
      id: 'persona-ctm',
      name: 'Persona - Clinical Trials Manager',
      description: 'Detailed persona profile for CTM user type with goals, frustrations, and behaviors',
      image: '/images/case-studies/medable-translation-tool/5-persona-clinical-trials-manager.png',
      alt: 'Clinical Trials Manager Persona - detailed user profile with goals and frustrations',
      icon: faUser,
      iconColor: 'text-indigo-600'
    },
    {
      id: 'persona-cs',
      name: 'Persona - Customer Success Teams',
      description: 'Customer Success team persona highlighting support challenges and workflow needs',
      image: '/images/case-studies/medable-translation-tool/6-persona-customer-success-teams.png',
      alt: 'Customer Success Teams Persona - profile focusing on support challenges and needs',
      icon: faUser,
      iconColor: 'text-teal-600'
    },
    {
      id: 'journey-map-ctm',
      name: 'User Journey Map - Clinical Trials Manager',
      description: 'End-to-end journey mapping for CTM translation workflow including pain points',
      image: '/images/case-studies/medable-translation-tool/7-user-journey-map-clinical-trials-manager.png',
      alt: 'User Journey Map for Clinical Trials Manager - translation workflow with pain points',
      icon: faRoute,
      iconColor: 'text-pink-600'
    },
    {
      id: 'journey-map-cs',
      name: 'User Journey Map - Customer Success Teams',
      description: 'Journey mapping for CS support processes and intervention touchpoints',
      image: '/images/case-studies/medable-translation-tool/8-user-journey-map-customer-success-teams.png',
      alt: 'User Journey Map for Customer Success Teams - support processes and touchpoints',
      icon: faRoute,
      iconColor: 'text-amber-600'
    },
    {
      id: 'research-synthesis',
      name: 'Research Synthesis',
      description: 'Comprehensive synthesis of all research findings and key insights',
      image: '/images/case-studies/medable-translation-tool/9-research-synthesis.png',
      alt: 'Research Synthesis - comprehensive analysis of all research findings',
      icon: faChartLine,
      iconColor: 'text-red-600'
    },
    {
      id: 'key-insights',
      name: 'Key Insights',
      description: 'Critical insights distilled from research that informed design decisions',
      image: '/images/case-studies/medable-translation-tool/10-key-insights.png',
      alt: 'Key Insights - critical findings that informed design decisions',
      icon: faLightbulb,
      iconColor: 'text-yellow-600'
    },
    {
      id: 'design-pillars',
      name: 'Experience Design Pillars',
      description: 'Five core UX principles that guided all design and product decisions',
      image: '/images/case-studies/medable-translation-tool/11-experience-design-pillars.png',
      alt: 'Experience Design Pillars - core UX principles guiding design decisions',
      icon: faProjectDiagram,
      iconColor: 'text-emerald-600'
    },
    {
      id: 'solution-mapping',
      name: 'Solution Mapping',
      description: 'Strategic mapping of research insights to potential solution approaches',
      image: '/images/case-studies/medable-translation-tool/12-solution-mapping.png',
      alt: 'Solution Mapping - connecting research insights to solution approaches',
      icon: faSitemap,
      iconColor: 'text-violet-600'
    },
    {
      id: 'information-architecture',
      name: 'Information Architecture',
      description: 'Structured information architecture and system design foundation',
      image: '/images/case-studies/medable-translation-tool/13-information-architecture.png',
      alt: 'Information Architecture - structured system design and organization',
      icon: faCode,
      iconColor: 'text-slate-600'
    },
    {
      id: 'low-fidelity-prototype-data-table',
      name: 'Low-Fidelity Prototype - Data Table',
      description: 'Initial wireframe design for the translation data table interface showing layout and functionality',
      image: '/images/case-studies/medable-translation-tool/14-low-fidelity-prototype-data-table.png',
      alt: 'Low-fidelity prototype wireframe of the translation data table interface',
      icon: faEye,
      iconColor: 'text-blue-600'
    },
    {
      id: 'low-fidelity-prototype-export-form',
      name: 'Low-Fidelity Prototype - Export Form',
      description: 'Early wireframe design for the translation export form showing user workflow and form fields',
      image: '/images/case-studies/medable-translation-tool/15-low-fidelity-prototype-export-form.png',
      alt: 'Low-fidelity prototype wireframe of the translation export form interface',
      icon: faEye,
      iconColor: 'text-green-600'
    }
  ];

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