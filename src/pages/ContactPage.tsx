import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt
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

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Contact Information */}
            <div className="max-w-2xl mx-auto">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                Let's Work Together
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about design. Whether you have a specific project in mind or just want 
                to connect, I'd love to hear from you.
              </p>

              {/* Profile Photo */}
              <div className="mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
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

              {/* Contact Methods */}
              <div className="space-y-6 max-w-lg mx-auto">
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

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-black text-white rounded-lg max-w-lg mx-auto">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-300">
                  I'm currently available for new opportunities and would love to discuss 
                  how we can bring your ideas to life through thoughtful design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 