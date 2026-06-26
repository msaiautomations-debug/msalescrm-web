import React from 'react';
import { Hand, LineChart, Receipt, CircleCheck, Sparkles } from 'lucide-react';
import { howItWorksSteps } from '../mock';

const iconMap = { PointerIcon: Hand, LineChart, Receipt, CircleCheck };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[#F5F4F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white border border-[#E5E3E0]">How it works</span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight max-w-3xl mx-auto">
            Close deals faster. <span className="text-[#6B8E7F]">From lead to revenue.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorksSteps.map((s, idx) => {
            const Icon = iconMap[s.icon];
            const isAI = idx === 2;
            return (
              <div key={idx} className={`feature-card rounded-3xl p-7 ${isAI ? 'bg-[#1A1A2E] text-white' : 'bg-white border border-[#E5E3E0]'}`}>
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isAI ? 'text-white/60' : 'text-[#7A7A8E]'}`}>{s.step}</span>
                  {isAI && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold uppercase">
                      <Sparkles className="w-3 h-3" /> AI
                    </span>
                  )}
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isAI ? 'bg-white/15' : 'bg-[#F0EFEC]'}`}>
                  <Icon className={`w-7 h-7 ${isAI ? 'text-white' : 'text-[#1A1A2E]'}`} strokeWidth={1.8} />
                </div>
                <h3 className="font-serif-display text-2xl mb-3">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${isAI ? 'text-white/80' : 'text-[#5A5A6E]'}`}>{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}