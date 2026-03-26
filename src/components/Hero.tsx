import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurText } from './BlurText';

export const Hero = () => {
  return (
    <section className="relative overflow-visible h-[1000px] bg-black flex flex-col items-center">
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="absolute top-[20%] w-full h-auto object-contain z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
      />
      
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-b from-transparent to-black" />
      
      <div className="z-10 flex flex-col items-center pt-[150px] px-6 text-center max-w-5xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-flex items-center gap-2 mb-8">
          <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wide">New</span>
          Introducing AI-powered web design.
        </div>
        
        <h1 className="sr-only">AI Web Design Agency | Custom AI-Powered Websites</h1>
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] mb-8"
          aria-label="The Website Your Brand Deserves"
        />
        
        <motion.p 
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body font-light text-white/60 text-lg md:text-xl max-w-2xl mb-12"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
            Get Started
            <ArrowUpRight className="w-5 h-5" />
          </button>
          <button className="text-white font-body font-medium flex items-center gap-2 hover:text-white/80 transition-colors">
            <Play className="w-5 h-5" />
            Watch the Film
          </button>
        </motion.div>
      </div>
    </section>
  );
};
