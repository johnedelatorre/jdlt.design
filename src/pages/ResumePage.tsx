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
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
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
      setPdfHeight(`${Math.max(availableHeight, 600)}px`); // Consistent minimum height
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
  }, []);

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
          <div className="flex justify-between items-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Resume</h1>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2 text-xs" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden pdf-viewer-container">
            {isMobile && (
              <div className="bg-blue-50 border-b border-blue-200 p-3 text-center">
                <button
                  onClick={handleOpenInNewTab}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-xs" />
                  Open in New Tab for Better Mobile View
                </button>
              </div>
            )}
            <iframe
              src="/john-delatorre-ugarte-resume-2025.pdf"
              width="100%"
              height={pdfHeight}
              className="border-0"
              title="John de la Torre-Ugarte Resume"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
