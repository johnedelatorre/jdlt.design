import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faRocket,
  faUsers,
  faClock,
  faCheckCircle,
  faLightbulb,
  faPalette,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '../data/personalInfo';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      external: false
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: personalInfo.contact.phone || '+1 (555) 123-4567',
      href: `tel:${personalInfo.contact.phone || '+15551234567'}`,
      external: false
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: personalInfo.contact.location,
      href: `https://maps.google.com?q=${encodeURIComponent(personalInfo.contact.location)}`,
      external: true
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndelatorre',
      href: personalInfo.contact.linkedin,
      external: true
    }
  ];

  if (personalInfo.contact.github) {
    contactMethods.push({
      icon: faGithub,
      label: 'GitHub',
      value: 'github.com/johndelatorre',
      href: personalInfo.contact.github,
      external: true
    });
  }

  const workApproach = [
    {
      icon: faLightbulb,
      title: 'Strategic Thinking',
      description: 'I start every project by understanding your business goals and user needs to create designs that drive results.'
    },
    {
      icon: faPalette,
      title: 'Creative Solutions',
      description: 'I bring fresh perspectives and innovative design solutions that stand out while maintaining usability.'
    },
    {
      icon: faCode,
      title: 'Technical Excellence',
      description: 'My designs are built with implementation in mind, ensuring seamless handoff to development teams.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const services = [
    'UX/UI Design',
    'Product Strategy',
    'Design Systems',
    'User Research',
    'Prototyping',
    'Brand Identity',
    'Web Design',
    'Mobile Design'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-black mb-6">
                Let's Work Together
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about design. Whether you have a specific project in mind or just want 
                to connect, I'd love to hear from you.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group w-full"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                      <FontAwesomeIcon icon={method.icon} className="text-lg" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{method.label}</p>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Profile & CTA */}
            <div className="text-center lg:text-left">
              {/* Profile Photo */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBmWT0iMjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOWVhM2E4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29udGFjdCBQaG90bzwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-8 bg-black text-white rounded-2xl">
                <FontAwesomeIcon icon={faRocket} className="text-3xl mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-300 mb-6">
                  I'm currently available for new opportunities and would love to discuss 
                  how we can bring your ideas to life through thoughtful design.
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-black mb-4">
              How I Work
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              My design process is collaborative, strategic, and focused on delivering results. 
              Here's what you can expect when working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workApproach.map((approach, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={approach.icon} className="text-xl" />
                </div>
                <h3 className="font-semibold text-xl text-black mb-3">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Availability Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-black mb-6">
                What I Do
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                I offer a comprehensive range of design services to help bring your vision to life.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability & Process */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-black mb-6">
                Current Availability
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Available Now</h3>
                    <p className="text-green-700">Currently accepting new projects for 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <FontAwesomeIcon icon={faClock} className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Timeline</h3>
                    <p className="text-blue-700">Most projects start within 1-2 weeks</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <FontAwesomeIcon icon={faUsers} className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-800 mb-1">Collaboration</h3>
                    <p className="text-purple-700">I work closely with your team throughout the process</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-900 text-white rounded-xl">
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Let's Discuss Your Project
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Every project is unique. Let's schedule a call to discuss your needs, timeline, and how I can help.
                  </p>
                  <a
                    href={`mailto:${personalInfo.contact.email}?subject=Project Discussion`}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 