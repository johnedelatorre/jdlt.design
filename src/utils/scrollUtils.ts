export const scrollToCaseStudies = () => {
  const caseStudiesSection = document.getElementById('case-studies');
  if (caseStudiesSection) {
    // Position so the title appears right below the fixed header (80px header height)
    const headerHeight = 80;
    const y = caseStudiesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}; 