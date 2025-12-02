
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
    <div className="min-h-screen bg-brand-dark text-slate-50 font-sans selection:bg-brand-gold selection:text-slate-900">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-display font-bold text-white tracking-tight cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo(0, 0);
            }}
          >
            EAI<span className="text-brand-gold"> SYSTEMS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('industries')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Industries</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('results')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Results</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('industries')} className="text-left text-slate-300 hover:text-white py-2">Industries</button>
            <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-white py-2">Services</button>
            <button onClick={() => scrollToSection('results')} className="text-left text-slate-300 hover:text-white py-2">Results</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-slate-300 hover:text-white py-2">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-brand-gold font-semibold py-2">Book Strategy Call</button>
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
