import React from 'react';
import { Shield, Globe2, Award, Lock } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 bg-brand-lightGrey border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <Globe2 className="w-8 h-8 text-brand-blue" />
            <span className="text-gray-600 font-medium text-sm">India Engineering Hub</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Shield className="w-8 h-8 text-brand-blue" />
            <span className="text-gray-600 font-medium text-sm">DIFC/UAE Entity</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Award className="w-8 h-8 text-brand-blue" />
            <span className="text-gray-600 font-medium text-sm">99.5% Success Rate</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Lock className="w-8 h-8 text-brand-blue" />
            <span className="text-gray-600 font-medium text-sm">Enterprise Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;