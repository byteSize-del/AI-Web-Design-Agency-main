import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

export const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" }
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-7xl flex items-center justify-center">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-foreground/90">
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
            <Link to="/contact" className="bg-white text-black rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
};
