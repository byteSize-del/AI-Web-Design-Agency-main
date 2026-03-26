import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A complete rebuild in five days. The AI generated a design that perfectly captured our brand voice, and the performance is unmatched.",
      name: "Sarah Chen",
      role: "CEO Luminary"
    },
    {
      quote: "Conversions up 4x since launch. The automated optimization means our site is constantly improving without us lifting a finger.",
      name: "Marcus Webb",
      role: "Head of Growth Arcline"
    },
    {
      quote: "They didn't just design our site, they reimagined how we present ourselves online. The liquid glass aesthetic is stunning.",
      name: "Elena Voss",
      role: "Brand Director Helix"
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-black max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-16">
        <div className="liquid-glass rounded-full px-3 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white font-body inline-block mb-3 sm:mb-4">
          What They Say
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="liquid-glass rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-white/[0.02]">
            <p className="text-white/80 font-body font-light text-xs sm:text-sm italic mb-6 sm:mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div>
              <div className="text-white font-body font-medium text-sm">
                {testimonial.name}
              </div>
              <div className="text-white/50 font-body font-light text-xs mt-1">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
