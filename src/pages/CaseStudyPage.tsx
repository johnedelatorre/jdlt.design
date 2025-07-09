import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faEye, faFileAlt, faExclamationTriangle, faTasks, faCogs, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { caseStudies } from '../data/caseStudies';
import ImageModal from '../components/ImageModal';
import PersonaModal from '../components/PersonaModal';
import PersonaViewer from '../components/PersonaViewer';


const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(0);

  const caseStudy = caseStudies.find((cs) => cs.id === id);
  const currentIndex = caseStudies.findIndex((cs) => cs.id === id);
  const previousCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : caseStudy.images.length - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev < caseStudy.images.length - 1 ? prev + 1 : 0));
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



  return (
    <div>
      {/* Header Image with Project Details Overlay */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={caseStudy.headerImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiM5ZWEzYTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5IZWFkZXIgSW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+';
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Project Details Card */}
        <div className="absolute bottom-8 left-8 right-8 lg:left-16 lg:right-auto lg:max-w-md bg-white bg-opacity-70 backdrop-blur-md rounded-lg p-6 shadow-xl border border-white border-opacity-20">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-2">
            {caseStudy.title}
          </h1>
          <p className="text-gray-600 mb-4">{caseStudy.subtitle}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span className="font-medium text-gray-500">Client:</span>
              <p className="text-black">{caseStudy.client}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Role:</span>
              <p className="text-black">{caseStudy.role}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Year:</span>
              <p className="text-black">{caseStudy.year}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Tools:</span>
              <p className="text-black">{caseStudy.tools.join(', ')}</p>
            </div>
          </div>

          {/* Interactive Prototype Button */}
          {caseStudy.figmaLink && (
            <a
              href={caseStudy.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
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
      </section>

      {/* STAR Method Content Sections */}
      <section className="py-16 lg:py-24">
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

          {/* Situation */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-600" />
                Situation
              </h2>
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.situation }}
              />
            </div>
          </div>

          {/* Task */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTasks} className="text-purple-600" />
                Task
              </h2>
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.task }}
              />
            </div>
          </div>

          {/* Action */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faCogs} className="text-green-600" />
                Action
              </h2>
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: caseStudy.action.replace('<div class="personas-viewer-placeholder">', '<div class="personas-viewer-placeholder" style="display: none;">') }}
              />
              
              {/* Persona Viewer for Relo Census case study - positioned after Action 2 */}
              {caseStudy.id === 'relo-census-dashboard' && (
                <PersonaViewer onPersonaClick={openPersonaModal} />
              )}
            </div>
          </div>

          {/* Result */}
          <div className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-16 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTrophy} className="text-yellow-600" />
                Result
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Final Designs Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              Final Designs
            </h2>
            <p className="text-lg text-gray-600">
              Click on any image to view it in full size
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
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
    </div>
  );
};

export default CaseStudyPage; 