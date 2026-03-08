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
  faHandshake,
  faRocket,
  faBuildingColumns,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';
import { scrollToCaseStudies } from '../utils/scrollUtils';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero — wider container, production-style typography */}
      <section className="pt-12 pb-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
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
          <div className="w-full">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 md:mb-5 tracking-tight">
              Product Design Lead for AI, Data, Enterprise Systems and Mobile Native
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              I started my career as a visual designer in advertising and marketing agencies, then moved into frontend software engineering before transitioning into discovery- and research-led product design. That combination of visual craft, technical fluency, and systems thinking shapes how I design products that make complex data and AI usable—clear interfaces, explainable decisions, and workflows people can trust.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              With <strong>15+ years</strong> across fintech, healthcare, and AI-driven analytics, I design <strong>0→1</strong> and <strong>enterprise-scale platforms</strong> by combining strong visual craft, systems thinking, and discovery-led UX. My work focuses on <strong>business outcomes</strong> and <strong>real user impact</strong>—driving adoption, retention, and <strong>long-term trust</strong> through clarity, consistency, and scalable UI design.
            </p>
            <div className="mt-12 md:mt-10 flex flex-col items-center gap-12 font-sans">
              <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-slate-600 mb-4">Platform Experience</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['0→1 Platforms', 'Enterprise Design Systems', 'AI-Driven Analytics Tools'].map((tag) => (
                    <span key={tag} className="px-3.5 py-2 bg-slate-100 text-slate-700 text-base font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-slate-600 mb-4">Focus Areas</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Data-Heavy SaaS Platforms', 'AI Analytics Systems', 'Design Systems', 'Dashboard UX', 'Native Mobile Product Design'].map((tag) => (
                    <span key={tag} className="px-3.5 py-2 bg-slate-100 text-slate-700 text-base font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg font-bold text-slate-600 mb-4">Technical Collaboration</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Figma', 'Design Tokens', 'Tailwind CSS', 'HTML/CSS', 'React Environments', 'Data Visualization'].map((tag) => (
                    <span key={tag} className="px-3.5 py-2 bg-slate-100 text-slate-700 text-base font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-16 md:mt-12">
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
        </div>
      </section>

      {/* Who I Am — single card, full content width */}
      <section className="py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 lg:p-12 shadow-sm">
            <div className="flex items-center md:items-start gap-3 mb-6">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-600">
                Who I Am
              </h2>
            </div>
            <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-loose">
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

      {/* Skills / Approach — 2x2 grid, scannable */}
      <section className="py-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center md:items-start gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">How I Build Trust</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                Trust through <strong>transparency, explainability, and consistent UX patterns</strong>. Clear hierarchy and predictable interactions reduce cognitive load and build confidence—especially in <strong>data-dense and regulated environments</strong>.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center md:items-start gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">How I Work with Teams</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                Decisions grounded in <strong>stakeholder interviews, user research, and product analytics (Pendo)</strong>—translating insight into clear UX strategy and <em>execution-ready direction</em> that reduces ambiguity and accelerates delivery.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center md:items-start gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faSitemap} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">How I Design Systems</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                <strong>Senior-level craft</strong> in interaction design, visual design, and usability—plus <em>design systems</em>, <em>interaction models</em>, and <em>scalable UX architectures</em> that balance speed, quality, and consistency.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center md:items-start gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faCode} className="text-lg" />
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-600">How I Work with Engineers & AI</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                <strong>AI-augmented workflows</strong> (Figma MCP Server, Cursor, Claude) to move from concept to functional prototype—<em>aligning design and engineering early</em> and shortening time-to-value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relo section — container with title, intro paragraph, product cards */}
      <section className="pt-8 pb-0 md:pt-10 md:pb-0 lg:pt-12 lg:pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center md:items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                <FontAwesomeIcon icon={faRocket} className="text-lg" />
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black">
                Currently Founding Product Design Lead — Relo Metrics
              </h2>
            </div>
            <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
              Built and scaled Relo's product design foundation—instilling a discovery-led design culture, establishing design ops, design QA, and design-to-engineering handoffs, and launching the company's first design system. Embedded product analytics discipline using Pendo and Looker to ground roadmap and UX decisions in real client behavior.
            </p>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col">
              <div className="flex items-center md:items-start gap-4 mb-5">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 border border-blue-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faChartBar} className="text-2xl" />
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-700">Relo Census</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed flex-grow mb-5">
                0→1 sponsorship analytics platform built around Saved Views. Defined personas, information architecture, and a flexible view builder so teams can analyze sponsorship data their way and compose decision-ready dashboards.
              </p>
              <div className="flex items-start gap-2 text-green-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0 text-green-600" />
                <span className="font-semibold text-sm">Faster analysis, clearer stories to stakeholders, stronger revenue conversations.</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col">
              <div className="flex items-center md:items-start gap-4 mb-5">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 border border-blue-200/80 shadow-sm flex-shrink-0" aria-hidden>
                  <FontAwesomeIcon icon={faBolt} className="text-2xl" />
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-700">Relo Edge</h3>
              </div>
              <p className="font-sans text-base text-gray-700 leading-relaxed flex-grow mb-5">
                End-to-end UX/UI redesign of Relo's flagship real-time analytics platform. Simplified information architecture, rebuilt core components, and clarified workflows to reduce friction across high-frequency analytical tasks.
              </p>
              <div className="flex items-start gap-2 text-green-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-base mt-1 flex-shrink-0 text-green-600" />
                <span className="font-semibold text-sm">Higher adoption, better satisfaction, deeper engagement.</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience — standalone cards, same vertical gap as between Relo and these cards */}
      <section className="pt-6 pb-8 md:pt-6 md:pb-10 lg:pt-6 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center md:items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                <FontAwesomeIcon icon={faBuildingColumns} className="text-lg" />
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-600">VP, UX Design Lead — JPMorgan Chase</h3>
            </div>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Scaled design from 1 to ~8 designers + researcher, establishing design systems and design-ops foundations that improved usability, adoption, and delivery predictability across commercial banking platforms.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center md:items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                <FontAwesomeIcon icon={faHeartPulse} className="text-lg" />
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-600">Senior Product Designer — Medable & Medidata</h3>
            </div>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Led UX and design systems for regulated healthcare platforms, delivering accessible, compliant, explainable workflows while reducing engineering rework and increasing product clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Startup & Advisory — paragraph structure, production-style typography */}
      <section className="py-8 md:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 lg:p-12 shadow-sm">
            <div className="flex items-center md:items-start gap-3 mb-8">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm flex-shrink-0" aria-hidden>
                <FontAwesomeIcon icon={faHandshake} className="text-xl" />
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-600">
                Startup & Advisory Work
              </h2>
            </div>
            <div className="font-sans text-gray-700 space-y-8">
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-700 mb-5">Alpha Recon</h3>
                <div className="space-y-5 text-base md:text-lg leading-loose">
                  <p>
                    Founding Design Lead and Advisor for <strong>Alpha Recon</strong>, a platform transforming complex intelligence and risk data into clear, <strong>decision-ready workflows</strong>. Built the product from <strong>0→1</strong>—establishing personas, design foundations, and a scalable design system while designing end-to-end UX for the MVP.
                  </p>
                  <p>
                    Worked directly with <strong>AI engineers and computer scientists</strong> to translate early, complex data models into usable <em>product experiences</em>—shaping how raw signals became <strong>views, alerts, and actions</strong> analysts could trust and act on.
                  </p>
                  <p>
                    Designed the platform's core interaction patterns, desktop workflows, and mobile experiences while building the design system from scratch, documenting components and tokens, and creating design-to-engineering handoff documentation.
                  </p>
                  <p>
                    My focus was hands-on product design—crafting the interface, mapping flows, and ensuring the system could scale as the platform evolved.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-700 mb-5">PrizeApp</h3>
                <div className="space-y-5 text-base md:text-lg leading-loose">
                  <p>
                    Founding Product Design and UX Lead for a native mobile platform connecting veterans with services, community programs, and partner organizations.
                  </p>
                  <p>
                    Established the platform's design foundations from the ground up—creating a tokenized design system and building a multi-theme architecture supporting both dark and light modes.
                  </p>
                  <p>
                    Designed the end-to-end product experience, mapping core user flows and mobile interaction patterns while implementing the design system using NativeWind, Tailwind, and ShadCN UI components.
                  </p>
                  <p>
                    Worked closely with research and product teams to test early concepts and prototypes, iterating on flows and interaction patterns based on user feedback to ensure the experience remained clear, accessible, and scalable as the platform evolved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies — section title, subtitle, cards unchanged */}
      <section id="case-studies" className="pt-8 pb-10 lg:pt-10 lg:pb-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Case Studies
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Selected product design work across analytics platforms, enterprise systems, and design systems.
            </p>
          </header>

          {/* Featured Recent Projects */}
          <div className="mb-6">
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
