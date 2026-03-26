import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';
import { FAQ } from '../components/FAQ';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,49,999",
      desc: "Perfect for early-stage startups needing a premium presence fast.",
      features: ["5-page AI-generated site", "Responsive design", "Basic SEO setup", "1 week delivery", "1 month support"]
    },
    {
      name: "Pro",
      price: "₹4,99,999",
      desc: "For growing brands that need advanced features and optimization.",
      features: ["Up to 15 pages", "Custom animations", "CMS integration", "Advanced SEO & Analytics", "2 weeks delivery", "3 months support"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale web applications and complex integrations.",
      features: ["Unlimited pages", "Custom AI integrations", "Web app development", "Dedicated account manager", "Priority support", "SLA guarantee"]
    }
  ];

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">Pricing</div>
          <h1 className="sr-only">Web Design Pricing | Affordable AI-Powered Websites from ₹2,49,999</h1>
          <BlurText text="Simple, transparent pricing." className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]" aria-label="Simple, transparent pricing." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((p, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-heading italic text-white mb-2">{p.name}</h3>
              <div className="text-4xl font-heading italic text-white mb-4">{p.price}</div>
              <p className="text-white/50 font-body font-light text-sm mb-8">{p.desc}</p>

              <div className="flex-grow flex flex-col gap-4 mb-8">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full liquid-glass-strong flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/80 font-body font-light text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-full font-body font-medium liquid-glass-strong text-white hover:bg-white/10 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <FAQ />
      </div>
    </PageTransition>
  );
};
