import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div 
      className={`page-transition ${isVisible ? 'page-visible' : 'page-hidden'}`}
    >
      {children}
    </div>
  );
};

export default PageTransition; 