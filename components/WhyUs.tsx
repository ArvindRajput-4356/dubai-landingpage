import React from 'react';
import { Shield, Globe2, Award, Lock, MessageSquare, Code2, TrendingUp, Briefcase } from 'lucide-react';

const reasons = [
  { icon: Briefcase, title: "DIFC/UAE Entity", desc: "Registered and compliant for your peace of mind." },
  { icon: Globe2, title: "Global Engineering Hub", desc: "Top-tier talent from our Bangalore tech park." },
  { icon: Code2, title: "Senior Engineers", desc: "Expert developers, not junior generalists." },
  { icon: Award, title: "99.5% Success Rate", desc: "Proven track record of delivering on time." },
];

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-lightGrey border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-navy mb-6">
              About EAI Systems
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
              We are a premium automation and AI consultancy dedicated to transforming modern businesses. By combining enterprise-grade engineering with deep industry expertise, we build intelligent systems that drive real growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Headquartered in Dubai with a global engineering hub, we bridge the gap between complex technology and business value. We don't just build software; we engineer efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-navy mb-1">{reason.title}</h3>
                <p className="text-xs text-gray-500">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;