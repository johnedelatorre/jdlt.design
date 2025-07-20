import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush, 
  faCode, 
  faChartLine, 
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
      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200"></div>
      
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
        <FontAwesomeIcon icon={career.icon} className="text-white text-2xl" />
      </div>
      <div className="ml-8 flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div 
          className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{career.title}</h3>
                <span className="text-sm text-gray-500 font-medium">{career.period}</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">{career.company}</p>
              <p className="text-gray-600 text-sm">{career.subtitle}</p>
            </div>
            <div className="ml-4">
              <FontAwesomeIcon 
                icon={isExpanded ? faChevronUp : faChevronDown} 
                className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </div>
        <div 
          className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-6 pb-8 pt-0 border-t border-gray-100">
            <ol className="space-y-4 mt-6">
              {career.accomplishments.map((accomplishment, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-900 text-white text-xs font-medium rounded-full flex-shrink-0 mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{accomplishment}</span>
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl">
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

            {/* Signature Quote */}
            <div className="max-w-3xl mx-auto mb-16">
              <blockquote className="text-2xl lg:text-3xl font-serif italic text-gray-800 leading-relaxed">
                "How do I explain what I do at a party? The short version is that I say I love to solve problems. I humanize technology. I bring ideas to life."
              </blockquote>
            </div>

            {/* Elegant divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 space-y-6 leading-relaxed">
              <p className="text-xl flex items-center gap-3">
                I'm John Delatorre, a Full-Stack Product Designer from New York 🇺🇸 with Peruvian roots 🇵🇪 and a proud father of two amazing daughters.
              </p>

              <p className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPaintBrush} className="text-blue-600 mt-1 flex-shrink-0" />
                My journey began in graphic design—working across print, branding, packaging, and animation—before evolving into a dual focus on UI design and front-end development, where I built responsive interfaces using HTML, CSS, SASS, and JavaScript while applying strong visual design principles.
              </p>

              <p>
                Over the years, I've grown into a designer who blends user research, visual systems thinking, and usability strategy to shape meaningful, data-rich product experiences. My tech background allows me to move fluidly between design and engineering—aligning vision, logic, and execution across teams.
              </p>

              <p>
                At Relo Metrics, I lead usability and design strategy for two core platforms:
              </p>

              <div className="space-y-4">
                <p>
                  <FontAwesomeIcon icon={faChartLine} className="text-green-600 mr-3" />
                  <strong>Relo Census:</strong> a sponsorship intelligence platform I helped build from the ground up, enabling brands and agencies to evaluate performance and make confident decisions faster.
                </p>

                <p>
                  <FontAwesomeIcon icon={faPaintBrush} className="text-purple-600 mr-3" />
                  <strong>Media Value Center (MVC):</strong> a flagship analytics tool I transformed through a full redesign focused on clarity, speed, and user engagement.
                </p>
              </div>

              <p className="flex items-start gap-3">
                <FontAwesomeIcon icon={faBuilding} className="text-orange-600 mt-1 flex-shrink-0" />
                I bring ideas to life with empathy, precision, and an iterative toolkit that includes Figma, UX Pilot, v0.dev, Cursor, ChatGPT, and Vercel.
              </p>

              <p className="flex items-center gap-3 text-lg font-medium">
                🇺🇸 🇵🇪
                <FontAwesomeIcon icon={faCode} className="text-gray-600" />
                I speak 3 languages: English, Spanish, and HTML.
              </p>
            </div>
          </div>

          {/* Signature in grey section */}
          <div className="mt-16 text-center">
            <img 
              src="/images/about/signature.png" 
              alt="John Delatorre Signature"
              className="mx-auto max-w-md h-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit developed over years of designing across various industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Design Systems & Prototyping Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🧩</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  Design Systems & Prototyping
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">Figma • FigJam • UX Pilot • v0.dev • Cursor • Miro • Webflow • Framer</p>
                </div>
                <div>
                  <p className="text-gray-700">Atomic Design • Tokens & Theming • Storybook • Responsive / Native UI</p>
                </div>
              </div>
            </div>

            {/* UX Research & Testing Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  UX Research & Testing
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">Pendo • LookBack • UserTesting.com • Mentimeter</p>
                </div>
                <div>
                  <p className="text-gray-700">Journey Mapping • Continuous Discovery • Design Thinking Workshops</p>
                </div>
              </div>
            </div>

            {/* Product Design & Validation Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🛠️</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  Product Design & Validation
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">Hi-Fidelity Prototypes • Visual Design Systems • QA Collaboration</p>
                </div>
                <div>
                  <p className="text-gray-700">LookBack.com • UserTesting.com • Design QA • UX Acceptance Testing</p>
                </div>
              </div>
            </div>

            {/* AI-Led UX Strategy Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  AI-Led UX Strategy
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">Prompt Engineering • Model Behavior Mapping • Insight-Driven UX/UI</p>
                </div>
                <div>
                  <p className="text-gray-700">ChatGPT • Claude • Generative Pattern Design • Feedback Loop Optimization</p>
                </div>
              </div>
            </div>

            {/* Documentation & Product Ops Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  Documentation & Product Ops
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">Jira • Notion • Confluence • Slack • Async Design Reviews</p>
                </div>
                <div>
                  <p className="text-gray-700">Design Systems Docs • Process Mapping • Remote Team Workflows</p>
                </div>
              </div>
            </div>

            {/* Design-to-Code Tech Stack Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">🧱</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900">
                  Design-to-Code Tech Stack
                </h3>
              </div>

              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <p className="text-gray-700">HTML5 • CSS3 • Tailwind CSS • Ant Design • Material UI • Storybook</p>
                </div>
                <div>
                  <p className="text-gray-700">Dev Handoff Documentation • UX Engineering Alignment • Scalable Component Libraries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Career Journey
            </h2>
            <p className="text-lg text-gray-600">
              My professional evolution and the experiences that shaped my design perspective.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Beyond Design
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When I'm not designing digital experiences, I find balance through family, music, adventure, and physical challenges that fuel my creativity and mental clarity.
            </p>
          </div>

          {/* Father of 2 Daughters */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl mr-3" />
                <h3 className="text-2xl font-serif font-semibold text-gray-900">Father of 2 Daughters</h3>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I am the proud father of two amazing daughters who inspire my work and keep life interesting. We share many wonderful moments together, from graduations to Mets games!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Miranda */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src="/images/about/daughtergraduation.png" 
                    alt="John with his daughter Miranda at graduation"
                    className="w-full h-80 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-purple-600 text-lg" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-gray-900">Miranda - 23 Years Old</h4>
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Following in the design footsteps
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  My daughter Miranda is currently pursuing a career in Product Design. 
                  It's incredible to see the next generation embrace the field I'm so 
                  passionate about, and I love mentoring her as she develops her own 
                  design perspective and skills. We also share a love for the New York 
                  Mets - our game day traditions are some of my favorites!
                </p>
              </div>

              {/* Paula */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src="/images/about/mydaughterpaula.png" 
                    alt="John with his daughter Paula"
                    className="w-full h-80 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faHeart} className="text-pink-600 text-lg" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-gray-900">Paula - 3 Years Old</h4>
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    Future bunny racer aspirant
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
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
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-2xl font-serif font-semibold text-gray-900">Hobbies & Things I Love</h3>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                When I'm not designing digital experiences, I find balance through music, 
                adventure, and physical challenges that fuel my creativity and mental clarity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Music & Guitar */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src="/images/about/guitars.png" 
                    alt="John's guitar collection"
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faMusic} className="text-yellow-600 text-xl" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-gray-900">Music & Guitar</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I've always been musically inclined and learned early on to play both guitar and 
                  piano by ear. When I was younger, I could play anything I listened to. Music has 
                  always been a huge source of expression, as well as a part of my creative process, 
                  especially when I hit a mental block. Sitting down at the piano or picking up a 
                  guitar helps me refocus.
                </p>
              </div>

              {/* Hiking & Trail Running */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src="/images/about/hiker.png" 
                    alt="John hiking in the mountains"
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faMountain} className="text-green-600 text-xl" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-gray-900">Hiking & Trail Running</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I've always considered myself a chaser of beautiful views. There's something about embarking 
                  on a 8 or 10-mile hike along the mountains in northern New Jersey. Hiking has been the best way for me to 
                  stay humble and connected to nature. My most memorable trip was a physical and mental trip up the 
                  Pyrenees in Spain—surreal terrain. Being out in nature is 
                  one of the few things that quells my mind. It's where I reset and get perspective on life.
                </p>
              </div>

              {/* CrossFit & Spartan Races */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <img 
                    src="/images/about/spartanrace.png" 
                    alt="John at a Spartan Race"
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faDumbbell} className="text-red-600 text-xl" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-gray-900">CrossFit & Spartan Races</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
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