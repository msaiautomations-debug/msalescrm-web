import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const cols = [
    { title: 'Product', links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Book a demo', href: '/demo' },
    ] },
    { title: 'Company', links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
    ] },
    { title: 'Legal', links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ] },
  ];

  const renderFooterLink = (link) => {
    const className = 'text-sm text-white/85 hover:text-white';
    return link.href.startsWith('/#') ? (
      <a href={link.href} className={className}>{link.label}</a>
    ) : (
      <Link to={link.href} className={className}>{link.label}</Link>
    );
  };

  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-9 lg:p-14 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-display text-3xl lg:text-5xl leading-tight max-w-xl">Ready to grow revenue with MSales?</h3>
            <p className="mt-3 text-white/70 max-w-md">Start your 14-day free trial. No credit card. Cancel anytime.</p>
          </div>
          <div className="flex gap-2">
            <button className="pill-btn px-6 py-3 text-sm font-semibold bg-white text-[#1A1A2E] hover:bg-[#F5F4F2]">Start free trial</button>
            <Link to="/demo" className="pill-btn px-6 py-3 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 inline-flex items-center justify-center">Book a demo</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white text-[#1A1A2E] flex items-center justify-center font-bold">M</div>
              <span className="font-bold text-lg">MSales CRM</span>
            </div>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">The modern CRM built for revenue teams. Capture leads, manage pipelines, and forecast with AI.</p>
            <div className="flex gap-2 mt-6">
              {[FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/60">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>{renderFooterLink(l)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">&copy; 2026 MSales CRM. All rights reserved.</p>
          <p className="text-xs text-white/60">Built with care for revenue teams worldwide.</p>
        </div>
      </div>
    </footer>
  );
}