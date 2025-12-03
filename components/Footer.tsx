import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-brand-navy text-white pt-16 md:pt-24 pb-12">
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-sans font-bold mb-6">
                            Let's Build Your <span className="text-brand-blue">Automation System</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
                            Ready to streamline your operations? Fill out the form, and our engineering team will get back to you within 24-48 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Email Us</div>
                                    <a href="mailto:backofficerealestate@gmail.com" className="font-medium hover:text-brand-blue transition-colors">backofficerealestate@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Call Us</div>
                                    <a href="tel:+971505826673" className="font-medium hover:text-brand-blue transition-colors">+971 50 582 6673</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Locations</div>
                                    <div className="font-medium">Dubai, UAE & Bangalore, India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-6 md:p-10 text-brand-navy">
                        <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue transition-colors" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue transition-colors" placeholder="+971..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue transition-colors" placeholder="Tell us about your automation needs..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 md:py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                                Submit Inquiry
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div>&copy; {new Date().getFullYear()} EAI Systems. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
