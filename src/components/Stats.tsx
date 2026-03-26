import React from 'react';
import { HLSVideo } from './HLSVideo';

export const Stats = () => {
  const stats = [
    { value: "200+", label: "Sites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" }
  ];

  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <HLSVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0)' }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {stat.value}
              </div>
              <div className="text-white/60 font-body font-light text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
