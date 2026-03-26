import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';
import { Code, Layout, Zap, Cpu } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: <Layout className="w-6 h-6 text-white" />, title: "AI-Driven UI/UX", desc: "We use advanced models to generate high-converting, beautiful interfaces tailored to your brand." },
    { icon: <Code className="w-6 h-6 text-white" />, title: "Full-Stack Development", desc: "Robust, scalable, and secure architectures built with modern frameworks like React and Node.js." },
    { icon: <Zap className="w-6 h-6 text-white" />, title: "Performance Optimization", desc: "Blazing fast load times. We optimize every asset, script, and query for maximum speed." },
    { icon: <Cpu className="w-6 h-6 text-white" />, title: "AI Integration", desc: "Embed smart features into your site—from chatbots to personalized recommendation engines." }
  ];

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">Our Services</div>
          <h1 className="sr-only">Web Design Services | AI-Powered Development & SEO</h1>
          <BlurText text="What We Do" className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]" aria-label="What We Do" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col items-start">
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-heading italic text-white mb-4">{s.title}</h3>
              <p className="text-white/60 font-body font-light text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
