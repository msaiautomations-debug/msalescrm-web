import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Clock, Globe } from 'lucide-react';
import { eligibilityCriteria } from '../mock';

const iconMap = { TrendingUp, Clock, Globe };

export default function Eligibility() {
  const [open, setOpen] = useState(true);

  return (
    <section className="section-pad bg-[#F5F4F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white border border-[#E5E3E0]">Who we help</span>
          <h2 className="font-serif-display text-4xl sm:text-5xl mt-5">Is MSales CRM right for your team?</h2>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E3E0] overflow-hidden">
          <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-7 lg:p-9 text-left">
            <h3 className="font-serif-display text-2xl lg:text-3xl">Find out if you&rsquo;re a fit</h3>
            <div className={`w-11 h-11 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center transition-transform ${open ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>

          <div className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="px-7 pb-9 lg:px-9 grid sm:grid-cols-3 gap-5">
                {eligibilityCriteria.map((c, i) => {
                  const Icon = iconMap[c.icon];
                  return (
                    <div key={i} className="rounded-2xl bg-[#F5F4F2] p-6">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E3E0] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#1A1A2E]" strokeWidth={1.8} />
                      </div>
                      <p className="font-semibold text-[#1A1A2E]">{c.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}