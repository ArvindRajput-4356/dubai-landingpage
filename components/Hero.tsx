import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      {/* Background Gradients - Subtle & Clean */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-50/50 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-50/30 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            AI Solutions for UAE Enterprises
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-bold leading-[1.1] text-brand-navy tracking-tight">
            End-to-End AI & <br className="hidden md:block" />
            <span className="text-brand-blue">Automation Systems</span> <br className="hidden md:block" />
            for Modern Businesses
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            We build intelligent workflows that save time, reduce costs, and increase revenue. Transform your operations with enterprise-grade AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-brand-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
              Book a Free Automation Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#industries" className="px-8 py-4 bg-white border border-gray-200 text-brand-navy hover:border-brand-blue hover:text-brand-blue font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              View Industry Use Cases
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 md:pt-8 text-sm text-gray-500 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span>40-70% Cost Reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              <span>24/7 Automated Operations</span>
            </div>
          </div>
        </div>

        {/* Visual Content - Abstract AI Placeholder */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none lg:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-3xl border border-blue-100 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Abstract Shapes / Placeholder */}
            <div className="relative w-full h-full p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 animate-float">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-2">Intelligent Core</h3>
              <p className="text-sm md:text-base text-gray-500 max-w-xs">Processing data, automating tasks, and optimizing workflows in real-time.</p>

              {/* Floating Elements */}
              <div className="absolute top-10 right-6 md:top-20 md:right-10 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-xs">$$$</div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500">Revenue Impact</div>
                    <div className="text-xs md:text-sm font-bold text-brand-navy">+35% Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-6 md:bottom-20 md:left-10 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-brand-blue font-bold text-xs">24h</div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500">Time Saved</div>
                    <div className="text-xs md:text-sm font-bold text-brand-navy">120+ Hours/Mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
