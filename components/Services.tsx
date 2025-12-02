import React from 'react';
import { Workflow, Bot, ScanText, Server, Link2, Users } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Workflow Automation",
    description: "Automate repetitive processes, approvals, lead management, client onboarding, and back-office tasks.",
    icon: Workflow
  },
  {
    title: "AI Assistants (Enterprise)",
    description: "Custom-trained AI agents for brokers, sales teams, admins, and customer support.",
    icon: Bot
  },
  {
    title: "Document Intelligence",
    description: "Extract data from IDs, payslips, contracts, bank statements, purchase agreements.",
    icon: ScanText
  },
  {
    title: "Custom OS & Platforms",
    description: "End-to-end operational systems we build from scratch for your business.",
    icon: Server
  },
  {
    title: "Deep Integrations",
    description: "CRM, ERP, email, WhatsApp Business API, APIs, bank systems, Salesforce, HubSpot, Property Finder.",
    icon: Link2
  },
  {
    title: "Automation Consulting",
    description: "We map your workflows, design your system, implement, train teams, and support long-term.",
    icon: Users
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Your End-to-End <br />
            <span className="text-blue-500">AI & Automation Partner</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;