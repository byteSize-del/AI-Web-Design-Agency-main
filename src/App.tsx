import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { SEO } from './components/SEO';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Process } from './pages/Process';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { CaseStudy } from './pages/CaseStudy';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<>
          <SEO title="AI Web Design Agency | Custom Websites Powered by AI" description="Transform your brand with AI-powered web design. We create stunning, high-performance websites in weeks, not months. Get a custom site starting at $2,999." />
          <Home />
        </>} />
        <Route path="/services" element={<>
          <SEO title="Our Services | Web Design, Development & AI Integration" description="From custom website design to AI-powered web applications. We offer full-stack web solutions including SEO, CMS integration, and analytics." />
          <Services />
        </>} />
        <Route path="/work" element={<>
          <SEO title="Our Work | Portfolio of AI-Powered Websites" description="Explore our portfolio of stunning websites created with AI technology. See how we've helped startups and enterprises establish their digital presence." />
          <Work />
        </>} />
        <Route path="/work/:id" element={<>
          <SEO title="Case Study | AI Web Design Project" description="See how we transformed this client's digital presence with our AI-powered web design approach." />
          <CaseStudy />
        </>} />
        <Route path="/process" element={<>
          <SEO title="Our Process | How We Build AI-Powered Websites" description="Learn about our streamlined web design process. From AI-generated concepts to final delivery, we make web design simple and transparent." />
          <Process />
        </>} />
        <Route path="/pricing" element={<>
          <SEO title="Pricing | Affordable AI Web Design Packages" description="Transparent pricing for AI-powered web design. Starter packages from $2,999. Get a premium website in as little as one week." />
          <Pricing />
        </>} />
        <Route path="/contact" element={<>
          <SEO title="Contact Us | Book Your Free Consultation" description="Ready to start your project? Book a free consultation call with our team. We'll discuss your needs and create a custom web solution." />
          <Contact />
        </>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="bg-black min-h-screen overflow-visible text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
