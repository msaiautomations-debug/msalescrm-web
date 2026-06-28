import React, { useState } from 'react';
import { ArrowLeft, CalendarClock, CheckCircle2, Loader2, Mail, Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  teamSize: '',
  crmNeed: '',
  callTime: '',
  notes: '',
};

const teamSizes = ['1-5 reps', '6-15 reps', '16-50 reps', '50+ reps'];
const crmNeeds = ['Lead capture', 'Pipeline management', 'Outreach automation', 'Revenue forecasting', 'Full CRM setup'];

export default function DemoPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitDemoRequest = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Could not send your request right now.');
      }

      setStatus('success');
      setMessage('Thanks. We received your demo request and will contact you soon.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Could not send your request right now.');
    }
  };

  return (
    <div className="App min-h-screen">
      <Navigation />
      <main className="relative overflow-hidden">
        <div className="noise-bg absolute inset-0 -z-10" />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]/75 hover:text-[#1A1A2E] mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#E5E3E0] text-xs font-semibold tracking-wide text-[#1A1A2E] shadow-sm">
                <CalendarClock className="w-3.5 h-3.5" /> Book a demo
              </span>
              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-[#1A1A2E] mt-7 max-w-3xl">
                See MSales CRM around your sales process.
              </h1>
              <p className="mt-6 text-lg text-[#3D3D52] leading-relaxed max-w-xl">
                Tell us a little about your team and the call you prefer. We will use it to prepare a focused walkthrough, not a long sales interrogation.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 lg:grid-cols-1 gap-4 max-w-xl">
                <div className="flex items-center gap-3 rounded-2xl bg-white/75 border border-[#E5E3E0] p-4">
                  <Users className="w-5 h-5 text-[#6B8E7F]" />
                  <span className="text-sm font-medium text-[#1A1A2E]">CRM fit for your team size</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/75 border border-[#E5E3E0] p-4">
                  <Phone className="w-5 h-5 text-[#6B8E7F]" />
                  <span className="text-sm font-medium text-[#1A1A2E]">Call details included</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/75 border border-[#E5E3E0] p-4">
                  <Mail className="w-5 h-5 text-[#6B8E7F]" />
                  <span className="text-sm font-medium text-[#1A1A2E]">Sent straight to MSales</span>
                </div>
              </div>
            </div>

            <form onSubmit={submitDemoRequest} className="bg-white border border-[#E5E3E0] rounded-3xl shadow-xl shadow-black/5 p-5 sm:p-7 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Full name *</span>
                  <input required name="name" value={form.name} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Work email *</span>
                  <input required type="email" name="email" value={form.email} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Phone / WhatsApp</span>
                  <input name="phone" value={form.phone} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="Best call number" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Company *</span>
                  <input required name="company" value={form.company} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="Company name" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Sales team size *</span>
                  <select required name="teamSize" value={form.teamSize} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]">
                    <option value="">Select team size</option>
                    {teamSizes.map((size) => <option key={size} value={size}>{size}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#5A5A6E]">Main CRM need *</span>
                  <select required name="crmNeed" value={form.crmNeed} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]">
                    <option value="">Select a focus</option>
                    {crmNeeds.map((need) => <option key={need} value={need}>{need}</option>)}
                  </select>
                </label>
              </div>

              <label className="block mt-5">
                <span className="text-sm font-semibold text-[#5A5A6E]">Preferred call time *</span>
                <input required name="callTime" value={form.callTime} onChange={updateField} className="mt-2 w-full rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="Example: Tomorrow, 4 PM IST" />
              </label>

              <label className="block mt-5">
                <span className="text-sm font-semibold text-[#5A5A6E]">Anything we should prepare?</span>
                <textarea name="notes" value={form.notes} onChange={updateField} rows="4" className="mt-2 w-full resize-none rounded-2xl border border-[#E5E3E0] bg-[#F8F7F5] px-4 py-3 text-[#1A1A2E] outline-none focus:border-[#1A1A2E]" placeholder="Current CRM, number of leads, specific workflow, or questions." />
              </label>

              <button disabled={status === 'loading'} className="pill-btn mt-6 w-full px-7 py-3.5 text-sm font-semibold bg-[#1A1A2E] text-white hover:bg-[#2A2A3E] inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                Request demo call
              </button>

              {message && (
                <p className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-[#3F7D57]' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}