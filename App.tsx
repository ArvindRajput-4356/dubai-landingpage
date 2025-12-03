
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import CeoMessage from './components/CeoMessage';
import Footer from './components/Footer';
import MortgagePage from './components/MortgagePage';
import RealEstatePage from './components/RealEstatePage';
import InsurancePage from './components/InsurancePage';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'mortgage' | 'real-estate' | 'insurance';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Give React a tick to render Home before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigate = (page: string) => {
    if (page === 'mortgage' || page === 'real-estate' || page === 'insurance') {
      setCurrentPage(page as Page);
      window.scrollTo(0, 0);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById('industries');
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy font-sans selection:bg-brand-blue selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-sans font-bold text-brand-navy tracking-tight cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
            }}
          >
            EAI SYSTEMS<span className="text-brand-blue">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Home</button>
            <button onClick={() => scrollToSection('industries')} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Industries</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md shadow-blue-500/20">
              Book a Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-lg">
            <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); setMobileMenuOpen(false); }} className="text-left text-gray-600 hover:text-brand-blue py-2 font-medium">Home</button>
            <button onClick={() => scrollToSection('industries')} className="text-left text-gray-600 hover:text-brand-blue py-2 font-medium">Industries</button>
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-brand-blue py-2 font-medium">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-brand-blue py-2 font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-brand-blue py-2 font-medium">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-brand-blue text-white font-bold rounded-lg text-center mt-2">Book a Call</button>
          </div>
        )}
      </nav>

      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Industries onNavigate={handleNavigate} />
            <Services />
            <WhyUs />
            <Process />
            <CaseStudies />
            <Pricing />
            <CeoMessage />
          </>
        )}

        {currentPage === 'mortgage' && (
          <MortgagePage onBack={handleBackToHome} />
        )}

        {currentPage === 'real-estate' && (
          <RealEstatePage onBack={handleBackToHome} />
        )}

        {currentPage === 'insurance' && (
          <InsurancePage onBack={handleBackToHome} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
