
import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-200 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            Transforming UAE Business Operations
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-white">
            AI + Automation for <span className="gold-gradient-text">Real Estate</span>, Mortgage & Insurance
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            We build intelligent automation, custom workflows, and enterprise-level AI assistants that eliminate repetitive work, reduce operational costs by 40–70%, and accelerate client onboarding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 group">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/971505826673" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>DIFC Registered (Upcoming)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-500" />
              <span>Top India Engineering Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Enterprise-Grade Integrations</span>
            </div>
          </div>
        </div>

        {/* Visual Content - Floating Mockups */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Back Card - Analytics */}
          <div className="absolute top-10 right-10 w-80 p-6 glass-card rounded-2xl z-10 animate-float-delayed">
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-slate-200 font-semibold text-sm">Automated Pipeline</h3>
               <div className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Active</div>
             </div>
             <div className="space-y-3">
               <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg">
                 <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs">AI</div>
                 <div className="text-xs text-slate-300">New Lead: Villa Jumeirah</div>
               </div>
               <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg">
                 <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold text-xs">CRM</div>
                 <div className="text-xs text-slate-300">Added to Salesforce</div>
               </div>
               <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xs">WA</div>
                  <div className="text-xs text-slate-300">WhatsApp Msg Sent</div>
               </div>
             </div>
          </div>

          {/* Front Card - Chat Assistant */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-96 p-6 bg-slate-900 border border-blue-500/30 rounded-2xl shadow-2xl z-20 animate-float">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Broker Assistant AI</h3>
                <p className="text-xs text-brand-gold">Online • Replying now</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none text-sm text-slate-300">
                Client documents uploaded. Verify eligibility?
              </div>
              <div className="bg-blue-600/20 border border-blue-600/50 p-3 rounded-lg rounded-tr-none text-sm text-white text-right">
                Analyzing bank statements... Income verified.
              </div>
              <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none text-sm text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Eligibility Confirmed. Pre-approval generated.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
