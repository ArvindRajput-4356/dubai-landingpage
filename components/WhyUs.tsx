import React from 'react';
import { Shield, Globe2, Award, Lock, MessageSquare, Code2, TrendingUp, Briefcase } from 'lucide-react';

const reasons = [
  { icon: Briefcase, text: "DIFC/UAE Entity for client trust" },
  { icon: Globe2, text: "India Engineering Hub (Bangalore Tech Park)" },
  { icon: Code2, text: "Top Senior AI Engineers & Automation Specialists" },
  { icon: Award, text: "99.5% Delivery Success Rate" },
  { icon: Lock, text: "Enterprise-Level Security & Compliance" },
  { icon: MessageSquare, text: "Transparent Communication & Reporting" },
  { icon: Shield, text: "Custom builds—no \"template solutions\"" },
  { icon: TrendingUp, text: "Proven results in real estate, mortgage & insurance" }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            A Premium Engineering Team <br/>
            <span className="text-brand-gold">With Local Dubai Presence</span>
          </h2>
          <p className="text-slate-400">Trusted by forward-thinking companies.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-brand-dark/50 rounded-xl border border-slate-800 hover:border-brand-gold/30 transition-all">
              <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <reason.icon className="w-6 h-6" />
              </div>
              <p className="text-slate-300 font-medium">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;