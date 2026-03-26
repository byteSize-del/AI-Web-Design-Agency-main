import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HLSVideo } from './HLSVideo';

export const HowItWorks = () => {
  return (
    <section className="relative w-full min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <HLSVideo 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto min-h-[500px] justify-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We ship it.
        </h2>
        
        <p className="font-body font-light text-white/60 text-lg md:text-xl mb-10 max-w-2xl">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
        </p>
        
        <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
          Get Started
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
