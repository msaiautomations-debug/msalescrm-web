import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Briefcase, Rocket, Calculator as CalcIcon, Sparkles } from 'lucide-react';
import { rotatingWords, heroImage } from '../mock';

const iconMap = { TrendingUp, Users, Briefcase, Rocket };

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingWords.length), 2400);
    return () => clearInterval(t);
  }, []);

  const Active = iconMap[rotatingWords[idx].icon];

  return (
    <section className="relative overflow-hidden">
      <div className="noise-bg absolute inset-0 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#E5E3E0] shadow-sm mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[#1A1A2E]" />
            <span className="text-xs font-semibold tracking-wide text-[#1A1A2E]">Powered by AI</span>
          </div>

          <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] text-[#1A1A2E] max-w-5xl">
            A better way to grow
            <br />
            <span className="rotating-word-wrapper text-[#6B8E7F]">
              <span key={idx} className="rotating-word">
                <Active className="w-10 h-10 lg:w-14 lg:h-14" strokeWidth={1.8} />
                {rotatingWords[idx].word}
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-[#3D3D52] leading-relaxed">
            Capture leads, manage pipelines, and close deals up to <span className="font-semibold text-[#1A1A2E]">3x faster</span>. Zero setup. 14-day free trial. 100% online.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <button className="pill-btn px-7 py-3.5 text-sm font-semibold bg-[#1A1A2E] text-white hover:bg-[#2A2A3E] inline-flex items-center justify-center gap-2">
              Start free trial
            </button>
            <a href="#calculator" className="pill-btn px-7 py-3.5 text-sm font-semibold bg-white text-[#1A1A2E] border border-[#E5E3E0] inline-flex items-center justify-center gap-2">
              ROI Calculator <CalcIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-14 lg:mt-20 w-full relative">
            <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#E5E3E0]">
              <img src={heroImage} alt="MSales CRM dashboard" className="w-full h-auto object-cover" />
            </div>
            <div className="hidden lg:block absolute -top-8 right-8 w-20 h-20 rounded-2xl bg-[#1A1A2E] flex items-center justify-center shadow-xl rotate-6">
              <Rocket className="w-9 h-9 text-white" strokeWidth={1.8} />
            </div>
          </div>

          <p className="mt-10 text-sm text-[#5A5A6E] uppercase tracking-[0.2em]">Teams who trust us</p>
        </div>
      </div>
    </section>
  );
}