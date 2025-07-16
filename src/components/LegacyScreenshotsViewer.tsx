import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faChartBar, faSearch, faClipboardList, faFolder } from '@fortawesome/free-solid-svg-icons';

interface LegacyScreenshotsViewerProps {
  onScreenshotClick: (screenshotId: string) => void;
}

const LegacyScreenshotsViewer: React.FC<LegacyScreenshotsViewerProps> = ({ onScreenshotClick }) => {
  const screenshots = [
    {
      id: 'legacy-dashboard',
      name: 'Legacy Dashboard Overview',
      description: 'Poor spacing, heavy contrast, overwhelming density',
      image: '/images/case-studies/relo-edge/legacy-dashboard-overview.png',
      alt: 'Legacy Dashboard Overview - Poor spacing, heavy contrast, overwhelming density',
      icon: faChartBar,
      iconColor: 'text-blue-600'
    },
    {
      id: 'legacy-insights',
      name: 'Legacy Automated Insights',
      description: 'Charts lacked logic, and insights were buried',
      image: '/images/case-studies/relo-edge/legacy-automated-insights.png',
      alt: 'Legacy Automated Insights - Charts lacked logic, and insights were buried',
      icon: faSearch,
      iconColor: 'text-purple-600'
    },
    {
      id: 'legacy-explorer',
      name: 'Legacy Data Explorer',
      description: 'Cluttered UI with dropdown stacking and no defaults',
      image: '/images/case-studies/relo-edge/legacy-data-explorer.png',
      alt: 'Legacy Data Explorer - Cluttered UI with dropdown stacking and no defaults',
      icon: faClipboardList,
      iconColor: 'text-orange-600'
    },
    {
      id: 'legacy-social',
      name: 'Legacy Social Media Views',
      description: 'Overwhelming view of social media posts without relevant data',
      image: '/images/case-studies/relo-edge/legacy-social-media-views.png',
      alt: 'Legacy Social Media Views - Overwhelming view of social media posts without relevant data',
      icon: faFolder,
      iconColor: 'text-green-600'
    }
  ];

  console.log('LegacyScreenshotsViewer rendering with', screenshots.length, 'screenshots');

  const handleScreenshotClick = (screenshotId: string) => {
    console.log('Screenshot clicked:', screenshotId);
    onScreenshotClick(screenshotId);
  };

  return (
    <div style={{marginTop: '2rem', padding: '2rem', background: 'linear-gradient(to bottom right, #fef7f0, #ffffff)', border: '1px solid #e5e7eb', borderRadius: '0.75rem'}}>
      <p style={{color: '#6b7280', textAlign: 'center', marginBottom: '2rem', fontSize: '0.875rem', fontStyle: 'italic'}}>
        Click on any screenshot to view detailed legacy platform interface
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto'}} className="legacy-screenshots-grid">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            style={{
              position: 'relative',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => handleScreenshotClick(screenshot.id)}
            onMouseEnter={(e) => {
              console.log('Hover enter:', screenshot.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              const overlay = e.currentTarget.querySelector('.screenshot-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              console.log('Hover leave:', screenshot.id);
              (e.currentTarget as HTMLElement).style.boxShadow = '';
              const overlay = e.currentTarget.querySelector('.screenshot-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <img
              src={screenshot.image}
              alt={screenshot.alt}
              style={{width: '100%', height: '180px', objectFit: 'cover', display: 'block'}}
              onLoad={() => console.log('Image loaded:', screenshot.id)}
              onError={(e) => {
                console.error('Image failed to load:', screenshot.id, screenshot.image);
                const img = e.target as HTMLImageElement;
                img.style.background = '#f3f4f6';
                img.style.display = 'flex';
                img.style.alignItems = 'center';
                img.style.justifyContent = 'center';
                img.style.color = '#9ca3af';
                img.alt = `Failed to load: ${screenshot.name}`;
              }}
            />
            <div 
              className="screenshot-overlay"
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
                <FontAwesomeIcon icon={screenshot.icon} className={screenshot.iconColor} style={{fontSize: '1.125rem', flexShrink: 0}} />
                <span style={{fontWeight: '600', color: '#111827', fontSize: '0.875rem'}}>{screenshot.name}</span>
              </div>
              <p style={{color: '#6b7280', fontSize: '0.75rem', lineHeight: '1.4', margin: 0}}>
                {screenshot.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyScreenshotsViewer; 