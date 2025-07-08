import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import { personalInfo } from '../data/personalInfo';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero/About Me Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                Full Stack Product Design Leader
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>15+ years</strong> turning complex problems into delightful experiences—where <strong>User Research</strong> meets <strong>Interaction Design</strong>, <strong>Visual Design</strong> meets <strong>Front-End Development</strong>, and <strong>AI</strong> meets human intuition.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Currently <strong>Product Design Lead</strong> at <strong>Relo Metrics</strong>, where I'm revolutionizing <strong>sports analytics</strong> through two game-changing platforms:
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

            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore my work turning complex problems into delightful experiences across sports analytics, 
              healthcare technology, and AI-powered platforms. Each project showcases how User Research meets 
              Interaction Design, Visual Design meets Front-End Development, and AI meets human intuition.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 