import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../mock';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const visible = 3;

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(testimonials.length - visible, i + 1));

  return (
    <section id="testimonials" className="section-pad bg-[#F5F4F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${idx} * (33.333% + 0.4rem)))` }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="shrink-0 w-full md:w-[calc(50%-0.6rem)] lg:w-[calc(33.333%-0.85rem)] rounded-3xl overflow-hidden relative h-[460px] feature-card"
              >
                <img src={t.cover} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/85 via-[#1A1A2E]/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <Quote className="w-6 h-6 mb-3 opacity-70" />
                  <p className="text-[15px] leading-relaxed mb-5 line-clamp-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl p-3">
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-white/40" />
                    <div>
                      <h4 className="font-semibold text-sm leading-tight">{t.name}</h4>
                      <p className="text-xs opacity-85">{t.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={prev} disabled={idx === 0} className="w-11 h-11 rounded-full bg-white border border-[#E5E3E0] flex items-center justify-center hover:bg-[#1A1A2E] hover:text-white transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#1A1A2E]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(Math.min(i, testimonials.length - visible))} className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-[#1A1A2E]' : 'w-1.5 bg-[#C9C7C2]'}`} />
            ))}
          </div>
          <button onClick={next} disabled={idx >= testimonials.length - visible} className="w-11 h-11 rounded-full bg-white border border-[#E5E3E0] flex items-center justify-center hover:bg-[#1A1A2E] hover:text-white transition disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#1A1A2E]">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}