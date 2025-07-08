import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faCode, 
  faPaintBrush, 
  faUsers, 
  faLightbulb, 
  faCoffee,
  faCamera,
  faMountain,
  faLeaf,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { personalInfo } from '../data/personalInfo';

const AboutPage: React.FC = () => {
  const philosophyPoints = [
    {
      title: 'User-Centered Design',
      description: 'Every design decision should be rooted in understanding real user needs and behaviors through research and testing.'
    },
    {
      title: 'Iterative Process',
      description: 'Great design emerges through continuous iteration, feedback, and refinement rather than trying to get it perfect the first time.'
    },
    {
      title: 'Collaborative Innovation',
      description: 'The best solutions come from diverse perspectives working together, bridging design, engineering, and business goals.'
    },
    {
      title: 'Accessibility First',
      description: 'Inclusive design isn\'t an afterthought—it\'s fundamental to creating products that work for everyone.'
    }
  ];

  const skillCategories = [
    {
      title: 'Design Skills',
      icon: faPaintBrush,
      skills: personalInfo.skills.slice(0, 6)
    },
    {
      title: 'Technical Skills',
      icon: faCode,
      skills: personalInfo.skills.slice(6)
    }
  ];

  const interestIcons = {
    'Photography': faCamera,
    'Hiking': faMountain,
    'Coffee Culture': faCoffee,
    'Sustainable Design': faLeaf,
    'Tech Innovation': faRocket,
    'Travel': faUser
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBmeD0iMjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOWVhM2E4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvZmVzc2lvbmFsIFBob3RvPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                About Me
              </h1>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm {personalInfo.name}, a passionate product designer with over 8 years of experience 
                  creating meaningful digital experiences. My journey in design began with a fascination 
                  for how technology can solve real human problems.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with industry-leading companies 
                  like Relo, Medable, and Elysium, where I've designed everything from complex enterprise 
                  platforms to AI-powered analytics dashboards. I specialize in design systems, data 
                  visualization, and creating intuitive interfaces for complex workflows.
                </p>
                <p>
                  What drives me most is the intersection of beautiful design and functional problem-solving. 
                  I believe that great design should not only look stunning but also make people's lives 
                  easier and more productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              My Design Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every project I work on and every decision I make as a designer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="font-serif text-xl font-semibold text-black mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit developed over years of designing for various industries and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                  <FontAwesomeIcon icon={category.icon} className="text-xl" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-black mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 rounded-lg py-3 px-4 text-center">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              Career Journey
            </h2>
            <p className="text-lg text-gray-600">
              My professional evolution and the experiences that shaped my design perspective.
            </p>
          </div>

          <div className="space-y-8">
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < personalInfo.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-300" />
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-white text-lg" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-black">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              Beyond Design
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The interests and activities that inspire my creativity and keep me balanced.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 group-hover:bg-black text-gray-600 group-hover:text-white rounded-full mb-4 transition-colors duration-200">
                  <FontAwesomeIcon 
                    icon={interestIcons[interest as keyof typeof interestIcons] || faLightbulb} 
                    className="text-lg" 
                  />
                </div>
                <p className="text-gray-700 font-medium">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 