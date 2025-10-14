import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faEye, faFileAlt, faExclamationTriangle, faTasks, faCogs, faTrophy, faPalette, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { caseStudies } from '../data/caseStudies';
import ImageModal from '../components/ImageModal';
import PersonaModal from '../components/PersonaModal';
import PersonaViewer from '../components/PersonaViewer';
import LegacyScreenshotsModal from '../components/LegacyScreenshotsModal';
import LegacyScreenshotsViewer from '../components/LegacyScreenshotsViewer';
import ResearchArtifactsModal from '../components/ResearchArtifactsModal';
import ResearchArtifactsViewer from '../components/ResearchArtifactsViewer';
import VisualDnaModal from '../components/VisualDnaModal';
import VisualDnaViewer from '../components/VisualDnaViewer';


const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(0);
  const [isLegacyScreenshotsModalOpen, setIsLegacyScreenshotsModalOpen] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [isResearchArtifactsModalOpen, setIsResearchArtifactsModalOpen] = useState(false);
  const [currentArtifactIndex, setCurrentArtifactIndex] = useState(0);
  const [isVisualDnaModalOpen, setIsVisualDnaModalOpen] = useState(false);
  const [currentVisualDnaIndex, setCurrentVisualDnaIndex] = useState(0);
  const [isWireframeModalOpen, setIsWireframeModalOpen] = useState(false);
  const [currentWireframeIndex, setCurrentWireframeIndex] = useState(0);
  const [isComponentModalOpen, setIsComponentModalOpen] = useState(false);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const caseStudy = caseStudies.find((cs) => cs.id === id);
  const currentIndex = caseStudies.findIndex((cs) => cs.id === id);
  const previousCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  // Preload images for better performance and eliminate hover lag
  useEffect(() => {
    if (caseStudy && caseStudy.images && caseStudy.images.length > 0) {
      caseStudy.images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    }
  }, [caseStudy]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const previousImage = useCallback(() => {
    if (!caseStudy) return;
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : caseStudy.images.length - 1));
  }, [caseStudy]);

  const nextImage = useCallback(() => {
    if (!caseStudy) return;
    setCurrentImageIndex((prev) => (prev < caseStudy.images.length - 1 ? prev + 1 : 0));
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Persona data for Relo Census case study
  const personas = [
    {
      id: 'agencies',
      name: 'Agencies',
      image: '/images/case-studies/relo-census/agencies-persona.png',
      alt: 'Agencies Persona - Agency Analyst needing speed and deck-ready insights'
    },
    {
      id: 'brands',
      name: 'Brands',
      image: '/images/case-studies/relo-census/brands-persona.png',
      alt: 'Brands Persona - Brand Marketer needing ROI views and presentation-ready dashboards'
    },
    {
      id: 'rightsholder',
      name: 'Rightsholder',
      image: '/images/case-studies/relo-census/rightsholder-persona.png',
      alt: 'Rightsholder Persona - Rightsholder needing real-time reporting to upsell partners'
    }
  ];

  // Persona modal handlers
  const openPersonaModal = (personaId: string) => {
    console.log('openPersonaModal called with:', personaId);
    const index = personas.findIndex(p => p.id === personaId);
    console.log('Found persona index:', index);
    if (index !== -1) {
      setCurrentPersonaIndex(index);
      setIsPersonaModalOpen(true);
      console.log('Modal should be opening');
    }
  };

  const closePersonaModal = () => {
    setIsPersonaModalOpen(false);
  };

  const previousPersona = () => {
    setCurrentPersonaIndex((prev) => (prev > 0 ? prev - 1 : personas.length - 1));
  };

  const nextPersona = () => {
    setCurrentPersonaIndex((prev) => (prev < personas.length - 1 ? prev + 1 : 0));
  };

  // Legacy screenshots data for Relo Edge case study
  const legacyScreenshots = [
    {
      id: 'legacy-dashboard',
      name: 'Legacy Dashboard Overview',
      description: 'Poor spacing, heavy contrast, overwhelming density',
      image: '/images/case-studies/relo-edge/legacy-dashboard-overview.png',
      alt: 'Legacy Dashboard Overview - Poor spacing, heavy contrast, overwhelming density'
    },
    {
      id: 'legacy-insights',
      name: 'Legacy Automated Insights',
      description: 'Charts lacked logic, and insights were buried',
      image: '/images/case-studies/relo-edge/legacy-automated-insights.png',
      alt: 'Legacy Automated Insights - Charts lacked logic, and insights were buried'
    },
    {
      id: 'legacy-explorer',
      name: 'Legacy Data Explorer',
      description: 'Cluttered UI with dropdown stacking and no defaults',
      image: '/images/case-studies/relo-edge/legacy-data-explorer.png',
      alt: 'Legacy Data Explorer - Cluttered UI with dropdown stacking and no defaults'
    },
    {
      id: 'legacy-social',
      name: 'Legacy Social Media Views',
      description: 'Overwhelming view of social media posts without relevant data',
      image: '/images/case-studies/relo-edge/legacy-social-media-views.png',
      alt: 'Legacy Social Media Views - Overwhelming view of social media posts without relevant data'
    }
  ];

  // Legacy screenshots modal handlers
  const openLegacyScreenshotsModal = (screenshotId: string) => {
    console.log('openLegacyScreenshotsModal called with:', screenshotId);
    const index = legacyScreenshots.findIndex(s => s.id === screenshotId);
    console.log('Found screenshot index:', index);
    if (index !== -1) {
      setCurrentScreenshotIndex(index);
      setIsLegacyScreenshotsModalOpen(true);
      console.log('Legacy screenshots modal should be opening');
    }
  };

  const closeLegacyScreenshotsModal = () => {
    setIsLegacyScreenshotsModalOpen(false);
  };

  const previousLegacyScreenshot = () => {
    setCurrentScreenshotIndex((prev) => (prev > 0 ? prev - 1 : legacyScreenshots.length - 1));
  };

  const nextLegacyScreenshot = () => {
    setCurrentScreenshotIndex((prev) => (prev < legacyScreenshots.length - 1 ? prev + 1 : 0));
  };

  // Generate research artifacts from case study data for Medable Translation Tool
  const researchArtifacts = caseStudy?.id === 'medable-translation-tool' && caseStudy.researchArtifacts 
    ? caseStudy.researchArtifacts 
    : [];

  // Generate visual DNA artifacts from case study data for Elysium AI Dashboard and Medable Design System
  const visualDnaArtifacts = (caseStudy?.id === 'elysium-ai-dashboard' || caseStudy?.id === 'medable-design-system') && caseStudy.visualDnaArtifacts 
    ? caseStudy.visualDnaArtifacts 
    : [];

  // Research artifacts modal handlers
  const openResearchArtifactsModal = (artifactId: string) => {
    console.log('openResearchArtifactsModal called with:', artifactId);
    const index = researchArtifacts.findIndex((a) => a.id === artifactId);
    console.log('Found artifact index:', index);
    if (index !== -1) {
      setCurrentArtifactIndex(index);
      setIsResearchArtifactsModalOpen(true);
      console.log('Research artifacts modal should be opening');
    }
  };

  const closeResearchArtifactsModal = () => {
    setIsResearchArtifactsModalOpen(false);
  };

  const previousResearchArtifact = () => {
    setCurrentArtifactIndex((prev) => (prev > 0 ? prev - 1 : researchArtifacts.length - 1));
  };

  const nextResearchArtifact = () => {
    setCurrentArtifactIndex((prev) => (prev < researchArtifacts.length - 1 ? prev + 1 : 0));
  };

  // Visual DNA modal handlers
  const openVisualDnaModal = (artifactId: string) => {
    console.log('openVisualDnaModal called with:', artifactId);
    const index = visualDnaArtifacts.findIndex((a) => a.id === artifactId);
    console.log('Found Visual DNA artifact index:', index);
    if (index !== -1) {
      setCurrentVisualDnaIndex(index);
      setIsVisualDnaModalOpen(true);
      console.log('Visual DNA modal should be opening');
    }
  };

  const closeVisualDnaModal = () => {
    setIsVisualDnaModalOpen(false);
  };

  const previousVisualDnaArtifact = () => {
    setCurrentVisualDnaIndex((prev) => (prev > 0 ? prev - 1 : visualDnaArtifacts.length - 1));
  };

  const nextVisualDnaArtifact = () => {
    setCurrentVisualDnaIndex((prev) => (prev < visualDnaArtifacts.length - 1 ? prev + 1 : 0));
  };

  // Wireframe modal handlers
  const openWireframeModal = (index: number) => {
    setCurrentWireframeIndex(index);
    setIsWireframeModalOpen(true);
  };

  const closeWireframeModal = () => {
    setIsWireframeModalOpen(false);
  };

  const previousWireframe = () => {
    const wireframes = caseStudy?.wireframeImages || [];
    setCurrentWireframeIndex((prev) => (prev > 0 ? prev - 1 : wireframes.length - 1));
  };

  const nextWireframe = () => {
    const wireframes = caseStudy?.wireframeImages || [];
    setCurrentWireframeIndex((prev) => (prev < wireframes.length - 1 ? prev + 1 : 0));
  };

  // Component modal handlers
  const openComponentModal = (index: number) => {
    setCurrentComponentIndex(index);
    setIsComponentModalOpen(true);
  };

  const closeComponentModal = () => {
    setIsComponentModalOpen(false);
  };

  const previousComponent = () => {
    const components = caseStudy?.componentImages || [];
    setCurrentComponentIndex((prev) => (prev > 0 ? prev - 1 : components.length - 1));
  };

  const nextComponent = () => {
    const components = caseStudy?.componentImages || [];
    setCurrentComponentIndex((prev) => (prev < components.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      {/* Full Viewport Header with Centered Project Details */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={caseStudy.headerImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiM5ZWEzYTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5IZWFkZXIgSW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+';
          }}
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Centered Project Details Card */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-xl max-w-3xl w-full">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-white text-lg lg:text-xl mb-8 opacity-90">{caseStudy.subtitle}</p>
            
            {/* Check if this case study has the new format (scope and outcome fields) */}
            {caseStudy.scope && caseStudy.outcome ? (
              <div className="space-y-6 text-white mb-8">
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-2">Role</span>
                  <p className="text-white text-lg font-semibold leading-relaxed">{caseStudy.role}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-2">Scope</span>
                  <p className="text-white text-lg font-semibold leading-relaxed">{caseStudy.scope}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-2">Outcome</span>
                  <p className="text-white text-lg font-semibold leading-relaxed">{caseStudy.outcome}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-2">Year</span>
                  <p className="text-white text-lg font-semibold leading-relaxed">{caseStudy.year}</p>
                </div>
              </div>
            ) : (
              /* Fallback to original 2x2 grid layout for other case studies */
              <div className="grid grid-cols-2 gap-6 text-white mb-8">
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-1">Client</span>
                  <p className="text-white text-lg font-semibold">{caseStudy.client}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-1">Role</span>
                  <p className="text-white text-lg font-semibold">{caseStudy.role}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-1">Year</span>
                  <p className="text-white text-lg font-semibold">{caseStudy.year}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-300 text-sm uppercase tracking-wider block mb-1">Tools</span>
                  <p className="text-white text-lg font-semibold">{caseStudy.tools.join(', ')}</p>
                </div>
              </div>
            )}

            {/* Interactive Prototype Button */}
            {caseStudy.figmaLink && (
              <a
                href={caseStudy.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                <FontAwesomeIcon 
                  icon={faFigma} 
                  className="text-lg group-hover:scale-110 transition-transform duration-300" 
                />
                <span>View Interactive Prototype</span>
                <FontAwesomeIcon 
                  icon={faExternalLinkAlt} 
                  className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </a>
            )}
          </div>
        </div>

        {/* Scroll to Project Brief Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              const projectBriefSection = document.getElementById('project-brief');
              if (projectBriefSection) {
                projectBriefSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group flex flex-col items-center text-white hover:text-gray-200 transition-colors duration-300"
            style={{
              animation: 'gentleBounce 2s ease-in-out infinite'
            }}
            aria-label="Scroll to project details"
          >
            <span className="text-sm font-medium mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to Project Details
            </span>
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className="text-xl" 
            />
          </button>
        </div>
      </section>

      {/* Project Content */}
      <section id="project-brief" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Brief */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faFileAlt} className="text-blue-600" />
                Project Brief
              </h2>
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.projectBrief }}
              />
            </div>
          </div>

          {/* Design Process */}
          {caseStudy.designProcess && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
                <div 
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: caseStudy.designProcess }}
                />
              </div>
            </div>
          )}

          {/* Situation */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              {caseStudy.id === 'relo-census-dashboard' ? (
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-3xl font-bold text-black uppercase tracking-wide flex items-center gap-3">
                    <FontAwesomeIcon icon={faSearch} className="text-blue-600" />
                    Discovery
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              ) : (
                <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-600" />
                  Situation
                </h2>
              )}
              {/* Split situation content at placeholders for proper positioning */}
              {(() => {
                if (caseStudy.id === 'relo-census-dashboard') {
                  // Split by the personas placeholder
                  const personasPlaceholderPattern = '            <div class="personas-viewer-placeholder">\n              <!-- Personas viewer will be rendered as React component -->\n            </div>';
                  const parts = caseStudy.situation.split(personasPlaceholderPattern);
                  
                  if (parts.length === 2) {
                    const beforePersonas = parts[0];
                    const afterPersonas = parts[1];
                    
                    return (
                      <div className="text-lg text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: beforePersonas }} />
                        <PersonaViewer onPersonaClick={openPersonaModal} />
                        <div dangerouslySetInnerHTML={{ __html: afterPersonas }} />
                      </div>
                    );
                  }
                }
                
                if (caseStudy.id === 'relo-edge-redesign') {
                  // Split by the complete placeholder block including comment and closing div
                  const placeholderPattern = '          <div class="legacy-screenshots-viewer-placeholder">\n            <!-- Legacy screenshots viewer will be rendered as React component -->\n          </div>';
                  const parts = caseStudy.situation.split(placeholderPattern);
                  
                  if (parts.length === 2) {
                    const beforeScreenshots = parts[0];
                    const afterScreenshots = parts[1];
                    
                    return (
                      <div className="text-lg text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: beforeScreenshots }} />
                        <LegacyScreenshotsViewer onScreenshotClick={openLegacyScreenshotsModal} />
                        <div dangerouslySetInnerHTML={{ __html: afterScreenshots }} />
                      </div>
                    );
                  }
                }
                
                // Fallback for other case studies or if splitting fails
                return (
                  <div 
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: caseStudy.situation }}
                  />
                );
              })()}
            </div>
          </div>

          {/* Define The Problem */}
          {caseStudy.defineProblem && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-3xl font-bold text-black uppercase tracking-wide flex items-center gap-3">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-600" />
                    Define The Problem
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
                <div 
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: caseStudy.defineProblem }}
                />
              </div>
            </div>
          )}

          {/* Task / Design */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              {caseStudy.id === 'relo-census-dashboard' ? (
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-3xl font-bold text-black uppercase tracking-wide flex items-center gap-3">
                    <FontAwesomeIcon icon={faTasks} className="text-purple-600" />
                    Design (Iterate & Test)
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              ) : (
                <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faTasks} className="text-purple-600" />
                  Task
                </h2>
              )}
              {(() => {
                if (caseStudy.id === 'relo-census-dashboard' && caseStudy.wireframeImages && caseStudy.componentImages) {
                  let content = caseStudy.task;
                  
                  // Replace wireframe placeholders
                  const wireframeAPattern = '              <div class="wireframe-a-placeholder mt-auto">\n                <!-- Wireframe A will be rendered as React component -->\n              </div>';
                  const wireframeBPattern = '              <div class="wireframe-b-placeholder mt-auto">\n                <!-- Wireframe B will be rendered as React component -->\n              </div>';
                  
                  content = content.replace(
                    wireframeAPattern,
                    `<div class="mt-auto cursor-pointer hover:opacity-90 transition-opacity" data-wireframe="a">
                      <img 
                        src="${caseStudy.wireframeImages[0]}" 
                        alt="Option A: Top Filter Bar Wireframe" 
                        class="w-full h-auto rounded-lg border border-gray-300 shadow-md"
                      />
                      <p class="text-center text-sm text-gray-600 mt-2">Click to enlarge</p>
                    </div>`
                  );
                  
                  content = content.replace(
                    wireframeBPattern,
                    `<div class="mt-auto cursor-pointer hover:opacity-90 transition-opacity" data-wireframe="b">
                      <img 
                        src="${caseStudy.wireframeImages[1]}" 
                        alt="Option B: Side Panel Filter Wireframe" 
                        class="w-full h-auto rounded-lg border border-gray-300 shadow-md"
                      />
                      <p class="text-center text-sm text-gray-600 mt-2">Click to enlarge</p>
                    </div>`
                  );
                  
                  // Replace component placeholders
                  const componentPlaceholders = [
                    { pattern: '            <div class="component-placeholder" data-component="brand-colors">\n              <!-- Component image will be rendered -->\n            </div>', index: 0, name: 'Brand Colors' },
                    { pattern: '            <div class="component-placeholder" data-component="buttons">\n              <!-- Component image will be rendered -->\n            </div>', index: 1, name: 'Buttons' },
                    { pattern: '            <div class="component-placeholder" data-component="login">\n              <!-- Component image will be rendered -->\n            </div>', index: 2, name: 'Login' },
                    { pattern: '            <div class="component-placeholder" data-component="side-nav">\n              <!-- Component image will be rendered -->\n            </div>', index: 3, name: 'Side Navigation' },
                    { pattern: '            <div class="component-placeholder" data-component="charts">\n              <!-- Component image will be rendered -->\n            </div>', index: 4, name: 'Charts' },
                    { pattern: '            <div class="component-placeholder" data-component="data-tables">\n              <!-- Component image will be rendered -->\n            </div>', index: 5, name: 'Data Tables' },
                    { pattern: '            <div class="component-placeholder" data-component="view-builders">\n              <!-- Component image will be rendered -->\n            </div>', index: 6, name: 'View Builders' },
                  ];
                  
                  componentPlaceholders.forEach(({ pattern, index, name }) => {
                    content = content.replace(
                      pattern,
                      `<div class="cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden border border-gray-200 shadow-sm" data-component="${index}">
                        <img 
                          src="${caseStudy.componentImages![index]}" 
                          alt="${name} Component" 
                          class="w-full h-auto"
                        />
                      </div>`
                    );
                  });
                  
                  return (
                    <div 
                      className="text-lg text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: content }}
                      onClick={(e) => {
                        const target = e.target as HTMLElement;
                        
                        // Handle wireframe clicks
                        const wireframeDiv = target.closest('[data-wireframe]');
                        if (wireframeDiv) {
                          const wireframeType = wireframeDiv.getAttribute('data-wireframe');
                          if (wireframeType === 'a') {
                            openWireframeModal(0);
                          } else if (wireframeType === 'b') {
                            openWireframeModal(1);
                          }
                          return;
                        }
                        
                        // Handle component clicks
                        const componentDiv = target.closest('[data-component]');
                        if (componentDiv) {
                          const componentIndex = componentDiv.getAttribute('data-component');
                          if (componentIndex !== null) {
                            openComponentModal(parseInt(componentIndex));
                          }
                        }
                      }}
                    />
                  );
                }
                
                // Fallback for other case studies
                return (
                  <div 
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: caseStudy.task }}
                  />
                );
              })()}
            </div>
          </div>

          {/* Action */}
          {caseStudy.id !== 'relo-census-dashboard' && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
                <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faCogs} className="text-green-600" />
                  Action
                </h2>
                {/* Split action content at personas placeholder for proper positioning */}
                {(() => {
                  if (caseStudy.id === 'relo-edge-redesign') {
                  // Split by the complete placeholder block including comment and closing div
                  const placeholderPattern = '        <div class="personas-viewer-placeholder">\n          <!-- Persona viewer will be rendered as React component -->\n        </div>';
                  const parts = caseStudy.action.split(placeholderPattern);
                  
                  if (parts.length === 2) {
                    const beforePersonas = parts[0];
                    const afterPersonas = parts[1];
                    
                    return (
                      <div className="text-lg text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: beforePersonas }} />
                        <PersonaViewer onPersonaClick={openPersonaModal} />
                        <div dangerouslySetInnerHTML={{ __html: afterPersonas }} />
                      </div>
                    );
                  }
                }
                
                if (caseStudy.id === 'medable-translation-tool') {
                  // Split by the complete placeholder block including comment and closing div
                  const placeholderPattern = '          <div class="research-artifacts-viewer-placeholder">\n            <!-- Research artifacts viewer will be rendered as React component -->\n          </div>';
                  const parts = caseStudy.action.split(placeholderPattern);
                  
                  if (parts.length === 2) {
                    const beforeArtifacts = parts[0];
                    const afterArtifacts = parts[1];
                    
                    return (
                      <div className="text-lg text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: beforeArtifacts }} />
                        <ResearchArtifactsViewer 
                          onArtifactClick={openResearchArtifactsModal} 
                          researchArtifacts={researchArtifacts}
                        />
                        <div dangerouslySetInnerHTML={{ __html: afterArtifacts }} />
                      </div>
                    );
                  }
                }
                
                // Fallback for other case studies or if splitting fails
                return (
                  <div 
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: caseStudy.action }}
                  />
                );
              })()}
              </div>
            </div>
          )}

          {/* Result */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              {caseStudy.id === 'relo-census-dashboard' ? (
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-3xl font-bold text-black uppercase tracking-wide flex items-center gap-3">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-600" />
                    Result
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              ) : (
                <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faTrophy} className="text-yellow-600" />
                  Result
                </h2>
              )}
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.result }}
              />
            </div>
          </div>


        </div>
      </section>

      {/* Final Designs Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPalette} className="text-indigo-600" />
              Final Designs
            </h2>
            <p className="text-lg text-gray-600">
              Click on any image to view it in full size
            </p>
          </div>

          {/* Visual DNA Section - For Elysium AI Dashboard and Medable Design System */}
          {(caseStudy.id === 'elysium-ai-dashboard' || caseStudy.id === 'medable-design-system') && visualDnaArtifacts.length > 0 && (
            <VisualDnaViewer 
              onArtifactClick={openVisualDnaModal} 
              visualDnaArtifacts={visualDnaArtifacts}
            />
          )}

          {/* Main Gallery Section */}
          <div className="mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faEye} className="text-indigo-600" />
                Final Interface Designs
              </h3>
              
              <p className="text-gray-600 text-center mb-8 text-lg">
                Complete design system implementation across all platform interfaces and user flows
              </p>

              {/* Image Gallery Grid */}
              <div className={`grid md:grid-cols-2 ${caseStudy.id === 'medable-translation-tool' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
            {caseStudy.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer border border-gray-300 hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlc2lnbiAke2luZGV4ICsgMX08L3RleHQ+PC9zdmc+';
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
            </div>
          </div>

          {/* Secondary Prototype Link */}
          {caseStudy.figmaLink && (
            <div className="text-center mt-12">
              <a
                href={caseStudy.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                <FontAwesomeIcon 
                  icon={faFigma} 
                  className="text-lg group-hover:scale-110 transition-transform duration-300" 
                />
                <span>View Interactive Prototype</span>
                <FontAwesomeIcon 
                  icon={faExternalLinkAlt} 
                  className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Back to Case Studies */}
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              View Other Case Studies
            </Link>

            {/* Previous/Next Navigation */}
            <div className="flex items-center gap-4">
              {previousCaseStudy && (
                <Link
                  to={`/case-study/${previousCaseStudy.id}`}
                  className="text-center group"
                >
                  <p className="text-sm text-gray-500 mb-1">Previous</p>
                  <p className="font-medium text-gray-900 group-hover:text-black transition-colors duration-200">
                    {previousCaseStudy.title}
                  </p>
                </Link>
              )}
              
              {previousCaseStudy && nextCaseStudy && (
                <div className="h-8 w-px bg-gray-300" />
              )}
              
              {nextCaseStudy && (
                <Link
                  to={`/case-study/${nextCaseStudy.id}`}
                  className="text-center group"
                >
                  <p className="text-sm text-gray-500 mb-1">Next</p>
                  <p className="font-medium text-gray-900 group-hover:text-black transition-colors duration-200">
                    {nextCaseStudy.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={caseStudy.images}
        currentIndex={currentImageIndex}
        onPrevious={previousImage}
        onNext={nextImage}
        caseStudyId={caseStudy.id}
      />

      {/* Persona Modal */}
      {caseStudy.id === 'relo-census-dashboard' && (
        <PersonaModal
          isOpen={isPersonaModalOpen}
          onClose={closePersonaModal}
          personas={personas}
          currentIndex={currentPersonaIndex}
          onPrevious={previousPersona}
          onNext={nextPersona}
        />
      )}

      {/* Legacy Screenshots Modal */}
      {caseStudy.id === 'relo-edge-redesign' && (
        <LegacyScreenshotsModal
          isOpen={isLegacyScreenshotsModalOpen}
          onClose={closeLegacyScreenshotsModal}
          screenshots={legacyScreenshots}
          currentIndex={currentScreenshotIndex}
          onPrevious={previousLegacyScreenshot}
          onNext={nextLegacyScreenshot}
        />
      )}

      {/* Research Artifacts Modal */}
      {caseStudy.id === 'medable-translation-tool' && (
        <ResearchArtifactsModal
          isOpen={isResearchArtifactsModalOpen}
          onClose={closeResearchArtifactsModal}
          artifacts={researchArtifacts}
          currentIndex={currentArtifactIndex}
          onPrevious={previousResearchArtifact}
          onNext={nextResearchArtifact}
        />
      )}

      {/* Visual DNA Modal */}
      {(caseStudy.id === 'elysium-ai-dashboard' || caseStudy.id === 'medable-design-system') && (
        <VisualDnaModal
          isOpen={isVisualDnaModalOpen}
          onClose={closeVisualDnaModal}
          artifacts={visualDnaArtifacts}
          currentIndex={currentVisualDnaIndex}
          onPrevious={previousVisualDnaArtifact}
          onNext={nextVisualDnaArtifact}
        />
      )}

      {/* Wireframe Modal */}
      {caseStudy.id === 'relo-census-dashboard' && caseStudy.wireframeImages && (
        <ImageModal
          isOpen={isWireframeModalOpen}
          onClose={closeWireframeModal}
          images={caseStudy.wireframeImages}
          currentIndex={currentWireframeIndex}
          onPrevious={previousWireframe}
          onNext={nextWireframe}
          caseStudyId={caseStudy.id}
        />
      )}

      {/* Component Modal */}
      {caseStudy.id === 'relo-census-dashboard' && caseStudy.componentImages && (
        <ImageModal
          isOpen={isComponentModalOpen}
          onClose={closeComponentModal}
          images={caseStudy.componentImages}
          currentIndex={currentComponentIndex}
          onPrevious={previousComponent}
          onNext={nextComponent}
          caseStudyId={caseStudy.id}
        />
      )}
    </div>
  );
};

export default CaseStudyPage; 