import React, { useEffect } from 'react';
import { ArrowLeft, Calculator, FileText, ShieldCheck, BarChart3, CheckCircle2, XCircle, ArrowRight, UploadCloud } from 'lucide-react';

interface MortgagePageProps {
  onBack: () => void;
}

const MortgagePage: React.FC<MortgagePageProps> = ({ onBack }) => {
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
              Mortgage <span className="text-brand-blue">AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Accelerate loan processing from days to minutes. Automate eligibility checks, document verification, and bank comparisons.
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
              <h3 className="text-xl font-bold text-brand-navy mb-3">Slow Approvals</h3>
              <p className="text-gray-600 text-sm">Manual processing takes days, frustrating clients and risking deal fall-throughs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Document Chaos</h3>
              <p className="text-gray-600 text-sm">Chasing clients for missing files and manually verifying data is error-prone.</p>
            </div>
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Compliance Risks</h3>
              <p className="text-gray-600 text-sm">Human error in checking debt ratios and eligibility can lead to costly rejections.</p>
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
                    <Calculator className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">Eligibility Engine</div>
                    <div className="text-xs text-green-600">Live Analysis</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Monthly Income</span>
                    <span className="font-bold text-brand-navy">AED 45,000</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Liabilities</span>
                    <span className="font-bold text-brand-navy">AED 12,500</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-gray-600">Max Loan Amount</span>
                    <span className="font-bold text-brand-blue">AED 3,250,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Instant Eligibility Checks</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Instantly calculate maximum loan amounts and eligibility based on income, liabilities, and current bank policies. No manual spreadsheets required.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Real-time Policy Updates
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Accurate Debt Burden Ratio (DBR)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Smart Document Processing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automatically extract data from Emirates IDs, salary certificates, and bank statements. Our AI classifies documents and flags missing information instantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> 99% Extraction Accuracy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" /> Auto-Renaming & Filing
                </li>
              </ul>
            </div>
            <div>
              <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <UploadCloud className="w-8 h-8 text-brand-blue" />
                </div>
                <p className="text-brand-navy font-bold mb-1">Processing Documents...</p>
                <p className="text-xs text-gray-500 mb-6">Reading Salary Certificate.pdf</p>

                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div className="bg-brand-blue h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Example Workflow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-navy mb-16 text-center">Automated Mortgage Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Application</h4>
              <p className="text-xs text-gray-500">Client uploads docs via portal</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-blue-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">AI Verification</h4>
              <p className="text-xs text-gray-500">Docs checked & data extracted</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-24 h-0.5 bg-gray-200"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs relative z-10">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-brand-navy mb-2">Pre-Approval</h4>
              <p className="text-xs text-gray-500">Generated instantly for review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">-70%</div>
              <div className="text-gray-300">Processing Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">0%</div>
              <div className="text-gray-300">Calculation Errors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-blue mb-2">2x</div>
              <div className="text-gray-300">Applications Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Ready to Streamline Mortgages?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a free audit to see how our AI can transform your loan processing.
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

export default MortgagePage;
