export const scrollToCaseStudies = () => {
  const caseStudiesSection = document.getElementById('case-studies');
  if (caseStudiesSection) {
    const yOffset = -80; // Offset to provide spacing above the title
    const y = caseStudiesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}; 