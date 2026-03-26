import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does AI-assisted design work?",
    answer: "We use proprietary AI models trained on top-tier design patterns to generate wireframes, layouts, and copy. Our human experts then refine these outputs to ensure they perfectly align with your brand."
  },
  {
    question: "How fast can you deliver a website?",
    answer: "Depending on the complexity, we can deliver a fully functional, custom-designed website in as little as 1 to 2 weeks. Our AI tools significantly accelerate the prototyping and development phases."
  },
  {
    question: "Do I own the final design and code?",
    answer: "Absolutely. Once the project is completed and paid in full, you own 100% of the intellectual property, including all design assets and source code."
  },
  {
    question: "Can you integrate with our existing backend?",
    answer: "Yes. Our development team is experienced in integrating frontend applications with various backends, CMS platforms, and third-party APIs."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto mt-32">
      <h2 className="text-3xl md:text-4xl font-heading italic text-white mb-10 text-center">Frequently Asked Questions</h2>
      <div className="sr-only">
        <p>Common questions about our AI web design services, delivery timeline, ownership, and integrations.</p>
      </div>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="liquid-glass rounded-2xl overflow-hidden">
            <button 
              className="w-full px-6 py-5 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-lg font-heading italic text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-white/50" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 text-white/60 font-body font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
