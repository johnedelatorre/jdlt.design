import React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <img
          src={caseStudy.headerImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to a gray placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        
        {/* Recent Project Badge */}
        {caseStudy.isRecent && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-md shadow-sm">
              Recent Project
            </div>
          </div>
        )}
        
        {/* Project Details Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h3 className="font-serif text-xl font-semibold mb-2">{caseStudy.title}</h3>
            <p className="text-sm mb-3">{caseStudy.subtitle}</p>
            <div className="text-xs space-y-1">
              {caseStudy.scope && caseStudy.outcome ? (
                <>
                  <p><span className="font-medium">Role:</span> {caseStudy.role}</p>
                  <p><span className="font-medium">Scope:</span> {caseStudy.scope}</p>
                  <p><span className="font-medium">Outcome:</span> {caseStudy.outcome}</p>
                </>
              ) : (
                <>
                  <p><span className="font-medium">Client:</span> {caseStudy.client}</p>
                  <p><span className="font-medium">Role:</span> {caseStudy.role}</p>
                  <p><span className="font-medium">Year:</span> {caseStudy.year}</p>
                  <p><span className="font-medium">Tools:</span> {caseStudy.tools.join(', ')}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-black">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{caseStudy.subtitle}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Case Study Button */}
        <Link
          to={`/case-study/${caseStudy.id}`}
          className="inline-block w-full text-center bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard; 