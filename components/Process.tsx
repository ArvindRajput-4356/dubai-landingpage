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
    <section className="py-24 bg-gradient-to-b from-brand-blue to-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            We Deliver Fast, Reliable, and Scalable Results
          </h2>
          <p className="text-slate-400">Our proven framework for digital transformation.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-gold group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-300">
                  <step.icon className="text-slate-400 group-hover:text-brand-gold transition-colors w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 px-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;