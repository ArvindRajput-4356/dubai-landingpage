import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter Automation",
    price: "2,500 AED",
    features: ["Basic workflows", "Simple integrations", "AI assistant (small knowledge base)", "Email + WhatsApp notifications"],
  },
  {
    name: "Professional",
    price: "7,500 AED",
    recommended: true,
    features: ["Multi-step workflows", "CRM integrations", "Document AI", "Custom automation dashboard", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Full operational OS", "Dedicated engineer", "Enterprise AI models", "API integrations", "SLA support", "Custom training", "24/7 WhatsApp support"],
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-lightGrey">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Simple, Transparent, <br className="md:hidden" /> Growth-Friendly Pricing
          </h2>
          <p className="text-gray-600">Choose the plan that fits your scale.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 h-full flex flex-col ${tier.recommended
                  ? 'bg-white border-2 border-brand-blue shadow-xl scale-105 z-10'
                  : 'bg-white border border-gray-200 hover:border-brand-blue/50 hover:shadow-lg'
                }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-medium text-gray-600 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-brand-navy mb-6">
                {tier.price} <span className="text-sm font-normal text-gray-500">{tier.price !== 'Custom' && '/month'}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className={`w-5 h-5 shrink-0 ${tier.recommended ? 'text-brand-blue' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${tier.recommended
                  ? 'bg-brand-blue text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                  : 'bg-gray-100 text-brand-navy hover:bg-gray-200'
                }`}>
                {tier.price === 'Custom' ? 'Request Custom Quote' : 'Get Started'}
                {tier.price === 'Custom' && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;