
import React, { useEffect } from 'react';
import { ArrowLeft, Zap, Shield, FileText, BarChart3, MessageSquare, CheckCircle2, TrendingUp, AlertCircle, FileSearch } from 'lucide-react';

interface InsurancePageProps {
  onBack: () => void;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ onBack }) => {
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
              AI-Powered <span className="text-brand-gold">Insurance Automation</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Smarter, Faster, and Automated Insurance Operations.
              From instant quotes to automated claims processing.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Instant Quote Automation */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="glass-card p-6 rounded-2xl border border-brand-gold/20 shadow-2xl relative z-10 max-w-sm mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white">Auto-Quote Engine</h3>
                <Zap className="text-brand-gold w-5 h-5 fill-brand-gold animate-pulse" />
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="h-2 bg-slate-700 rounded-full w-3/4"></div>
                <div className="h-2 bg-slate-700 rounded-full w-full"></div>
                <div className="h-2 bg-slate-700 rounded-full w-1/2"></div>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <div className="text-xs text-slate-400 mb-1">Estimated Premium</div>
                    <div className="text-3xl font-display font-bold text-white">1,250 AED</div>
                    <div className="text-[10px] text-green-400 mt-1">Calculated in 0.8s</div>
                </div>
                {/* Progress bar effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-brand-gold w-full"></div>
              </div>

              <div className="mt-4 flex gap-2">
                 <div className="h-8 flex-1 bg-blue-600 rounded-lg animate-pulse opacity-50"></div>
                 <div className="h-8 w-8 bg-slate-700 rounded-lg"></div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">1</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Instant Quote Automation</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our AI engine instantly calculates quotes based on risk profile, policy type, location, and personal data—eliminating long manual processing times and improving conversion.
            </p>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
              See Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Step 2: AI Claims Processing */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">2</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">AI Claims Processing</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Automated claims assessment and fraud detection reduce processing delays and improve transparency. Customers receive real-time claim status updates without constant follow-ups.
            </p>
            <button className="px-6 py-3 bg-brand-gold text-slate-900 hover:bg-yellow-400 rounded-lg font-bold transition-all shadow-lg shadow-brand-gold/20">
              Automate Claims
            </button>
          </div>

          <div className="relative">
             <div className="glass-card p-6 rounded-2xl border border-slate-700 relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <Shield className="text-green-500 w-6 h-6" />
                  <div>
                    <div className="text-white font-bold">Claim #9921</div>
                    <div className="text-[10px] text-slate-400">Auto Insurance • Minor Collision</div>
                  </div>
                </div>

                <div className="space-y-6 pl-2">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-0.5 h-full bg-slate-700"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Submitted via App</div>
                      <div className="text-xs text-slate-500">10:05 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-0.5 h-full bg-slate-700"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white flex items-center gap-2">
                        AI Damage Analysis
                        <span className="bg-blue-900 text-blue-300 text-[9px] px-1.5 py-0.5 rounded">Scanning Photos</span>
                      </div>
                      <div className="text-xs text-slate-500">10:06 AM</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Fraud Check Passed</div>
                      <div className="text-xs text-brand-gold">Approving payout...</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 3: Document Intelligence */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mb-6 relative">
                 <FileSearch className="w-8 h-8 text-blue-400" />
                 <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
               </div>
               
               <div className="w-full space-y-3">
                 <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-200">Medical_Report.pdf</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                 </div>
                 
                 <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-200">Emirates_ID_Front.jpg</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                 </div>
                 
                 <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-200">Repair_Bill_Inv.pdf</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                 </div>
               </div>
               
               <div className="mt-6 text-xs text-slate-500">
                 Data automatically extracted & validated
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">3</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Document Intelligence</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              AI extracts, validates and organises data from KYC forms, medical statements, bills, and damage reports—removing manual paperwork and human errors.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: AI Underwriting Support */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">4</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">AI Underwriting Support</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              AI assists underwriters by analysing risks, predicting outcomes, and suggesting pricing models—helping insurers offer accurate policies faster.
            </p>
          </div>

          <div className="relative">
             <div className="glass-card p-6 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                   <h4 className="text-white font-bold">Risk Assessment Model</h4>
                   <BarChart3 className="text-blue-500 w-5 h-5" />
                </div>
                
                <div className="flex items-end gap-2 h-32 mb-4 px-2">
                   <div className="flex-1 bg-slate-800 rounded-t h-1/3"></div>
                   <div className="flex-1 bg-slate-800 rounded-t h-2/3"></div>
                   <div className="flex-1 bg-blue-600 rounded-t h-full relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        Projected Risk
                      </div>
                   </div>
                   <div className="flex-1 bg-slate-800 rounded-t h-1/2"></div>
                   <div className="flex-1 bg-slate-800 rounded-t h-1/4"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                   <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-[10px] text-slate-400 uppercase">Risk Score</div>
                      <div className="text-white font-bold text-lg">Low (12%)</div>
                   </div>
                   <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-[10px] text-slate-400 uppercase">Suggested Policy</div>
                      <div className="text-brand-gold font-bold text-lg">Premium Plus</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 5: Chat-Based Customer Service */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
             {/* Chat Interface */}
             <div className="w-[300px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-200">
                <div className="bg-blue-600 p-4 pt-6 text-white flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                       <MessageSquare className="w-4 h-4 text-white" />
                     </div>
                     <span className="font-bold text-sm">InsureBot</span>
                   </div>
                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="h-[350px] bg-slate-100 p-4 space-y-3 overflow-y-auto">
                   <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-slate-600">
                      Hi! How can I help with your policy today?
                   </div>
                   <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tr-none shadow-sm text-xs ml-auto max-w-[80%]">
                      Does my travel insurance cover flight cancellations?
                   </div>
                   <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-slate-600">
                      Yes! Your <span className="font-bold text-blue-600">Gold Plan</span> covers cancellations up to $5,000 for medical reasons or severe weather.
                   </div>
                   <button className="text-[10px] bg-white border border-blue-200 text-blue-600 px-3 py-2 rounded-full shadow-sm hover:bg-blue-50 transition-colors w-full text-center">
                      Start a Claim
                   </button>
                </div>

                <div className="p-3 bg-white border-t border-slate-200">
                   <div className="h-8 bg-slate-100 rounded-full w-full text-xs flex items-center px-4 text-slate-400">Type a message...</div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">5</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Chat-Based Customer Service</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              A 24/7 smart assistant answers policy queries, explains coverage, assists with renewals, and guides customers through claims or support—reducing call centre load.
            </p>
            <button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg font-medium transition-all flex items-center gap-2">
               <MessageSquare className="w-4 h-4" /> Try Smart Insurance Bot
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-20 bg-blue-900/20 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to Transform Your Insurance Operations?</h2>
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

export default InsurancePage;
