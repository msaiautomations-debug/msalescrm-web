import React from 'react';
import { Laptop, Clock, RefreshCw, MousePointerClick } from 'lucide-react';
import { trustBadges } from '../mock';

const iconMap = { Laptop, Clock, RefreshCw, MousePointerClick };

export default function TrustBar() {
  return (
    <section className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {trustBadges.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <div key={i} className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:justify-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif-display text-2xl lg:text-3xl leading-tight">{b.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}