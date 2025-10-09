import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding,
  faChevronDown,
  faChevronUp,
  faHeart,
  faGraduationCap,
  faMusic,
  faMountain,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';

// Career data with detailed accomplishments
const careerData = [
  {
    id: 'relo-current',
    title: 'Product Design Lead',
    company: 'Relo Metrics',
    period: '2023 - Current',
    subtitle: 'AI-Powered Sponsorship Intelligence for Sports Brands & Agencies',
    icon: faBuilding,
    accomplishments: [
      'Own: end-to-end UX and design strategy for Relo Census and the Media Value Center (MVC), two core AI-driven analytics platforms used by global sports sponsors and agencies.',
      'Collaborate: closely with PMs, engineering, and stakeholders to align product vision with scalable, human-first design systems.',
      'Prototype: rapidly in v0.dev and validate UI flows in UX Pilot using heatmaps and behavioral feedback.',
      'Deploy: high-fidelity, interactive prototypes via Vercel for internal demos and client validation—accelerating decision-making and iteration cycles.',
      'Research: user behavior, conduct experience mapping, and lead workshops to define and refine product journeys.',
      'Analyze: engagement and friction points using Pendo and Looker to inform iterative design improvements.',
      'Tools: Figma, FigJam, v0.dev, UX Pilot, Vercel, Pendo, Looker, UserTesting.com, Miro, Ant Design, HTML, CSS.'
    ]
  },
  {
    id: 'medable',
    title: 'Product Design Lead',
    company: 'Medable',
    period: '2020 - 2023',
    subtitle: 'A Clinical Trials Platform',
    icon: faBuilding,
    accomplishments: [
      'Led: product design strategy for Medable\'s clinical trial platform, focusing on patient engagement and data collection workflows.',
      'Designed: intuitive interfaces for clinical researchers, site coordinators, and study participants across web and mobile platforms.',
      'Collaborated: with cross-functional teams to streamline complex clinical trial processes and improve user adoption rates.',
      'Conducted: user research and usability testing to validate design decisions and optimize participant experience.',
      'Developed: design systems and component libraries to ensure consistency across multiple product offerings.'
    ]
  },
  {
    id: 'medidata',
    title: 'Senior Product Designer',
    company: 'Medidata Solutions',
    period: '2019 - 2020',
    subtitle: 'A Clinical Trials Platform',
    icon: faBuilding,
    accomplishments: [
      'Designed: user interfaces for Medidata\'s clinical trial management platform, serving pharmaceutical companies worldwide.',
      'Created: responsive web applications for clinical data collection and analysis tools.',
      'Worked: closely with product managers and engineers to translate complex requirements into intuitive user experiences.',
      'Established: design patterns and guidelines for consistent user interface elements across the platform.'
    ]
  },
  {
    id: 'jpmorgan',
    title: 'UX Design Team Lead',
    company: 'JPMorgan Chase',
    period: '2017 - 2019',
    subtitle: 'Tier 1 Commercial Banking',
    icon: faBuilding,
    accomplishments: [
      'Led: UX design team for JPMorgan Chase\'s commercial banking digital transformation initiatives.',
      'Managed: design strategy for enterprise banking applications serving corporate clients and relationship managers.',
      'Conducted: stakeholder workshops and user research to identify pain points in existing banking workflows.',
      'Delivered: high-fidelity prototypes and design specifications for development teams.',
      'Mentored: junior designers and established UX best practices across the organization.'
    ]
  },
  {
    id: 'marketaxess',
    title: 'Senior Product Designer',
    company: 'MarketAxess',
    period: '2016 - 2017',
    subtitle: 'A B2B Trading Platform',
    icon: faBuilding,
    accomplishments: [
      'Designed: user interfaces for MarketAxess\'s electronic bond trading platform used by institutional investors.',
      'Created: data visualization tools and trading interfaces to help users make informed investment decisions.',
      'Collaborated: with traders and portfolio managers to understand complex financial workflows and requirements.',
      'Optimized: user experience for high-frequency trading environments where speed and accuracy are critical.'
    ]
  }
];

// Define a type for careerData items
type CareerType = typeof careerData[0];

// CareerItem component for expandable career entries
const CareerItem: React.FC<{ career: CareerType }> = ({ career }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex items-start">
      <div className="absolute left-4 md:left-10 top-12 md:top-20 bottom-0 w-0.5 bg-gray-200"></div>
      
      <div className="w-8 h-8 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
        <FontAwesomeIcon icon={career.icon} className="text-white text-sm md:text-2xl lg:text-3xl" />
      </div>
      <div className="ml-4 md:ml-10 flex-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        <div 
          className="p-6 md:p-10 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 mr-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 lg:mb-0 leading-tight">{career.title}</h3>
                <span className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">{career.period}</span>
              </div>
              <p className="text-blue-600 font-medium mb-4 text-base sm:text-lg md:text-xl leading-relaxed">{career.company}</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{career.subtitle}</p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <FontAwesomeIcon 
                icon={isExpanded ? faChevronUp : faChevronDown} 
                className={`text-gray-400 transition-transform duration-300 text-lg ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </div>
        <div 
          className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-6 md:px-10 pb-8 md:pb-10 pt-0 border-t border-gray-100">
            <ol className="space-y-4 md:space-y-8 mt-6 md:mt-8">
              {career.accomplishments.map((accomplishment, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 md:w-10 md:h-10 bg-gray-900 text-white text-xs md:text-base font-medium rounded-full flex-shrink-0 mr-3 md:mr-6 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{accomplishment}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Photo and Quote */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl mx-auto">
                  <img 
                    src="/images/about/aboutmephoto.png" 
                    alt="John Delatorre - Full-Stack Product Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Signature Quote - Much More Prominent */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-800 leading-tight sm:leading-tight md:leading-relaxed px-2 sm:px-4">
                "How do I explain what I do at a party? The short version is that I say I love to solve problems. I humanize technology. I bring ideas to life."
              </blockquote>
            </div>

            {/* Elegant divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 md:mb-16 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 space-y-12 md:space-y-16 leading-relaxed">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center">
              <strong>I'm John DeLaTorre</strong>—a Full-Stack Product Designer from <strong>New York</strong> 🇺🇸 with <strong>Peruvian roots</strong> 🇵🇪 and a proud dad of two amazing daughters.
            </p>

            {/* Mission • Legacy • Service */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 flex items-center">
                🎯 Mission • Legacy • Service
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                I help <strong>build and scale mission-driven startups</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-lg sm:text-xl md:text-xl leading-relaxed">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Mission:</strong> outcomes over outputs.
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Legacy:</strong> a trust-first system and operating cadence teams <em>choose</em> to use.
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Service:</strong> grow people and unblock delivery so the right things ship—efficiently.
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Mode */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                🧭 Leadership Mode — IC → Player-Coach → Org-Builder
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                I'm comfortable starting as a <strong>founding IC</strong> where risk is highest. Then I evolve into a <strong>player-coach</strong>—mentoring designers, partnering closely with PM/Eng, and standardizing how we ship. As PMF and revenue mature, I <strong>scale a small, senior, outcomes-driven team</strong> and step into <strong>org-builder</strong>—without losing the ability to roll up my sleeves.
              </p>
            </div>

            {/* Origin */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                🎨 Origin — Design + Code
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                I began in graphic design (print, branding, packaging, motion), then moved into <strong>frontend</strong> and <strong>design systems</strong> before they were standard—building responsive interfaces with HTML/CSS/JS. That fluency lets me align <strong>vision, logic, and execution</strong> across design and engineering.
              </p>
            </div>

            {/* Approach & Stack */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                ⚙️ Approach & Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-lg sm:text-xl md:text-xl leading-relaxed">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Discovery → Decisions:</strong> Pendo, interviews, and stakeholder input distilled into <strong>one-page briefs</strong> with KPIs/KRs.
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Systems → Speed:</strong> Tokens + components (Figma/Storybook) and <strong>Trust-UX</strong> patterns (confidence, provenance, audit/appeals).
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Proto → Ship:</strong> <strong>Figma MCP → Cursor / Claude</strong> for <strong>code-accurate</strong> prototypes; clean design-to-code handoff.
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Ops → Cadence:</strong> Lightweight Jira/Notion rituals to keep teams aligned and shipping.
                  </div>
                </div>
              </div>
            </div>

            {/* Team Building & Leadership */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                👥 Team Building & Leadership
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                I <strong>hire product designers with research muscle</strong>, coach them to tie every artifact to <strong>business goals, KPIs, and KRs</strong>, and install an <strong>operating system</strong> (tokens, components, decision reviews, coded prototypes).
              </p>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                At <strong>JPMorgan Chase</strong> (VP Design Lead), I <strong>scaled from 1 → 8</strong> (6–8 designers + 1 researcher) for Commercial Banking in ~12 months—sequencing hires to business needs and lifting throughput, adoption, and quality. Earlier, I also <strong>scaled frontend engineering teams</strong>, so my systems and handoffs reduce rework and increase velocity.
              </p>
            </div>

            {/* Work I'm proud of */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                🚀 Work I'm proud of
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="text-lg sm:text-xl md:text-xl leading-relaxed">
                    <strong>Relo Census</strong> — Sponsorship intelligence platform I helped build <strong>from the ground up</strong>. Clear, scalable UX so brands/agencies evaluate performance and decide faster.<br />
                    <em className="text-gray-600">Result: smarter decisions, stronger revenue impact, happier users.</em>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="text-lg sm:text-xl md:text-xl leading-relaxed">
                    <strong>Relo Edge (a.k.a. Media Value Center)</strong> — Full redesign of the flagship analytics tool focused on <strong>clarity, speed, and engagement</strong>.<br />
                    <em className="text-gray-600">Result: higher adoption, better satisfaction, more engagement.</em>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="text-lg sm:text-xl md:text-xl leading-relaxed">
                    <strong>Medable — Nucleus Design System</strong> — System for global clinical-trial products; cut inconsistency and rework while improving shipping cadence.
                  </div>
                </div>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                🧠 Principles
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                <strong>Evidence before elegance</strong> (discovery → brief → prototype → scale/kill) • <strong>Systems thinker</strong> • <strong>Small, senior, outcomes-driven</strong> (every deliverable maps to a metric)
              </p>
            </div>

            {/* Tools */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                🧰 Tools I reach for
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                Figma • Tokens/Storybook • <strong>MCP Server → Cursor</strong> • Claude • v0.dev • UX Pilot • Jira • Notion • Vercel
              </p>
            </div>

            {/* Languages */}
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                🇺🇸 🇵🇪 💻 <strong>Languages:</strong> English, Spanish, and—of course—<strong>HTML</strong>.
              </p>
            </div>
          </div>

          {/* Signature in grey section */}
          <div className="mt-12 md:mt-16 text-center">
            <img 
              src="/images/about/signature.png" 
              alt="John Delatorre Signature"
              className="mx-auto max-w-sm md:max-w-md h-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8">
              Skills & Expertise
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              A comprehensive toolkit developed over years of designing across various industries.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
            {/* Design Systems & Prototyping Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">🧩</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  Design Systems & Prototyping
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Figma • FigJam • UX Pilot • v0.dev • Cursor • Miro • Webflow • Framer</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Atomic Design • Tokens & Theming • Storybook • Responsive / Native UI</p>
                </div>
              </div>
            </div>

            {/* UX Research & Testing Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  UX Research & Testing
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Pendo • LookBack • UserTesting.com • Mentimeter</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Journey Mapping • Continuous Discovery • Design Thinking Workshops</p>
                </div>
              </div>
            </div>

            {/* Product Design & Validation Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">🛠️</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  Product Design & Validation
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Hi-Fidelity Prototypes • Visual Design Systems • QA Collaboration</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">LookBack.com • UserTesting.com • Design QA • UX Acceptance Testing</p>
                </div>
              </div>
            </div>

            {/* AI-Led UX Strategy Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">🤖</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  AI-Led UX Strategy
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Prompt Engineering • Model Behavior Mapping • Insight-Driven UX/UI</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">ChatGPT • Claude • Generative Pattern Design • Feedback Loop Optimization</p>
                </div>
              </div>
            </div>

            {/* Documentation & Product Ops Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">📚</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  Documentation & Product Ops
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Jira • Notion • Confluence • Slack • Async Design Reviews</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Design Systems Docs • Process Mapping • Remote Team Workflows</p>
                </div>
              </div>
            </div>

            {/* Design-to-Code Tech Stack Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">🧱</div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-semibold text-gray-900 leading-tight">
                  Design-to-Code Tech Stack
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8 flex-1">
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">HTML5 • CSS3 • Tailwind CSS • Ant Design • Material UI • Storybook</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-700 leading-relaxed">Dev Handoff Documentation • UX Engineering Alignment • Scalable Component Libraries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Career Journey
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              My professional evolution and the experiences that shaped my design perspective.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-4 md:left-10 top-8 bottom-8 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-10 md:space-y-16">
              {careerData.map((career) => (
                <CareerItem 
                  key={career.id} 
                  career={career} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Design Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Beyond Design
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When I'm not designing digital experiences, I find balance through family, music, adventure, and physical challenges that fuel my creativity and mental clarity.
            </p>
          </div>

          {/* Father of 2 Daughters */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-10 md:mb-12">
              <div className="flex justify-center items-center mb-6">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl md:text-3xl mr-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900">Father of 2 Daughters</h3>
              </div>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg sm:text-xl md:text-2xl">
                I am the proud father of two amazing daughters who inspire my work and keep life interesting. We share many wonderful moments together, from graduations to Mets games!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              {/* Miranda */}
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-8">
                  <img 
                    src="/images/about/daughtergraduation.png" 
                    alt="John with his daughter Miranda at graduation"
                    className="w-full h-72 md:h-80 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-purple-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-900">Miranda - 23 Years Old</h4>
                </div>
                <div className="text-center mb-6">
                  <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-base md:text-lg font-medium">
                    Following in the design footsteps
                  </span>
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl leading-relaxed text-center">
                  My daughter Miranda is currently pursuing a career in Product Design. 
                  It's incredible to see the next generation embrace the field I'm so 
                  passionate about, and I love mentoring her as she develops her own 
                  design perspective and skills. We also share a love for the New York 
                  Mets - our game day traditions are some of my favorites!
                </p>
              </div>

              {/* Paula */}
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-8">
                  <img 
                    src="/images/about/mydaughterpaula.png" 
                    alt="John with his daughter Paula"
                    className="w-full h-72 md:h-80 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faHeart} className="text-pink-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-900">Paula - 3 Years Old</h4>
                </div>
                <div className="text-center mb-6">
                  <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-base md:text-lg font-medium">
                    Future bunny racer aspirant
                  </span>
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl leading-relaxed text-center">
                  And my very lively three-year-old daughter Paula, who in contrast aspires 
                  to be a bunny rabbit. Her creativity and boundless imagination remind me 
                  daily why designing for delight and wonder is so important in everything 
                  we create. She keeps our family life full of joy and surprises!
                </p>
              </div>
            </div>
          </div>

          {/* Hobbies & Things I Love */}
          <div>
            <div className="text-center mb-10 md:mb-12">
              <div className="flex justify-center items-center mb-6">
                <FontAwesomeIcon icon={faHeart} className="text-blue-600 text-2xl md:text-3xl mr-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900">Hobbies & Things I Love</h3>
              </div>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg sm:text-xl md:text-2xl">
                When I'm not designing digital experiences, I find balance through music, 
                adventure, and physical challenges that fuel my creativity and mental clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Music & Guitar */}
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-8">
                  <img 
                    src="/images/about/guitars.png" 
                    alt="John's guitar collection"
                    className="w-full h-56 md:h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faMusic} className="text-yellow-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gray-900">Music & Guitar</h4>
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl leading-relaxed">
                  I've always been musically inclined and learned early on to play both guitar and 
                  piano by ear. When I was younger, I could play anything I listened to. Music has 
                  always been a huge source of expression, as well as a part of my creative process, 
                  especially when I hit a mental block. Sitting down at the piano or picking up a 
                  guitar helps me refocus.
                </p>
              </div>

              {/* Hiking & Trail Running */}
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-8">
                  <img 
                    src="/images/about/hiker.png" 
                    alt="John hiking in the mountains"
                    className="w-full h-56 md:h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faMountain} className="text-green-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gray-900">Hiking & Trail Running</h4>
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl leading-relaxed">
                  I've always considered myself a chaser of beautiful views. There's something about embarking 
                  on a 8 or 10-mile hike along the mountains in northern New Jersey. Hiking has been the best way for me to 
                  stay humble and connected to nature. My most memorable trip was a physical and mental trip up the 
                  Pyrenees in Spain—surreal terrain. Being out in nature is 
                  one of the few things that quells my mind. It's where I reset and get perspective on life.
                </p>
              </div>

              {/* CrossFit & Spartan Races */}
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-8">
                  <img 
                    src="/images/about/spartanrace.png" 
                    alt="John at a Spartan Race"
                    className="w-full h-56 md:h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faDumbbell} className="text-red-600 text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gray-900">CrossFit & Spartan Races</h4>
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-xl leading-relaxed">
                  During COVID, I built a CrossFit-style gym in my garage and started taking fitness more 
                  seriously. There's something about pushing yourself through Wods that requires the same type of problem 
                  solving as functional training and Spartan races. I've always needed something active to clear my 
                  head, and these types of workouts give me that clarity. I enjoy the intensity and variety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 