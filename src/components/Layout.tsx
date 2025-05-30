
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Navigation />
      <main className="relative">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;
