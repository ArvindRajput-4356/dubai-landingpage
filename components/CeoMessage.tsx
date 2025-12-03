import React from 'react';
import { Quote } from 'lucide-react';

const CeoMessage: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-transparent border border-blue-200 rounded-3xl p-8 md:p-12 relative">
          <div className="absolute top-8 left-8 text-brand-blue opacity-10">
            <Quote size={48} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-6 leading-relaxed">
                "We Build Systems That Replace Manual Work and Drive Real Results."
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                Our mission is to help companies in the UAE scale faster by eliminating unnecessary manual work.
                With a strong engineering team in Bangalore and a Dubai-based operational presence, we deliver world-class automation and AI solutions fully tailored to the local market.
              </p>
              <div>
                <div className="text-brand-navy font-bold text-lg">Erkan Balci</div>
                <div className="text-brand-blue text-sm">Founder, Nova Automations</div>
              </div>
            </div>

            {/* Simple Avatar Placeholder / Initial */}
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-blue-50 border-2 border-brand-blue/20 flex items-center justify-center text-4xl font-display font-bold text-brand-blue">
                EB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;