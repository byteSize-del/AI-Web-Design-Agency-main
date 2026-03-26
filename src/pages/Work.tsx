import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export const Work = () => {
  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <div className="liquid-glass rounded-full px-3 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white font-body inline-block mb-3 sm:mb-4">Selected Work</div>
          <h1 className="sr-only">Our Portfolio | AI Web Design Projects & Case Studies</h1>
          <BlurText text="Our Portfolio" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]" aria-label="Our Portfolio" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <Link to={`/work/${p.id}`} key={i} className="group cursor-pointer block">
              <div className="liquid-glass rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] relative mb-4 sm:mb-6">
                <img src={p.image} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-center justify-between px-1 sm:px-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-heading italic text-white mb-1">{p.name}</h3>
                  <p className="text-white/50 font-body font-light text-xs sm:text-sm">{p.category}</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
