import React from 'react';
import { Search, PenTool, Code2, Rocket, Headphones } from 'lucide-react';

const steps = [
  { icon: Search, title: "Discovery Audit", desc: "We analyze your workflows, bottlenecks, systems, and processes." },
  { icon: PenTool, title: "Blueprint & Architecture", desc: "We design the full automation + AI system tailored to your business." },
  { icon: Code2, title: "Development & Integration", desc: "Our engineering team builds your workflows, AI assistants, and system modules." },
  { icon: Rocket, title: "Deployment & Training", desc: "We implement the platform and train your full team." },
  { icon: Headphones, title: "Ongoing Support", desc: "Continuous improvements, new workflows, debugging, optimizations." },
];

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-navy mb-6">
            How We Transform Your Business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            A proven, data-driven framework to take you from manual chaos to automated efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:border-brand-blue group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-2xl transition-colors duration-300"></div>
                  <step.icon className="text-gray-400 group-hover:text-brand-blue transition-colors w-8 h-8 relative z-10" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;