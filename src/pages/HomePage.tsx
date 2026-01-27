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
      {/* Hero/About Me Section - Centered, Matches Case Studies Width */}
      <section className="pt-16 pb-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Photo - Centered, Larger */}
            <div className="mb-6">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBmWD0iMjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOWVhM2E4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvZmlsZSBQaG90bzwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
            </div>
            
            {/* Title - Single Line */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 px-4">
              Product Design & Usability Leader
            </h1>
            
            {/* Subtitle - Current Role */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium mb-10 px-4">
              Chief Design Officer & Founding Partner at BrandPulse Media AI
            </p>
            
            {/* Full Expertise Section - Compact & Elegant */}
            <div className="mb-6">
              <div className="p-4 md:p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 text-left">
                <div className="grid gap-2 md:gap-2.5 text-sm md:text-base text-gray-700">
                  <div>
                    <span className="font-bold text-gray-900">WHO I AM:</span> <span className="font-semibold text-gray-900">Chief Design Officer</span> • Founding Partner • Product & UX Executive • Systems Thinker
                  </div>
                  
                  <div>
                    <span className="font-bold text-gray-900">HOW I LEAD & SCALE:</span> Founder-Level Operator • IC → Player-Coach → Org-Builder
                  </div>
                  
                  <div>
                    <span className="font-bold text-gray-900">DISCOVERY & STRATEGY:</span> Discovery-Led • Research-Driven • UX Strategy • Human-Centric
                  </div>
                  
                  <div>
                    <span className="font-bold text-gray-900">SYSTEMS, AI & TOOLS:</span> Scalable UX Systems • AI-Led UX • Claude • Figma • MCP Server • Cursor
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Summary - Same Width as Cards Above/Below */}
            <div className="mb-6">
              <div className="space-y-3 text-left">
                <p className="text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                  <strong>15+ years</strong> building and scaling <strong>mission-driven, data-heavy products and teams</strong>. I'm a <strong>founder-level product design and usability leader</strong> operating at the intersection of <strong>AI, analytics, fintech, healthcare, and sports technology</strong>. I lead as an <strong>owner—not a service function</strong>—aligning product, design, and engineering to turn complex systems into trusted, scalable products that drive <strong>adoption, retention, and revenue</strong>.
                </p>
                
                <p className="text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                  <strong>Currently:</strong> I serve as <strong>Chief Design Officer and Founding Partner</strong> at <strong>BrandPulse AI</strong>, where I co-own product definition, UX strategy, and MVP execution for an AI-driven sports sponsorship analytics platform. I work hands-on with engineering and AI leadership to translate <strong>computer vision, data science, and analytics</strong> into products that athletes, brands, and investors can clearly understand and trust—from <strong>0→1 MVP through early scale</strong>.
                </p>
                
                <p className="text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                  <strong>Most recently:</strong> I was the <strong>Founding Product Design Lead</strong> at <strong>Relo Metrics</strong>, owning the <strong>0→1 launch of Relo Census</strong> and leading the end-to-end UX/UI overhaul of <strong>Relo Edge</strong>, the company's flagship real-time analytics platform.
                </p>

                <div className="mt-5">
                  <h3 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-3">Impact at Relo Metrics</h3>
                  <ul className="space-y-1.5 md:space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span><strong>Relo Edge:</strong> <strong>100% client migration with zero churn</strong>, <strong>+42% feature adoption</strong>, and <strong>68% fewer UI complaints</strong>; contributing <strong>~$4–$5M ARR</strong> with <strong>~76% active usage</strong> and increased time-in-product.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span><strong>Relo Census (0→1):</strong> <strong>~60% growth in new signups</strong>, strong renewals, and <strong>~$1.2–$2.0M ARR</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>Established design QA, handoff standards, and a repeatable <strong>discovery → delivery system</strong> adopted across teams.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                  <strong>Earlier:</strong> At <strong>JPMorgan Chase</strong>, I led and scaled UX teams from <strong>1 → ~8 designers plus research</strong> in <strong>~12 months</strong>, owning complex, regulated commercial banking workflows. That experience shaped how I balance <strong>velocity, quality, compliance, and long-term systems thinking</strong> at scale.
                </p>

                <div className="mt-5">
                  <h3 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-3">I specialize in</h3>
                  <ul className="space-y-1.5 md:space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>Founder-level product & UX leadership</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>AI- and analytics-driven platforms</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>0→1 MVPs and large-scale redesigns</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>Discovery-led, code-connected prototyping</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-lg text-gray-700" style={{ lineHeight: '1.5' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ marginTop: 'calc(0.4em + 2px)' }} />
                      <span>Building systems teams actually want to use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CTA Button with Down Arrow - Repositioned Above Relo Cards */}
            <div className="flex justify-center my-8">
              <button
                onClick={scrollToCaseStudies}
                className="group flex items-center gap-4 transition-all duration-500 ease-out hover:animate-none"
                style={{
                  animation: 'subtleBounce 2s ease-in-out infinite'
                }}
                aria-label="Scroll to case studies"
              >
                <div className="relative w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faArrowDown} 
                    className="text-gray-700 text-xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" 
                  />
                </div>
                
                <span className="font-semibold text-gray-700 text-sm uppercase tracking-wider group-hover:text-gray-900 transition-colors duration-300">
                  View Case Studies
                </span>
              </button>
            </div>
            
            {/* Featured Projects - Scaled Typography, Constrained Measure */}
            <div className="mb-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Relo Census */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-left flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📊</span>
                    <h3 className="font-serif text-2xl font-bold text-black">Relo Census</h3>
                  </div>
                  <div className="max-w-prose flex-grow mb-4">
                    <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                      0→1 sponsorship analytics platform built around Saved Views.
                      Defined personas, information architecture, and a flexible view builder so teams can analyze sponsorship data their way and compose decision-ready dashboards.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-green-700 mt-auto">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0" />
                    <span className="font-semibold text-sm">Enables faster analysis and clearer stakeholder sponsorhip narratives.</span>
                  </div>
                </div>

                {/* Relo Edge */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-left flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">⚡</span>
                    <h3 className="font-serif text-2xl font-bold text-black">Relo Edge</h3>
                  </div>
                  <div className="max-w-prose flex-grow mb-4">
                    <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                      End-to-end UX/UI redesign of Relo's flagship real-time analytics platform.
                      Simplified information architecture, rebuilt core components, and clarified workflows to reduce friction across high-frequency analytical tasks.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-green-700 mt-auto">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0" />
                    <span className="font-semibold text-sm">Designed to drive adoption, usability, and long-term engagement at scale.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="pt-6 pb-6 lg:pt-8 lg:pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 mt-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-3">
              Selected Work — Recently Delivered Platforms
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
                        {caseStudy.scope && caseStudy.outcome ? (
                          <>
                            <span><span className="font-medium">Role:</span> {caseStudy.role.split(' (')[0]}</span>
                            <span>•</span>
                            <span>{caseStudy.year}</span>
                          </>
                        ) : (
                          <>
                            <span><span className="font-medium">Client:</span> {caseStudy.client}</span>
                            <span>•</span>
                            <span>{caseStudy.year}</span>
                          </>
                        )}
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
