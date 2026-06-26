import React from 'react';
import { Hand, Laptop, LineChart } from 'lucide-react';
import { appFeatures, appImage } from '../mock';

const iconMap = { HandPointer: Hand, Laptop, LineChart };

export default function AppFeatures() {
  return (
    <section className="section-pad bg-[#F5F4F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white border border-[#E5E3E0]">Features</span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight max-w-3xl mx-auto">
            Control your <span className="text-[#6B8E7F]">sales pipeline</span> anytime, anywhere.
          </h2>
          <p className="text-[#5A5A6E] mt-4">Meet the MSales mobile app — your CRM in your pocket.</p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E3E0] p-7 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={appImage} alt="MSales mobile app" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-5">
            {appFeatures.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={i} className="flex gap-5 items-start p-5 rounded-2xl hover:bg-[#F5F4F2] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A2E] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-2xl mb-1">{f.title}</h4>
                    <p className="text-sm text-[#5A5A6E] leading-relaxed">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}