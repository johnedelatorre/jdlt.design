import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectNavigator from './ProjectNavigator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ProjectNavigator />
    </div>
  );
};

export default Layout; 