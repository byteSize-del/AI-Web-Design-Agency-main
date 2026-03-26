import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

export const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center text-white">Project not found.</div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">
        
        <Link to="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 font-body text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">{project.category}</div>
          <BlurText text={project.name} className="text-6xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.9] mb-8" />
          <p className="text-white/80 font-body text-xl max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-20 relative">
          <img src={project.image} alt={project.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-heading italic text-white mb-6">The Prompt</h3>
            <div className="liquid-glass rounded-2xl p-8 border border-white/10">
              <p className="font-mono text-white/80 leading-relaxed">
                "{project.prompt}"
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-heading italic text-white mb-6">The Impact</h3>
            <div className="flex flex-col gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col">
                  <span className="text-white/50 font-body text-sm mb-2">{metric.label}</span>
                  <span className="text-4xl font-heading italic text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};
