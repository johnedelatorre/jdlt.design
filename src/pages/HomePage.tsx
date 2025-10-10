import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';
import { scrollToCaseStudies } from '../utils/scrollUtils';

const HomePage: React.FC = () => {

  return (
    <div>
      {/* Hero/About Me Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                Product Design & Usability Leader
              </h1>
              
              {/* Clean headline section with emoji glyphs */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                {/* Desktop version - flowing text with emoji glyphs */}
                <div className="hidden md:block text-base text-gray-700 leading-relaxed space-y-2.5">
                  <p className="mb-0">
                    🧭 <span className="font-semibold text-gray-900">Founding Product Design Leader</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🎯 <span>Mission • </span>🏛 <span>Legacy • </span>🤝 <span>Service</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧠 <span>Systems Thinker</span>
                  </p>
                  <p className="mb-0">
                    🛠️ <span>Products & Teams Builder</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧑‍💻 <span>IC → Player-Coach → Org-Builder</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🔎 <span>Discovery & Research-Led </span><em>(Pendo • User Interviews)</em>
                    <span className="text-gray-400 mx-2">│</span>
                    🤖 <span>AI UX — Claude</span>
                  </p>
                  <p className="mb-0">
                    🗺️ <span>Journey Mapping</span>
                    <span className="text-gray-400 mx-2">│</span>
                    👤 <span>Personas</span>
                    <span className="text-gray-400 mx-2">│</span>
                    📋 <span>UX Strategy</span>
                    <span className="text-gray-400 mx-2">│</span>
                    👥 <span>Human-Centric</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧱 <span>Scalable UX Systems</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧩 <span>Figma • MCP Server • Cursor</span>
                  </p>
                </div>

                {/* Mobile version - compact with emoji glyphs */}
                <div className="md:hidden text-sm text-gray-700 leading-relaxed space-y-2">
                  <p className="mb-0">
                    🧭 <span className="font-bold text-gray-900">Founding Product Design Leader</span>
                  </p>
                  <p className="mb-0">
                    🎯 <span>Mission • </span>🏛 <span>Legacy • </span>🤝 <span>Service</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧠 <span>Systems Thinker</span>
                  </p>
                  <p className="mb-0">
                    🛠️ <span>Products & Teams Builder</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧑‍💻 <span>IC → Player-Coach → Org-Builder</span>
                  </p>
                  <p className="mb-0">
                    🔎 <span>Discovery & Research-Led </span><em>(Pendo • User Interviews)</em>
                    <span className="text-gray-400 mx-2">│</span>
                    🤖 <span>AI UX — Claude</span>
                  </p>
                  <p className="mb-0">
                    🗺️ <span>Journey Mapping</span>
                    <span className="text-gray-400 mx-2">│</span>
                    👤 <span>Personas</span>
                    <span className="text-gray-400 mx-2">│</span>
                    📋 <span>UX Strategy</span>
                  </p>
                  <p className="mb-0">
                    👥 <span>Human-Centric</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧱 <span>Scalable UX Systems</span>
                    <span className="text-gray-400 mx-2">│</span>
                    🧩 <span>Figma • MCP Server • Cursor</span>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>15+ years</strong> building and scaling <strong>mission-driven products and teams</strong>. I lead with <strong>Mission</strong> (outcomes over outputs), leave a <strong>Legacy</strong> of trust-first systems and operating cadences that engineering chooses to use, and show up in <strong>Service</strong> by mentoring designers and unblocking delivery. I'm a <strong>Full-Stack Product Design Leader</strong> and <strong>systems thinker</strong> who starts as a founding IC where risk is highest, then evolves into <strong>player-coach and org-builder</strong> as the business scales.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I blend <strong>discovery, research, and AI-led, code-connected prototyping</strong> (Figma MCP → Cursor) to turn ambiguity into <strong>measurable impact</strong>. Previously at <strong>JPMorgan Chase</strong>, I scaled design from <strong>1 → 8</strong> (6–8 designers + 1 researcher) for Commercial Banking in <strong>~12 months</strong>—sequencing hires to business needs and lifting <strong>throughput, adoption, and quality</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Currently <strong>Founding Product Design Lead</strong> at <strong>Relo Metrics</strong>, where I'm revolutionizing <strong>sports analytics</strong> through two game-changing platforms:
              </p>

              {/* Relo Census */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-black">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    📊
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-black">Relo Census</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Led usability and design strategy for this next-gen sponsorship data platform. Delivered a clean, scalable UX that helps brands and agencies value every team, asset, and brand across major U.S. leagues—driving smarter decisions and stronger revenue impact.
                </p>
                <div className="flex items-center gap-2 text-green-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
                  <span className="font-medium">Result: Smarter decisions, stronger revenue impact, happier users</span>
                </div>
              </div>

              {/* Relo Edge */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-black">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ⚡
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-black">Relo Edge</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Directed a full UI/UX redesign of Relo's core analytics tool. Modernized the interface with best practices in usability and clarity—improving product adoption, user satisfaction, and engagement across the board.
                </p>
                <div className="flex items-center gap-2 text-green-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
                  <span className="font-medium">Result: Higher adoption, better satisfaction, more engagement</span>
                </div>
              </div>
            </div>

            {/* Profile Photo - Hidden on mobile since avatar is in header */}
            <div className="hidden md:flex flex-col items-center lg:items-center gap-8">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBmWD0iMjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOWVhM2E4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvZmlsZSBQaG90bzwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
              </div>
              
              {/* Scroll to Case Studies Button - Desktop: below photo */}
              <div className="hidden md:flex justify-center mt-40">
                <button
                  onClick={scrollToCaseStudies}
                  className="group flex items-center gap-4 transition-all duration-500 ease-out hover:animate-none"
                  style={{
                    animation: 'subtleBounce 2s ease-in-out infinite'
                  }}
                  aria-label="Scroll to case studies"
                >
                  {/* Circle with Arrow */}
                  <div className="relative w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={faArrowDown} 
                      className="text-gray-700 text-xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" 
                    />
                  </div>
                  
                  {/* Text */}
                  <span className="text-gray-500 text-lg font-medium uppercase tracking-wide group-hover:scale-105 transition-transform duration-500 ease-out">
                    View Case Studies
                  </span>
                </button>
              </div>
            </div>
          </div>
          
                    {/* Mobile Scroll Button - After content, centered */}
          <div className="md:hidden flex justify-center mt-6">
            <button
              onClick={scrollToCaseStudies}
              className="group flex items-center gap-3 transition-all duration-500 ease-out hover:animate-none"
              style={{
                animation: 'subtleBounce 2s ease-in-out infinite'
              }}
              aria-label="Scroll to case studies"
            >
              {/* Circle with Arrow */}
              <div className="relative w-14 h-14 border-2 border-gray-700 rounded-full flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faArrowDown} 
                  className="text-gray-700 text-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" 
                />
              </div>
              
              {/* Text */}
              <span className="text-gray-500 text-base font-medium uppercase tracking-wide group-hover:scale-105 transition-transform duration-500 ease-out">
                View Case Studies
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="pt-6 pb-6 lg:pt-8 lg:pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-3">
              Featured Case Studies
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Explore my work which showcases how UX Research meets Interaction Design, Visual Design meets Front-End Development, and AI meets human intuition.
            </p>
          </div>

          {/* Featured Recent Projects */}
          <div className="mb-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {caseStudies
                .filter(caseStudy => caseStudy.isRecent)
                .map((caseStudy) => (
                  <div key={caseStudy.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
                      <img
                        src={caseStudy.headerImage}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
                        }}
                      />
                      
                      {/* Recent Project Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm">
                          Recent Project
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <h3 className="font-serif text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {caseStudy.subtitle}
                        </p>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                        <span><span className="font-medium">Client:</span> {caseStudy.client}</span>
                        <span>•</span>
                        <span>{caseStudy.year}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Case Study Button */}
                      <div className="mt-auto">
                        <Link
                          to={`/case-study/${caseStudy.id}`}
                          className="group/button inline-flex items-center justify-center w-full bg-black text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span>View Case Study</span>
                          <svg 
                            className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Additional Projects - Equal Width Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(caseStudy => !caseStudy.isRecent)
              .map((caseStudy) => (
                <div key={caseStudy.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Project Image - Shorter aspect ratio for better viewport fit */}
                  <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
                    <img
                      src={caseStudy.headerImage}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-serif text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {caseStudy.subtitle}
                      </p>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                      <span><span className="font-medium">Client:</span> {caseStudy.client}</span>
                      <span>•</span>
                      <span>{caseStudy.year}</span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Case Study Button */}
                    <div className="mt-auto">
                      <Link
                        to={`/case-study/${caseStudy.id}`}
                        className="group/button inline-flex items-center justify-center w-full bg-black text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span>View Case Study</span>
                        <svg 
                          className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 