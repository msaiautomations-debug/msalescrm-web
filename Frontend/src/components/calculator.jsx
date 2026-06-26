import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

const PERIODS = [3, 6, 12, 24];

export default function Calculator() {
  const [reps, setReps] = useState(10);
  const [period, setPeriod] = useState(12);
  const [avgDealSize, setAvgDealSize] = useState(5000);

  const { monthlyCost, totalRevenue, roi } = useMemo(() => {
    const pricePerRep = 49;
    const monthly = reps * pricePerRep;
    const baseRevenue = reps * 4 * avgDealSize * period;
    const boostedRevenue = baseRevenue * 1.25;
    const extra = boostedRevenue - baseRevenue;
    const cost = monthly * period;
    const roiPct = Math.round(((extra - cost) / cost) * 100);
    return { monthlyCost: monthly, totalRevenue: Math.round(extra), roi: roiPct };
  }, [reps, period, avgDealSize]);

  const fmt = (n) => n.toLocaleString('en-US');

  return (
    <section id="calculator" className="section-pad bg-[#F5F4F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white border border-[#E5E3E0]">ROI Calculator</span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight max-w-3xl">See how much revenue MSales could unlock.</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-3xl p-7 lg:p-9 border border-[#E5E3E0]">
            <div className="mb-9">
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-[#5A5A6E]">Sales reps</label>
                <span className="font-serif-display text-3xl">{reps}</span>
              </div>
              <input type="range" min="1" max="200" value={reps} onChange={(e) => setReps(+e.target.value)} className="neutral-slider w-full" />
              <div className="flex justify-between text-xs text-[#7A7A8E] mt-2"><span>1</span><span>200</span></div>
            </div>

            <div className="mb-9">
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-[#5A5A6E]">Avg. deal size</label>
                <span className="font-serif-display text-3xl">${fmt(avgDealSize)}</span>
              </div>
              <input type="range" min="500" max="50000" step="500" value={avgDealSize} onChange={(e) => setAvgDealSize(+e.target.value)} className="neutral-slider w-full" />
              <div className="flex justify-between text-xs text-[#7A7A8E] mt-2"><span>$500</span><span>$50,000</span></div>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#5A5A6E] block mb-3">Time horizon</label>
              <div className="flex flex-wrap gap-2">
                {PERIODS.map((p) => (
                  <button key={p} onClick={() => setPeriod(p)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${period === p ? 'bg-[#1A1A2E] text-white' : 'bg-[#F5F4F2] text-[#1A1A2E] hover:bg-[#EAE8E4]'}`}>
                    {p} months
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#1A1A2E] text-white rounded-3xl p-7 lg:p-9 relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 mb-6">
              <Sparkles className="w-3 h-3" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Estimated impact</span>
            </div>

            <div className="mb-7">
              <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Additional revenue</p>
              <p className="font-serif-display text-5xl lg:text-6xl text-[#A8D8C0]">${fmt(totalRevenue)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-xs text-white/60 mb-1">Monthly cost</p>
                <p className="font-serif-display text-2xl">${fmt(monthlyCost)}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-xs text-white/60 mb-1">ROI</p>
                <p className="font-serif-display text-2xl text-[#A8D8C0]">{roi}%</p>
              </div>
            </div>

            <button className="w-full pill-btn bg-white text-[#1A1A2E] py-3.5 text-sm font-semibold hover:bg-[#F5F4F2]">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}