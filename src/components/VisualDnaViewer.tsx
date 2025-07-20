import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPalette, faFont, faTable, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

interface VisualDnaArtifact {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

interface VisualDnaViewerProps {
  onArtifactClick: (artifactId: string) => void;
  visualDnaArtifacts?: VisualDnaArtifact[];
}

const VisualDnaViewer: React.FC<VisualDnaViewerProps> = ({ onArtifactClick, visualDnaArtifacts = [] }) => {
  // Map artifacts with specific icons and colors for Visual DNA themes
  const artifacts = visualDnaArtifacts.length > 0 ? visualDnaArtifacts.map((artifact, index) => {
    const iconMap = [faPalette, faFont, faTable, faLayerGroup];
    const colorMap = ['text-purple-600', 'text-blue-600', 'text-green-600', 'text-indigo-600'];
    
    return {
      ...artifact,
      icon: iconMap[index] || faPalette,
      iconColor: colorMap[index] || 'text-gray-600'
    };
  }) : [];

  console.log('VisualDnaViewer rendering with', artifacts.length, 'artifacts');

  const handleArtifactClick = (artifactId: string) => {
    console.log('Visual DNA artifact clicked:', artifactId);
    onArtifactClick(artifactId);
  };

  return (
    <div className="mb-16">
      <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
        <h3 className="font-serif text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <FontAwesomeIcon icon={faPalette} className="text-purple-600" />
          Visual DNA: Themes, Components & Layouts
        </h3>
        
        <p className="text-gray-600 text-center mb-8 text-lg">
          Click on any design artifact to view the complete theme and component system documentation
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="group relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/20 hover:border-gray-300"
              onClick={() => handleArtifactClick(artifact.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={artifact.image}
                  alt={artifact.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoad={() => console.log('Visual DNA artifact image loaded:', artifact.id)}
                  onError={(e) => {
                    console.error('Visual DNA artifact image failed to load:', artifact.id, artifact.image);
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZhaWxlZCB0byBsb2FkPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={artifact.icon} className={`${artifact.iconColor} text-xl flex-shrink-0`} />
                  <h4 className="font-semibold text-gray-900 text-lg">{artifact.name}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {artifact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualDnaViewer; 