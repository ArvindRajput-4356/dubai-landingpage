
import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, Users, Database, TrendingUp, CheckCircle2, Zap, BarChart3, Building2, Layers } from 'lucide-react';

interface RealEstatePageProps {
  onBack: () => void;
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({ onBack }) => {
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
              AI-Powered <span className="text-brand-gold">Real Estate Automation</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Transforming Property Sales & Lead Conversion with Smart Automation.
              Route leads instantly, automate follow-ups, and close deals faster.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Intelligent Lead Routing & Scoring */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="glass-card p-6 rounded-2xl border border-blue-500/20 shadow-2xl relative z-10 max-w-sm mx-auto">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="text-brand-gold w-5 h-5" />
                  <span className="font-semibold text-white">Lead Scoring Engine</span>
                </div>
                <div className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-1 rounded-full animate-pulse">Live</div>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Lead Card 1 */}
                <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500 flex justify-between items-center">
                   <div>
                     <div className="text-white font-bold text-sm">John D.</div>
                     <div className="text-xs text-slate-400">Budget: 5M AED • Ready Now</div>
                   </div>
                   <div className="text-right">
                     <div className="text-green-400 font-bold text-lg">92/100</div>
                     <div className="text-[10px] text-slate-500 uppercase">Hot Lead</div>
                   </div>
                </div>
                 {/* Lead Card 2 */}
                 <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-yellow-500 flex justify-between items-center opacity-70">
                   <div>
                     <div className="text-white font-bold text-sm">Sarah M.</div>
                     <div className="text-xs text-slate-400">Budget: 2M AED • 3 Months</div>
                   </div>
                   <div className="text-right">
                     <div className="text-yellow-400 font-bold text-lg">65/100</div>
                     <div className="text-[10px] text-slate-500 uppercase">Warm</div>
                   </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-blue-400">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Routed to Senior Agent: <span className="text-white">Mike Ross</span>
              </div>
            </div>
            
            {/* Decorative Arrow */}
            <div className="absolute top-1/2 -right-8 hidden md:block text-slate-700">
                <ArrowLeft className="w-8 h-8 rotate-180" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">1</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Intelligent Lead Routing & Scoring</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our AI automatically analyses leads across channels—website, ads, calls, WhatsApp, or walk-ins—and scores them based on buying intent, budget, timeline, and engagement level. High-potential leads are instantly routed to the right sales agent.
            </p>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
              Calculate Lead Quality
            </button>
          </div>
        </div>
      </section>

      {/* Step 2: WhatsApp AI Property Assistant */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">2</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">WhatsApp AI Property Assistant</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Buyers can chat 24/7 through WhatsApp to explore properties, schedule site visits, get pricing details, and receive personalised recommendations—just like talking to a real broker.
            </p>
            <button className="px-6 py-3 bg-transparent border border-green-500/50 text-green-500 hover:bg-green-500/10 rounded-lg font-medium transition-all flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Start Demo
            </button>
          </div>

          <div className="relative flex justify-center">
             {/* Phone Mockup */}
             <div className="w-[300px] bg-slate-950 border-4 border-slate-800 rounded-[3rem] p-4 shadow-2xl relative">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl"></div>
                
                {/* Screen Content */}
                <div className="h-[500px] bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col relative">
                    <div className="bg-[#075e54] p-4 pt-8 text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                           <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                           <div className="text-sm font-bold">Nova Estate Bot</div>
                           <div className="text-[10px] opacity-80">Online</div>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-4 space-y-4 overflow-hidden bg-[#0b141a]">
                       <div className="self-start bg-[#1f2c34] text-slate-200 text-xs p-3 rounded-lg rounded-tl-none max-w-[80%]">
                          Hello! How can I help you find your dream home today? 🏡
                       </div>
                       <div className="self-end bg-[#005c4b] text-white text-xs p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                          I'm looking for a 2BHK in Dubai Marina under 2.5M.
                       </div>
                       <div className="self-start bg-[#1f2c34] text-slate-200 text-xs p-3 rounded-lg rounded-tl-none max-w-[80%]">
                          I found 3 premium units matching your criteria. Would you like to see photos or schedule a viewing?
                       </div>
                       
                       {/* Property Card in Chat */}
                       <div className="bg-[#1f2c34] rounded-lg p-2 max-w-[80%]">
                          <div className="h-24 bg-slate-700 rounded mb-2 w-full animate-pulse"></div>
                          <div className="text-xs text-white font-bold">Marina Gate 2</div>
                          <div className="text-[10px] text-slate-400">2.3M AED • 2 Beds</div>
                          <div className="mt-2 w-full bg-[#005c4b] text-center text-white text-[10px] py-1.5 rounded">View Details</div>
                       </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 3: CRM Integrations */}
      <section className="py-24 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual UI Mockup */}
            <div className="glass-card p-8 rounded-2xl border border-slate-700 relative z-10 flex flex-col items-center">
               
               {/* Center Hub */}
               <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] mb-8 relative z-20">
                  <Database className="w-8 h-8 text-white" />
               </div>

               {/* Connecting Lines */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-slate-600 rounded-full -z-0 opacity-30 animate-spin-slow"></div>

               {/* Satellites */}
               <div className="w-full flex justify-between items-center relative z-10">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                        {/* Salesforce-ish placeholder */}
                        <div className="text-blue-500 font-bold text-xs">CRM</div>
                     </div>
                     <span className="text-xs text-slate-400">Salesforce</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                        <MessageCircle className="text-white w-6 h-6" />
                     </div>
                     <span className="text-xs text-slate-400">WhatsApp</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-[#FF5722] rounded-lg flex items-center justify-center">
                        <Users className="text-white w-6 h-6" />
                     </div>
                     <span className="text-xs text-slate-400">HubSpot</span>
                  </div>
               </div>

               <div className="mt-8 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 text-xs text-green-400 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 Real-time 2-way sync active
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">3</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Seamless CRM Integrations</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Seamlessly sync all customer interactions, notes, follow-ups, tasks, and documents into your CRM in real time—no manual data entry. Everything stays organised and updated automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: Automated Property Data Management */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-6">
              <span className="font-display font-bold text-xl">4</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Automated Property Data Management</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              AI keeps property availability, pricing, inventory, brochure details, images, and unit status updated across sales portals & channels—reducing human effort and eliminating errors.
            </p>
          </div>

          <div className="relative">
             <div className="glass-card p-1 rounded-xl border border-slate-700 shadow-2xl">
               <div className="bg-slate-950 rounded-lg p-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                     <h4 className="text-slate-300 font-bold text-sm">Live Inventory</h4>
                     <button className="text-[10px] bg-blue-600 px-2 py-1 rounded text-white">Sync All</button>
                  </div>
                  
                  {/* Table Header */}
                  <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-500 uppercase font-bold mb-2 px-2">
                    <div className="col-span-2">Unit</div>
                    <div>Price</div>
                    <div className="text-right">Status</div>
                  </div>

                  {/* Rows */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2 items-center bg-slate-900 p-2 rounded border border-slate-800">
                       <div className="col-span-2 flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-700 rounded"></div>
                          <span className="text-white text-xs font-medium">Apt 1204</span>
                       </div>
                       <div className="text-slate-400 text-xs">1.2M</div>
                       <div className="text-right"><span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">Available</span></div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 items-center bg-slate-900 p-2 rounded border border-slate-800">
                       <div className="col-span-2 flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-700 rounded"></div>
                          <span className="text-white text-xs font-medium">Villa B3</span>
                       </div>
                       <div className="text-slate-400 text-xs">5.5M</div>
                       <div className="text-right"><span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">Sold</span></div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 items-center bg-slate-900 p-2 rounded border border-slate-800 opacity-60">
                       <div className="col-span-2 flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-700 rounded"></div>
                          <span className="text-white text-xs font-medium">Penthouse</span>
                       </div>
                       <div className="text-slate-400 text-xs">12M</div>
                       <div className="text-right"><span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded">Reserved</span></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-500">
                    <Zap className="w-3 h-3 text-brand-gold" />
                    Auto-synced with PropertyFinder & Bayut
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Step 5: End-to-End Sales Workflow Automation */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="glass-card p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                   <Layers className="text-white w-6 h-6" />
                   <span className="text-white font-bold">Deal Pipeline</span>
                </div>
                
                <div className="space-y-6 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-800 -z-10"></div>

                   {/* Step 1 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border-4 border-brand-dark">
                         <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                         <div className="text-white text-sm font-bold">Inquiry Received</div>
                         <div className="text-xs text-slate-500">Auto-response sent via WhatsApp</div>
                      </div>
                   </div>

                   {/* Step 2 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border-4 border-brand-dark">
                         <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                         <div className="text-white text-sm font-bold">Viewing Scheduled</div>
                         <div className="text-xs text-slate-500">Calendar invite sent to agent & client</div>
                      </div>
                   </div>

                   {/* Step 3 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center shrink-0 border-4 border-brand-dark animate-pulse">
                         <span className="text-slate-900 font-bold text-xs">3</span>
                      </div>
                      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 w-full">
                         <div className="text-white text-sm font-bold mb-1">Offer & Negotiation</div>
                         <div className="text-xs text-slate-400">Waiting for seller approval...</div>
                      </div>
                   </div>
                   
                   {/* Step 4 (Future) */}
                   <div className="flex gap-4 opacity-40">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border-4 border-brand-dark">
                         <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <div>
                         <div className="text-white text-sm font-bold">Closing & Contracts</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <span className="font-display font-bold text-xl">5</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">End-to-End Sales Workflow Automation</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Automate follow-ups, meeting scheduling, reminders, proposal generation, compliance checks, and booking forms—accelerating the closing process and improving conversion rates.
            </p>
            <button className="px-6 py-3 bg-brand-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
               See AI in Action
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-20 bg-blue-900/20 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to Scale Your Brokerage?</h2>
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

export default RealEstatePage;
