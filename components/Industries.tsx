
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
    <section id="industries" className="py-32 bg-brand-lightGrey relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-navy mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Tailored automation infrastructure for the UAE's most demanding sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(industry.title)}
              className={`group p-10 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col ${isClickable(industry.title) ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <industry.icon size={120} className="text-brand-blue" />
              </div>

              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="text-brand-blue w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                {industry.title}
              </h3>

              <ul className="space-y-4 flex-grow mb-8">
                {industry.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {isClickable(industry.title) && (
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-brand-blue font-semibold group-hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
