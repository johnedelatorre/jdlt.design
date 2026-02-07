import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faCheckCircle,
  faChartBar,
  faBolt,
  faUser,
  faShieldHalved,
  faMagnifyingGlass,
  faSitemap,
  faCode,
  faRocket,
  faBuildingColumns,
  faHeartPulse,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';
import { scrollToCaseStudies } from '../utils/scrollUtils';

const HomePage: React.FC = () => {

  return (
    <div>
      {/* HeroSection — no card, with photo */}
      <section className="pt-16 pb-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Product Design & Usability Leader
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            I design clear, trustworthy product systems that turn complex data, AI, and workflows into transparent, explainable, decision-ready experiences people actually use.
          </p>
          <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
            With 15+ years across fintech, healthcare, and AI-driven analytics, I lead 0→1 and enterprise-scale platforms by combining strong visual craft, systems thinking, and discovery-led UX. I design for business outcomes and real user impact—driving adoption, retention, and long-term trust through clarity, consistency, and best-practice UI design.
          </p>
        </div>
      </section>

      {/* WhoIAmCard — single wide soft card */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-600">
                Who I Am
              </h2>
            </div>
            <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                I started my career as a <strong>visual designer</strong> in advertising and marketing agencies, where I focused deeply on <em>visual craft, storytelling, and visual communication</em>. Those early years trained my eye for <strong>clarity, hierarchy, and meaning</strong>—how design communicates intent, builds confidence, and earns attention.
              </p>
              <p>
                From there, I transitioned into <strong>frontend and full-stack engineering</strong>, where I learned how systems actually work and what it takes to build what you design. That experience fundamentally shaped how I approach product design: <em>understanding constraints, designing for scale</em>, and respecting the realities of engineering, performance, and maintainability.
              </p>
              <p>
                Over time, those foundations naturally evolved into <strong>discovery-led product design and usability leadership</strong>, where research, systems thinking, and human-centered problem solving come together.
              </p>
              <p className="italic text-gray-800">
                I love this role because it uses every skillset I've acquired.
              </p>
              <p className="italic text-gray-800">
                I love to solve problems, humanize technology, and bring ideas to life.
              </p>
              <p>
                Today, I operate as a <strong>senior product design and usability leader</strong>—grounded in discovery, fluent in engineering constraints, and focused on building products people trust. I move fluidly between <em>hands-on design</em>, <em>leading teams</em>, and <em>building systems and practices that scale</em>.
              </p>
              <p>
                I work as an <strong>IC</strong> when precision and speed matter, a <strong>player-coach</strong> when teams need direction and momentum, and an <strong>org builder</strong> when quality, systems, and culture need to scale with the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CoreStrengthsGrid — 5 distinct cards */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                  <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">Designing for Trust</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                I design for trust through <strong>transparency, explainability, and consistent UX patterns</strong>. Clear information hierarchy, predictable interactions, and proven UI best practices reduce cognitive load, help users understand <em>why the system behaves the way it does</em>, and build confidence over time—especially in <strong>data-dense and regulated environments</strong>.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">Discovery-Led Product Strategy</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                I ground decisions in <strong>stakeholder interviews, user research, and product analytics (Pendo)</strong>, translating insight into clear UX strategy, information architecture, and <em>execution-ready direction</em> that reduces ambiguity and accelerates delivery.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                  <FontAwesomeIcon icon={faSitemap} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">Expert Craft & Systems Thinking</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                I bring <strong>senior-level craft</strong> to interaction design, visual design, and usability, paired with systems thinking—<em>design systems</em>, <em>interaction models</em>, and <em>scalable UX architectures</em> that balance speed, quality, and consistency.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                  <FontAwesomeIcon icon={faCode} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">AI-Led, Code-Connected UX</h3>
              </div>
              <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                I use <strong>AI-augmented workflows</strong> (Figma MCP Server, Cursor, Claude) to rapidly move from concept to functional prototype—<em>aligning design and engineering early</em>, validating complex logic, and shortening time-to-value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ProvenImpactSection — stacked executive cards */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                <FontAwesomeIcon icon={faRocket} className="text-lg" />
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-600">Currently Founding Product Design Lead — Relo Metrics</h3>
            </div>
            <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed mb-6">
              Built and scaled Relo's product design foundation—instilling a discovery-led design culture, establishing design ops, design QA, and design-to-engineering handoffs, and launching the company's first design system. Embedded product analytics discipline using Pendo and Looker to ground roadmap and UX decisions in real client behavior.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 border border-blue-200/80 shadow-sm" aria-hidden>
                    <FontAwesomeIcon icon={faChartBar} className="text-xl" />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-600">Relo Census</h3>
                </div>
                <p className="font-sans text-base text-gray-700 leading-relaxed flex-grow mb-4">
                  0→1 sponsorship analytics platform built around Saved Views. Defined personas, information architecture, and a flexible view builder so teams can analyze sponsorship data their way and compose decision-ready dashboards.
                </p>
                <div className="flex items-start gap-2 text-green-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0 text-green-600" />
                  <span className="font-semibold text-sm">Faster analysis, clearer stories to stakeholders, stronger revenue conversations.</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 border border-blue-200/80 shadow-sm" aria-hidden>
                    <FontAwesomeIcon icon={faBolt} className="text-xl" />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-600">Relo Edge</h3>
                </div>
                <p className="font-sans text-base text-gray-700 leading-relaxed flex-grow mb-4">
                  End-to-end UX/UI redesign of Relo's flagship real-time analytics platform. Simplified information architecture, rebuilt core components, and clarified workflows to reduce friction across high-frequency analytical tasks.
                </p>
                <div className="flex items-start gap-2 text-green-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0 text-green-600" />
                  <span className="font-semibold text-sm">Higher adoption, better satisfaction, deeper engagement.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                <FontAwesomeIcon icon={faBuildingColumns} className="text-lg" />
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-600">VP, UX Design Lead — JPMorgan Chase</h3>
            </div>
            <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
              Scaled design from <strong>1 to ~8 designers + researcher</strong>, establishing <em>design systems and design-ops foundations</em> that improved usability, adoption, and delivery predictability across commercial banking platforms.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                <FontAwesomeIcon icon={faHeartPulse} className="text-lg" />
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-600">Senior Product Designer — Medable & Medidata</h3>
            </div>
            <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
              Led UX and design systems for <strong>regulated healthcare platforms</strong>, delivering <em>accessible, compliant, explainable workflows</em> while reducing engineering rework and increasing product clarity.
            </p>
          </div>
        </div>
      </section>

      {/* StartupAdvisoryCard — single supporting card */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm" aria-hidden>
                <FontAwesomeIcon icon={faHandshake} className="text-xl" />
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-600">
                Startup & Advisory Work
              </h2>
            </div>
            <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Founding Design Lead, Advisor, and Mentor</strong> for <strong>Alpha Recon</strong>, a platform transforming complex intelligence and risk data into clear, <em>decision-ready workflows</em>. Built the product <strong>from 0→1</strong>—establishing <strong>personas</strong>, <strong>design foundations</strong>, and a <strong>scalable design system</strong> while designing <strong>end-to-end UX</strong> for the MVP.
              </p>
              <p>
                Worked directly with <strong>AI engineers and computer scientists</strong> to translate early, complex data models into <em>usable product experiences</em>—shaping how raw signals became <strong>views, alerts, and actions</strong> analysts could trust and act on.
              </p>
              <p>
                My primary goal was to <em>ship a strong MVP</em> while shaping a clear <em>1–2 year vision</em> that enabled <strong>scale</strong>, <strong>differentiation</strong>, and <strong>lasting usability</strong>.
              </p>
              <p>
                Owned both <strong>craft and strategy</strong>: created <strong>design QA</strong> and <strong>design-to-engineering handoff</strong> processes, partnered with founders on <strong>usability and product direction</strong>, and embedded <strong>human-centered design</strong> as a core discipline <strong>from day one</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CaseStudiesIntro — View Case Studies button */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <button
              onClick={scrollToCaseStudies}
              className="group flex items-center gap-4 transition-all duration-500 ease-out hover:animate-none animate-subtle-bounce"
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
        </div>
      </section>

      {/* Case Studies Section — title and subtitle above grid */}
      <section id="case-studies" className="pt-4 pb-6 lg:pt-6 lg:pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-3">
              Featured Case Studies
            </h2>
            <p className="font-sans text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore my work which showcases how UX Research meets Interaction Design, Visual Design meets Front End Development, and AI meets human intuition.
            </p>
          </header>

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
