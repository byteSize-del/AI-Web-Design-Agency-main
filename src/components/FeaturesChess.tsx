import React from 'react';

export const FeaturesChess = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6 leading-tight">
              Designed to convert. Built to perform.
            </h3>
            <p className="font-body font-light text-white/60 text-lg mb-8">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
              {/* Placeholder for GIF/Image */}
              <div className="w-full h-full flex items-center justify-center text-white/20 font-body text-sm">
                Interactive Preview
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-6 leading-tight">
              It gets smarter. Automatically.
            </h3>
            <p className="font-body font-light text-white/60 text-lg mb-8">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="text-white font-body font-medium flex items-center gap-2 hover:text-white/80 transition-colors">
              See how it works
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-white/0" />
              {/* Placeholder for GIF/Image */}
              <div className="w-full h-full flex items-center justify-center text-white/20 font-body text-sm">
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
