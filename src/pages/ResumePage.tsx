import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/resume.css';

const ResumePage = () => {
  const [pdfHeight, setPdfHeight] = useState('100vh');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera ?? '';
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    // Calculate height based on viewport, accounting for header and page header
    const calculateHeight = () => {
      const siteHeaderHeight = 80; // Site navigation header
      const pageHeaderHeight = 120; // Resume page header section
      const mobileToolbarHeight = isMobile ? 70 : 0; // Mobile toolbar when present
      const availableHeight = window.innerHeight - siteHeaderHeight - pageHeaderHeight - mobileToolbarHeight;
      
      if (isMobile) {
        // On mobile, use most of the available height
        setPdfHeight(`${Math.max(availableHeight - 40, 500)}px`);
      } else {
        setPdfHeight(`${Math.max(availableHeight, 600)}px`);
      }
    };

    checkMobile();
    calculateHeight();
    
    window.addEventListener('resize', () => {
      checkMobile();
      calculateHeight();
    });
    
    return () => window.removeEventListener('resize', () => {
      checkMobile();
      calculateHeight();
    });
  }, [isMobile]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/john-delatorre-ugarte-resume-2025.pdf';
    link.download = 'john-delatorre-ugarte-resume-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open('/john-delatorre-ugarte-resume-2025.pdf', '_blank');
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Resume</h1>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isMobile ? (
            // Elegant mobile experience with jovial messaging
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ready to dive into my story? 📖
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    My full resume is best experienced in a new tab where you can easily zoom, scroll, and explore my journey from front-end engineer to product design leader. Plus, you'll get all the native mobile PDF goodness! ✨
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleOpenInNewTab}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                    Open My Resume in New Tab
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    Download PDF Instead
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  Trust me, it's worth the extra tap! 😊
                </p>
              </div>
            </div>
          ) : (
            // Desktop PDF viewer
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden pdf-viewer-container">
              <iframe
                src="/john-delatorre-ugarte-resume-2025.pdf#zoom=FitW&view=FitH"
                width="100%"
                height={pdfHeight}
                className="border-0"
                title="John de la Torre-Ugarte Resume"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
