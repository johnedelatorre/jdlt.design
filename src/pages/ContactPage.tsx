import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalInfo } from '../data/personalInfo';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Information */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-black mb-6">
                Let's Work Together
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about design. Whether you have a specific project in mind or just want 
                to connect, I'd love to hear from you.
              </p>

              {/* Profile Photo */}
              <div className="mb-8">
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
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                      <FontAwesomeIcon icon={method.icon} className="text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{method.label}</p>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-black text-white rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-300">
                  I'm currently available for new opportunities and would love to discuss 
                  how we can bring your ideas to life through thoughtful design.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-semibold text-black mb-6">
                Send Me a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                  <p className="text-green-800">
                    Thank you for your message! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600" />
                  <p className="text-red-800">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 ${
                      errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 resize-vertical ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-black text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 