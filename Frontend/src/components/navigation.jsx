import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../mock';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav className={`relative flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-white/60 backdrop-blur'}`}>
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1A1A2E] flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-[#1A1A2E] font-bold text-lg tracking-tight">MSales <span className="font-medium text-[#5A5A6E]">CRM</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-[#1A1A2E]/85 hover:text-[#1A1A2E] transition-colors">
                {link.label}
              </a>
            ))}
            <button className="flex items-center gap-1 text-sm font-medium text-[#1A1A2E]/85 hover:text-[#1A1A2E]">
              Company <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="pill-btn px-5 py-2 text-sm font-medium bg-white text-[#1A1A2E] border border-[#E5E3E0] hover:bg-[#F5F4F2]">
              Login
            </button>
            <button className="pill-btn px-5 py-2 text-sm font-semibold bg-[#1A1A2E] text-white hover:bg-[#2A2A3E]">
              Start free trial
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2">{l.label}</a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-[#E5E3E0]">
              <button className="flex-1 pill-btn px-4 py-2 text-sm border border-[#E5E3E0]">Login</button>
              <button className="flex-1 pill-btn px-4 py-2 text-sm bg-[#1A1A2E] text-white">Start free</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}