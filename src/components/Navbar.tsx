import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" }
  ];

  return (
    <>
      {/* Desktop Navbar - Original Style */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
        <div className="w-full max-w-7xl flex items-center justify-center">
          <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-8">
            <div className="flex items-center gap-6 text-base font-body font-medium text-white/90">
              {links.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <MagneticButton>
              <Link to="/contact" className="bg-white text-black rounded-full px-5 py-2 text-base font-body font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 z-40 lg:hidden">
            <div className="liquid-glass rounded-2xl p-6 flex flex-col gap-4">
              {links.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 px-4 rounded-xl font-body transition-colors ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-white text-black rounded-full px-6 py-3 text-base font-body font-medium text-center hover:bg-white/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );
};
