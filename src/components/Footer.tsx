import React from 'react';
import { HLSVideo } from './HLSVideo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className="relative w-full pt-32 pb-12 flex flex-col items-center justify-center bg-black overflow-hidden mt-auto">
      <div className="absolute inset-0 z-0">
        <HLSVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-4 sm:mb-6">
          Your next website starts here.
        </h2>

        <p className="font-body font-light text-white/60 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xl">
          Book a free strategy call. See what AI-powered design can do.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-16 sm:mb-24 md:mb-32 w-full sm:w-auto">
          <Link to="/contact" className="liquid-glass-strong rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white font-body font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
            Book a Call
          </Link>
          <Link to="/pricing" className="bg-white text-black rounded-full px-6 sm:px-8 py-3 sm:py-4 font-body font-medium hover:bg-white/90 transition-colors w-full sm:w-auto text-center">
            View Pricing
          </Link>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-body">
          <div>© 2026 Studio</div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white/80 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white/80 transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white/80 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
