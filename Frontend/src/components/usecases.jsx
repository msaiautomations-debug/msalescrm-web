import React, { useState } from 'react';
import { TrendingUp, Package, BarChart3, Percent, ArrowRight } from 'lucide-react';
import { useCases } from '../mock';

const iconMap = { TrendingUp, Package, BarChart3, Percent };

export default function UseCases() {
  const [active, setActive] = useState(0);
  const tab = useCases[active];
  const ActiveIcon = iconMap[tab.icon];

  return (
    <section className="section-pad bg-[#1A1A2E] text-white relative overflow-hidden">
      <div className="overflow-hidden mb-12 lg:mb-16">
        <div className="marquee-track flex whitespace-nowrap gap-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <h3 key={i} className="font-serif-display text-5xl lg:text-7xl text-white/90 shrink-0">
              How teams use MSales —
            </h3>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/10 mb-5">See how</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-9">
              From scrappy startups to scale-ups — MSales adapts to how your team sells.
            </h2>

            <div className="space-y-3">
              {useCases.map((u, idx) => {
                const Icon = iconMap[u.icon];
                const isActive = active === idx;
                return (
                  <button
                    key={u.id}
                    onClick={() => setActive(idx)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all ${isActive ? 'bg-white text-[#1A1A2E] border-white' : 'bg-transparent border-white/15 hover:border-white/35'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center ${isActive ? 'bg-[#1A1A2E] text-white' : 'bg-white/10 text-white'}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-1">{u.title}</h4>
                        {isActive && <p className="text-sm opacity-80 leading-relaxed">{u.description}</p>}
                      </div>
                      {isActive && <ArrowRight className="w-5 h-5 mt-1.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-[5/6]">
              <img src={tab.image} alt={tab.title} className="w-full h-full object-cover transition-opacity duration-500" key={active} />
            </div>
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur text-[#1A1A2E] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#1A1A2E] text-white flex items-center justify-center">
                <ActiveIcon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-semibold">{tab.title}</h4>
                <p className="text-xs text-[#5A5A6E]">Tailored workflows, ready out of the box.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}