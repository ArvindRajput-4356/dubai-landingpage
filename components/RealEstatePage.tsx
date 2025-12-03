import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Zap, BarChart3, MessageSquare, ArrowRight } from 'lucide-react';

interface RealEstatePageProps {
  onBack: () => void;
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-navy pt-20">

      {/* 1. Small Hero Section */}
      <section className="relative py-20 bg-brand-lightGrey border-b border-gray-200">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-brand-blue mb-8 transition-colors group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </button>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-brand-navy mb-6">
              Real Estate <span className="text-brand-blue">AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Automate lead qualification, property management, and client follow-ups. Close more deals with less manual work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The Problems We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Missed Leads</h3>
              <p className="text-gray-600 text-sm">Agents can't respond instantly 24/7, losing hot leads to competitors who reply faster.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Manual Data Entry</h3>
              <p className="text-gray-600 text-sm">Hours wasted manually entering data into CRMs instead of selling properties.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Outdated Inventory</h3>
              <p className="text-gray-600 text-sm">Portals showing sold units frustrate clients and damage brand reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our AI Solutions */}
      <section className="py-24 bg-brand-lightGrey">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-16 text-center">Our AI Solutions</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">WhatsApp AI Agent</div>
                    <div className="text-xs text-green-600">Online 24/7</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg rounded-tl-none text-sm text-gray-600">
                    Hi! I'm looking for a 2-bed in Downtown.
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg rounded-tr-none text-sm text-brand-navy ml-auto max-w-[90%]">
                    I have 3 units available matching your criteria. Would you like to see photos or schedule a viewing?
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">24/7 WhatsApp Assistant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Instantly qualify leads, answer property questions, and schedule viewings directly through WhatsApp. No human intervention needed until the lead is hot.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Instant Response Time
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Multi-language Support
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Smart Lead Routing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automatically score leads based on budget, timeline, and intent. Route high-value leads to your top agents instantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Prioritize Hot Leads
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> CRM Integration (Salesforce, HubSpot)
                </li>
              </ul>
            </div>
            <div>
              <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div>
                      <div className="font-bold text-brand-navy text-sm">Lead: John Doe</div>
                      <div className="text-xs text-gray-500">Budget: 5M AED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-bold">95/100</div>
                      <div className="text-[10px] text-gray-400">Score</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm opacity-60">
                    <div>
                      <div className="font-bold text-brand-navy text-sm">Lead: Sarah Smith</div>
                      <div className="text-xs text-gray-500">Budget: 1M AED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-600 font-bold">45/100</div>
                      <div className="text-[10px] text-gray-400">Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Example Workflow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-16 text-center">Automated Sales Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Inquiry</h4>
              <p className="text-xs text-gray-500">Lead comes from PropertyFinder/Ads</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">AI Qualification</h4>
              <p className="text-xs text-gray-500">Bot chats & qualifies intent</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Agent Handover</h4>
              <p className="text-xs text-gray-500">Hot lead booked directly in calendar</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">+45%</div>
              <div className="text-gray-300">Lead Conversion Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">-20h</div>
              <div className="text-gray-300">Manual Work Per Week</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">24/7</div>
              <div className="text-gray-300">Instant Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Ready to Automate Your Brokerage?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a free audit to see how much time and revenue you can unlock with AI.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
            Book a Free Automation Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default RealEstatePage;
