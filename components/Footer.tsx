
import React from 'react';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-2xl">
                <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let’s Build Your <br/><span className="text-brand-gold">Automation System</span></h4>
                <p className="text-slate-400 text-lg mb-8">
                    Ready to automate your operations? Book a free strategy call to see how we can help you scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="px-8 py-4 bg-brand-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Book Strategy Call
                    </a>
                    <a href="https://wa.me/971505826673" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20b859] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/20">
                        <Phone className="w-5 h-5" />
                        WhatsApp +971 50 582 6673
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-auto p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                <h5 className="text-white font-bold mb-6 text-xl">Quick Contact</h5>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500">
                           <Mail className="w-5 h-5" />
                        </div>
                        <a href="mailto:backofficerealestate@gmail.com" className="hover:text-brand-gold transition-colors">backofficerealestate@gmail.com</a>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-sm leading-relaxed">
                            Dubai, UAE<br/>
                            Bangalore, India (Eng. Hub)
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <div>&copy; {new Date().getFullYear()} Nova Automations. All rights reserved.</div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
