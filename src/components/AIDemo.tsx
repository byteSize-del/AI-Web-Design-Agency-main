import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Code2, Layout } from 'lucide-react';

export const AIDemo = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;
    setIsGenerating(true);
    setStep(1);
  };

  useEffect(() => {
    if (isGenerating) {
      const timer1 = setTimeout(() => setStep(2), 1500);
      const timer2 = setTimeout(() => setStep(3), 3000);
      const timer3 = setTimeout(() => {
        setStep(4);
        setIsGenerating(false);
      }, 4500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isGenerating]);

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 w-full max-w-5xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading italic text-white mb-3 sm:mb-4">Experience the Magic</h2>
        <p className="text-white/60 font-body font-light text-sm sm:text-base">Type a prompt and watch our AI assemble a layout in real-time.</p>
      </div>

      <div className="liquid-glass rounded-2xl sm:rounded-3xl p-2 sm:p-4 border border-white/10 shadow-2xl">
        <div className="bg-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-h-[400px] flex flex-col relative overflow-hidden">

          {/* Input Area */}
          <form onSubmit={handleGenerate} className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative flex-grow">
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
              </div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A dark mode portfolio for a 3D artist..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 sm:pr-6 text-sm sm:text-base text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 font-body transition-all"
                disabled={isGenerating || step === 4}
              />
            </div>
            <button
              type="submit"
              disabled={isGenerating || !prompt || step === 4}
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 w-full sm:w-auto"
            >
              Generate
            </button>
          </form>

          {/* Visualization Area */}
          <div className="flex-grow flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-white/20 flex flex-col items-center gap-4"
                >
                  <Terminal className="w-12 h-12" />
                  <p className="font-mono text-sm">Awaiting prompt...</p>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="text-white flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <p className="font-mono text-sm text-white/60">Analyzing intent & extracting entities...</p>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="wireframing"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="w-full max-w-lg"
                >
                  <div className="flex items-center gap-2 mb-4 text-white/60 font-mono text-sm">
                    <Layout className="w-4 h-4" /> Generating Layout Structure
                  </div>
                  <div className="flex flex-col gap-3">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-12 bg-white/10 rounded-lg" />
                    <div className="flex gap-3">
                      <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ delay: 0.2 }} className="h-32 bg-white/10 rounded-lg" />
                      <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ delay: 0.3 }} className="h-32 bg-white/10 rounded-lg" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="coding"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="w-full max-w-lg bg-black/80 rounded-lg p-4 font-mono text-xs text-green-400 overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-4 text-white/60">
                    <Code2 className="w-4 h-4" /> Compiling React Components
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <p>import React from 'react';</p>
                    <p>import &#123; motion &#125; from 'motion/react';</p>
                    <br/>
                    <p>export const Hero = () =&gt; (</p>
                    <p className="pl-4">&lt;section className="dark-theme"&gt;</p>
                    <p className="pl-8">&lt;h1&gt;{prompt.substring(0, 20)}...&lt;/h1&gt;</p>
                    <p className="pl-4">&lt;/section&gt;</p>
                    <p>);</p>
                  </motion.div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden relative group cursor-pointer">
                    <img src="https://picsum.photos/seed/generated/800/450" alt="Generated" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => { setStep(0); setPrompt(''); }}
                        className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm"
                      >
                        Reset Demo
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-white/60 font-body text-sm">Generation complete in 4.2s</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
