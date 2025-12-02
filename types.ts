import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudy {
  title: string;
  stats: { label: string; value: string }[];
  description: string;
}