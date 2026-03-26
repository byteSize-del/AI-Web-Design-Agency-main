import React from 'react';

export const Partners = () => {
  return (
    <section className="flex flex-col items-center pb-8 pt-16 relative z-10 bg-black">
      <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white font-body inline-block mb-8">
        Trusted by the teams behind
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
        {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
          <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
};
