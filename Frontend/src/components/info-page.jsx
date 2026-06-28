import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import Footer from './footer';

const pageContent = {
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Privacy',
    intro: 'How MSales CRM handles demo requests, product inquiries, and business contact details.',
    points: [
      'We collect only the details needed to respond to inquiries and prepare CRM demos.',
      'Demo form submissions are sent securely to the MSales team for follow-up.',
      'We do not sell customer or prospect information to third parties.',
      'You can request updates or deletion of your contact details by reaching out to MSales.',
    ],
  },
  terms: {
    title: 'Terms of Use',
    eyebrow: 'Terms',
    intro: 'Simple terms for using the MSales CRM website, demos, and product information.',
    points: [
      'Website content is provided for product evaluation and informational use.',
      'Demo calls and trials may be used to assess fit for your business workflows.',
      'Pricing, features, and availability may change as the product improves.',
      'Do not misuse the website, forms, or MSales brand assets.',
    ],
  },
  blog: {
    title: 'MSales Blog',
    eyebrow: 'Blog',
    intro: 'Ideas for sales teams that want cleaner pipelines, faster follow-ups, and better revenue visibility.',
    points: [
      'How to qualify inbound leads without slowing down your reps.',
      'What a healthy CRM pipeline looks like for growing teams.',
      'Simple forecasting habits that make monthly revenue less surprising.',
      'When to replace spreadsheets with a real CRM workflow.',
    ],
  },
  about: {
    title: 'About MSales CRM',
    eyebrow: 'About',
    intro: 'MSales CRM is built for teams that want practical sales automation without complicated setup.',
    points: [
      'Capture leads, manage deals, and forecast revenue in one workspace.',
      'Designed for founders, sales managers, and revenue teams that need clarity fast.',
      'Focused on useful automation, clean reporting, and everyday sales workflows.',
      'Built to help teams spend less time updating CRM fields and more time selling.',
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions',
    eyebrow: 'FAQs',
    intro: 'Quick answers about MSales CRM demos, setup, trials, and team fit.',
    points: [
      'Do I need a credit card for a trial? No, the site currently promotes a 14-day trial without a credit card.',
      'Can MSales work for small teams? Yes, it is designed for small teams through growing revenue teams.',
      'What happens after I book a demo? Your details go to MSales and the team follows up for a call.',
      'Can I discuss my current CRM setup? Yes, include it in the demo notes so the walkthrough is prepared.',
    ],
  },
};

export default function InfoPage({ type }) {
  const page = pageContent[type] || pageContent.about;

  return (
    <div className="App min-h-screen">
      <Navigation />
      <main className="relative overflow-hidden">
        <div className="noise-bg absolute inset-0 -z-10" />
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]/75 hover:text-[#1A1A2E] mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="bg-white border border-[#E5E3E0] rounded-3xl p-6 sm:p-9 lg:p-12 shadow-xl shadow-black/5">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#F5F4F2] border border-[#E5E3E0] text-[#1A1A2E]">
              {page.eyebrow}
            </span>
            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-[#1A1A2E] mt-6">
              {page.title}
            </h1>
            <p className="mt-5 text-lg text-[#3D3D52] leading-relaxed max-w-3xl">
              {page.intro}
            </p>

            <div className="mt-9 grid gap-4">
              {page.points.map((point) => (
                <div key={point} className="flex gap-4 rounded-2xl bg-[#F8F7F5] border border-[#E5E3E0] p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#6B8E7F] shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-[#3D3D52]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}