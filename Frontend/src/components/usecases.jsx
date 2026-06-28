import React, { useEffect, useState } from 'react';
import { TrendingUp, Package, BarChart3, Percent, ArrowRight, Maximize2, X } from 'lucide-react';
import { useCases } from '../mock';

const iconMap = { TrendingUp, Package, BarChart3, Percent };

export default function UseCases() {
  const [active, setActive] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const tab = useCases[active];
  const ActiveIcon = iconMap[tab.icon];

  useEffect(() => {
    if (!zoomedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomedImage]);

  return (
    <section id="features" className="section-pad bg-[#1A1A2E] text-white relative overflow-hidden">
      <div className="overflow-hidden mb-12 lg:mb-16">
        <div className="marquee-track flex whitespace-nowrap gap-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <h3 key={i} className="font-serif-display text-5xl lg:text-7xl text-white/90 shrink-0">
              How teams use MSales -
            </h3>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/10 mb-5">See how</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-9">
              From scrappy startups to scale-ups - MSales adapts to how your team sells.
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
            <div
              className="group rounded-3xl overflow-hidden border border-white/10 aspect-video bg-[#11111E] cursor-zoom-in shadow-2xl shadow-black/30"
              onDoubleClick={() => setZoomedImage(tab)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${tab.title} screenshot`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setZoomedImage(tab);
                }
              }}
            >
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full h-full object-cover object-left-top scale-[1.04] transition duration-500 group-hover:scale-[1.07]"
                key={active}
              />
              <button
                type="button"
                onClick={() => setZoomedImage(tab)}
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 text-[#1A1A2E] flex items-center justify-center shadow-lg transition hover:bg-white"
                aria-label={`View full ${tab.title} image`}
                title="View full image"
              >
                <Maximize2 className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur text-[#1A1A2E] rounded-2xl p-5 flex items-center gap-4 pointer-events-none">
              <div className="w-11 h-11 rounded-xl bg-[#1A1A2E] text-white flex items-center justify-center">
                <ActiveIcon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-semibold">{tab.title}</h4>
                <p className="text-xs text-[#5A5A6E]">Tailored workflows, ready out of the box.</p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-white/60">
              Live product preview and double click to zoom.
            </p>
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomedImage.title} full image`}
        >
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white text-[#1A1A2E] flex items-center justify-center shadow-xl transition hover:bg-white/90"
            aria-label="Close full image"
            title="Close"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
          <img
            src={zoomedImage.image}
            alt={zoomedImage.title}
            className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}