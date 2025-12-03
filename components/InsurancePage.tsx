import React, { useEffect } from 'react';
import { ArrowLeft, Zap, Shield, FileText, BarChart3, MessageSquare, CheckCircle2, XCircle, ArrowRight, FileSearch } from 'lucide-react';

interface InsurancePageProps {
  onBack: () => void;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ onBack }) => {
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
              Insurance <span className="text-brand-blue">AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Automate quotes, claims processing, and fraud detection. Deliver instant payouts and reduce operational costs.
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
              <h3 className="text-xl font-bold text-brand-navy mb-3">Slow Claims</h3>
              <p className="text-gray-600 text-sm">Manual claim assessment takes weeks, leading to poor customer satisfaction and churn.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Fraud Leakage</h3>
              <p className="text-gray-600 text-sm">Undetected fraudulent claims cost insurers millions annually due to manual oversight.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">High Costs</h3>
              <p className="text-gray-600 text-sm">Heavy reliance on manual data entry and underwriting increases operational expenses.</p>
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">Instant Quote Engine</div>
                    <div className="text-xs text-green-600">0.8s Response Time</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">Vehicle Make</span>
                    <span className="font-bold text-brand-navy">Toyota Camry 2023</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">Driver Age</span>
                    <span className="font-bold text-brand-navy">34 Years</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <div className="text-xs text-brand-blue uppercase font-bold mb-1">Estimated Premium</div>
                    <div className="text-2xl font-bold text-brand-navy">1,250 AED</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Instant Quote Automation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Generate accurate insurance quotes in seconds based on risk profiles, vehicle data, and historical trends. Increase conversion rates by providing instant pricing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Dynamic Pricing Models
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> API Integration with Aggregators
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">AI Claims Processing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automate damage assessment using computer vision. Detect fraud patterns instantly and approve valid claims for immediate payout.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Image-based Damage Analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Automated Fraud Flags
                </li>
              </ul>
            </div>
            <div>
              <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <Shield className="text-green-500 w-6 h-6" />
                  <div>
                    <div className="text-brand-navy font-bold">Claim #9921</div>
                    <div className="text-xs text-gray-500">Auto Insurance • Minor Collision</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Damage Analysis</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Verified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Fraud Check</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Passed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                    <button className="w-full py-2 bg-brand-blue text-white rounded-lg text-sm font-bold">Approve Payout</button>
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
          <h2 className="text-3xl font-bold text-brand-navy mb-16 text-center">Automated Claims Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Claim Submission</h4>
              <p className="text-xs text-gray-500">User uploads photos via app</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <FileSearch className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">AI Analysis</h4>
              <p className="text-xs text-gray-500">Damage assessed & fraud checked</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Instant Payout</h4>
              <p className="text-xs text-gray-500">Approved claims paid instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">-60%</div>
              <div className="text-gray-300">Processing Costs</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">99%</div>
              <div className="text-gray-300">Fraud Detection</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">Instant</div>
              <div className="text-gray-300">Claim Payouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Ready to Modernise Insurance?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a free audit to see how AI can reduce costs and improve customer experience.
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

export default InsurancePage;
