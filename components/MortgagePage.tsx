
import React, { useEffect } from 'react';
import { ArrowLeft, Calculator, FileText, ShieldCheck, BarChart3, Smartphone, CheckCircle2, ScanLine, UploadCloud, Banknote } from 'lucide-react';

interface MortgagePageProps {
  onBack: () => void;
}

const MortgagePage: React.FC<MortgagePageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 pt-20">
      
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              AI-Powered <span className="text-brand-gold">Mortgage Journey</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              How We Simplify Your Mortgage Process with Automation & Intelligence. 
              Reduce turnaround times from days to minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Automated Eligibility Calculator */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="glass-card p-6 rounded-2xl border border-brand-gold/20 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="text-brand-gold w-5 h-5" />
                  <span className="font-semibold text-white">Eligibility Engine</span>
                </div>
                <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Live Analysis</div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-3 rounded-lg flex justify-between">
                  <span className="text-slate-400 text-sm">Monthly Income</span>
                  <span className="text-white font-mono">AED 45,000</span>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg flex justify-between">
                  <span className="text-slate-400 text-sm">Liabilities</span>
                  <span className="text-white font-mono">AED 12,500</span>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">Eligibility Score</span>
                    <span className="text-brand-gold font-bold">94%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-gold to-yellow-200 w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative BG */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">1</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Automated Eligibility Calculator</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We instantly analyse your income, credit profile, and financial data to calculate eligibility in seconds — no manual paperwork and no credit score impact.
            </p>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
              Start Your Smart Mortgage
            </button>
          </div>
        </div>
      </section>

      {/* Step 2: Smart Document Extraction */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">2</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Smart Document Extraction & Classification</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Upload once — our AI reads documents such as ID proofs, payslips, bank statements, and tax records, automatically extracting required details and sorting them into the correct categories.
            </p>
          </div>

          <div className="relative">
             {/* Visual UI Mockup */}
             <div className="glass-card p-8 rounded-2xl border-dashed border-2 border-slate-700 relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <UploadCloud className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-slate-300 font-medium mb-2">Drag & Drop Files</p>
                <p className="text-slate-500 text-sm mb-6">ID, Payslips, Bank Statements</p>
                
                {/* Floating Processed File */}
                <div className="absolute bottom-6 right-6 bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-700 flex items-center gap-3 animate-float">
                  <div className="bg-green-500/20 p-1.5 rounded">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white font-medium">EmiratesID.pdf</div>
                    <div className="text-[10px] text-slate-400">Data Extracted • Verified</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 3: Automated Loan File Verification */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl max-w-sm mx-auto">
               <div className="flex items-center gap-3 mb-6">
                 <ShieldCheck className="text-brand-gold w-6 h-6" />
                 <span className="text-white font-semibold">Compliance Check</span>
               </div>
               <div className="space-y-3">
                 {[
                   "Identity Verification (KYC)",
                   "Credit Bureau Check",
                   "Employment Status",
                   "Debt-to-Burden Ratio"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                     <span className="text-sm text-slate-300">{item}</span>
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                 ))}
               </div>
               <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                 <span className="text-xs text-slate-500 uppercase tracking-widest">Status</span>
                 <div className="text-green-400 font-bold mt-1">APPROVED FOR PROCESSING</div>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">3</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Automated Loan File Verification</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our automation engine performs consistency checks, fraud detection, and compliance verification within minutes instead of days — reducing human review time by 70%.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: Intelligent Bank Comparison */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">4</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Intelligent Bank Comparison</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We evaluate multiple lenders using AI models that compare interest rates, loan terms, fees, approval probability, and savings forecasts — helping you choose the best possible offer.
            </p>
            <button className="px-6 py-3 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-slate-900 rounded-lg font-medium transition-all">
              Calculate Savings
            </button>
          </div>

          <div className="relative">
             <div className="glass-card p-6 rounded-2xl border border-slate-700">
               <div className="flex items-center gap-3 mb-6">
                 <Banknote className="text-blue-400 w-6 h-6" />
                 <span className="text-white font-semibold">Lender Comparison</span>
               </div>
               
               <div className="space-y-4">
                 {/* Bank A */}
                 <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-brand-gold/50 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white">Bank A</span>
                      <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">Standard</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Rate: <span className="text-white">4.25%</span></span>
                      <span className="text-slate-400">Monthly: <span className="text-white">8,450 AED</span></span>
                    </div>
                 </div>

                 {/* Bank B (Best) */}
                 <div className="bg-slate-800 p-4 rounded-xl border-2 border-brand-gold relative">
                    <div className="absolute -top-3 left-4 bg-brand-gold text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Best Offer</div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white">Bank B</span>
                      <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">High Approval</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Rate: <span className="text-white">3.99%</span></span>
                      <span className="text-slate-400">Monthly: <span className="text-white">7,920 AED</span></span>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 5: Seamless Digital Customer Onboarding */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="border-[8px] border-slate-800 rounded-3xl bg-slate-900 p-2 max-w-[280px] mx-auto shadow-2xl">
               <div className="bg-slate-950 rounded-2xl h-[500px] p-4 flex flex-col overflow-hidden relative">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl mb-6 p-4 text-white">
                    <div className="text-sm opacity-80">Welcome back,</div>
                    <div className="font-bold text-lg">Ahmed Ali</div>
                    <div className="mt-4 text-xs bg-white/20 inline-block px-2 py-1 rounded">Application #8821</div>
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-0.5 h-10 bg-slate-800"></div>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Application Submitted</div>
                        <div className="text-xs text-slate-500">Oct 24, 10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-0.5 h-10 bg-slate-800"></div>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Documents Verified</div>
                        <div className="text-xs text-slate-500">Oct 24, 10:05 AM</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Pre-Approval Generated</div>
                        <div className="text-xs text-brand-gold">Ready for download</div>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">5</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Seamless Digital Customer Onboarding</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Track your mortgage progress in real time through a smart portal. E-sign documents, receive automated updates, and communicate with support instantly — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-20 bg-blue-900/20 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to Automate Your Mortgage Business?</h2>
          <div className="flex justify-center gap-4">
             <a href="#contact" className="px-8 py-4 bg-brand-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
               Book Strategy Call
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MortgagePage;
