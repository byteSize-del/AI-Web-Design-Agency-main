import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row gap-16">
        
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="sr-only">Contact Us | Book Your Free Web Design Consultation</h1>
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">Let's Talk</div>
          <BlurText text="Start your next project." className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8" aria-label="Start your next project" />
          <p className="text-white/60 font-body font-light text-lg mb-12 max-w-md">
            Whether you have a clear vision or just an idea, our AI-powered team is ready to bring it to life.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-body font-light">hello@studio.ai</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-body font-light">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-body font-light">+1 (555) 000-0000</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex-1">
          <div className="liquid-glass rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 font-body text-sm ml-4">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 font-body transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 font-body text-sm ml-4">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 font-body transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 font-body text-sm ml-4">Project Details</label>
                <textarea 
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 font-body transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-white text-black rounded-full py-4 mt-4 font-body font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-80"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
                {!isSubmitted && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};
