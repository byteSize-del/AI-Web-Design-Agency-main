import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';

export const Process = () => {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We dive deep into your brand, goals, and audience. Our AI analyzes market trends to formulate a winning strategy." },
    { num: "02", title: "AI-Assisted Design", desc: "Rapid prototyping and visual exploration. We generate multiple high-fidelity concepts in hours, not weeks." },
    { num: "03", title: "Development & Refinement", desc: "Translating design into pixel-perfect, performant code. Human experts refine the AI-generated foundation." },
    { num: "04", title: "Launch & Optimize", desc: "Rigorous testing, seamless deployment, and continuous AI-driven optimization to maximize conversions." }
  ];

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">How We Work</div>
          <h1 className="sr-only">Our Web Design Process | AI-Assisted Development</h1>
          <BlurText text="The Process" className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]" aria-label="The Process" />
        </div>
        <div className="flex flex-col gap-8">
          {steps.map((s, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="text-5xl md:text-6xl font-heading italic text-white/20 leading-none">
                {s.num}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">{s.title}</h3>
                <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
