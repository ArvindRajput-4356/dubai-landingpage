
import React from 'react';
import { Building2, Calculator, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Feature } from '../types';

const industries: Feature[] = [
  {
    title: "Real Estate AI",
    icon: Building2,
    items: [
      "Lead routing & scoring",
      "WhatsApp AI broker assistant",
      "CRM integrations",
      "Property data automations",
      "Sales workflows"
    ]
  },
  {
    title: "Mortgage AI",
    icon: Calculator,
    items: [
      "Eligibility calculator automation",
      "Document extraction & classification",
      "Loan file verification workflows",
      "Bank comparison AI",
      "Customer onboarding"
    ]
  },
  {
    title: "Insurance AI",
    icon: ShieldCheck,
    items: [
      "Quote automation",
      "Claims processing",
      "Document intelligence",
      "AI underwriting support",
      "Chat-based customer service"
    ]
  }
];

interface IndustriesProps {
  onNavigate?: (page: string) => void;
}

const Industries: React.FC<IndustriesProps> = ({ onNavigate }) => {
  const handleCardClick = (title: string) => {
    if (title === "Mortgage AI" && onNavigate) {
      onNavigate('mortgage');
    } else if (title === "Real Estate AI" && onNavigate) {
      onNavigate('real-estate');
    } else if (title === "Insurance AI" && onNavigate) {
      onNavigate('insurance');
    }
  };

  const isClickable = (title: string) => 
    title === "Mortgage AI" || 
    title === "Real Estate AI" || 
    title === "Insurance AI";

  return (
    <section id="industries" className="py-24 bg-brand-blue relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            AI Solutions for <span className="text-brand-gold">High-Impact Industries</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tailored automation infrastructure for the UAE's most demanding sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(industry.title)}
              className={`group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/50 transition-all duration-300 hover:bg-slate-800/50 relative overflow-hidden flex flex-col ${isClickable(industry.title) ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <industry.icon size={100} className="text-brand-gold" />
              </div>
              
              <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="text-brand-gold w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                {industry.title}
                {isClickable(industry.title) && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" />}
              </h3>
              
              <ul className="space-y-3 flex-grow">
                {industry.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {isClickable(industry.title) && (
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-brand-gold uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view details
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#services" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-semibold group">
            Explore Industry Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
