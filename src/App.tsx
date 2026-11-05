/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ExperienceView } from './views/ExperienceView';
import { CertificationsView } from './views/CertificationsView';
import { ContactView } from './views/ContactView';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      if (['home', 'about', 'experience', 'certifications', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-800">
      {/* Crisp Glassmorphic Header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content Body */}
      <main className="flex-1">
        <div key={currentPage} className="animate-fade-in">
          {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
          {currentPage === 'about' && <AboutView onNavigate={navigateTo} />}
          {currentPage === 'experience' && <ExperienceView />}
          {currentPage === 'certifications' && <CertificationsView />}
          {currentPage === 'contact' && <ContactView />}
        </div>
      </main>

      {/* Minimalist Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-10 h-10 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 shadow-md flex items-center justify-center transition-all duration-200 active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={PROFILE_DATA.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Hubungi via WhatsApp"
          className="group px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-4 h-4 text-blue-200" />
          <span className="hidden sm:inline">Hubungi Arya</span>
        </a>
      </div>
    </div>
  );
}
