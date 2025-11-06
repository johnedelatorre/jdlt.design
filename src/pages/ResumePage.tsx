import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/resume.css';

const ResumePage = () => {
  const [pdfHeight, setPdfHeight] = useState('100vh');

  useEffect(() => {
    // Calculate height based on viewport, accounting for header and page header
    const calculateHeight = () => {
      const siteHeaderHeight = 80; // Site navigation header
      const pageHeaderHeight = 120; // Resume page header section
      const availableHeight = window.innerHeight - siteHeaderHeight - pageHeaderHeight;
      setPdfHeight(`${Math.max(availableHeight, 600)}px`); // Minimum 600px height
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/john-delatorre-ugarte-resume-2025.pdf';
    link.download = 'john-delatorre-ugarte-resume-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <iframe
              src="/john-delatorre-ugarte-resume-2025.pdf#zoom=FitH"
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
