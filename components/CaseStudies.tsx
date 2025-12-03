import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    title: "Real Estate Brokerage Automation",
    description: "End-to-end lead management and admin automation.",
    stats: [
      { label: "Admin Reduction", value: "63%" },
      { label: "Lead Quality", value: "3x" },
      { label: "Deal Pipeline", value: "+70%" }
    ]
  },
  {
    title: "Mortgage Workflow Automation",
    description: "Streamlined loan processing and document verification.",
    stats: [
      { label: "Processing Time", value: "12min" },
      { label: "Accuracy", value: "85%" },
      { label: "Eligibility", value: "Auto" }
    ]
  },
  {
    title: "Insurance Claims AI",
    description: "Automated triage and support for claims handling.",
    stats: [
      { label: "Triage", value: "Auto" },
      { label: "Manpower Reduced", value: "40%" },
      { label: "Support", value: "AI Agent" }
    ]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-brand-lightGrey relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-2">
              Case Studies
            </h2>
            <p className="text-gray-600">Real metrics from UAE clients.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-blue hover:text-blue-700 transition-colors mt-4 md:mt-0 font-semibold">
            View All Case Studies <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-t-4 border-t-brand-blue hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-8 min-h-[40px]">{study.description}</p>
              </div>
              <div className="space-y-6">
                {study.stats.map((metric, i) => (
                  <div key={i}>
                    <div className="text-3xl font-display font-bold text-brand-blue mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <button className="flex items-center justify-center gap-2 text-brand-blue w-full font-semibold">
            View All Case Studies <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;