export const scrollToCaseStudies = () => {
  const caseStudiesSection = document.getElementById('case-studies');
  if (caseStudiesSection) {
    const yOffset = -150; // Increased offset to provide proper spacing and fit all cards
    const y = caseStudiesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}; 