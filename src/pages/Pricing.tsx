import { useState } from 'react';
import { CheckCircle, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SEO } from '../lib/seo';

const plans = [
  {
    name: 'Starter',
    tagline: 'Build your first polished system',
    price: '₹15,000',
    from: true,
    features: [
      '5-page website OR single Excel automation',
      'Mobile responsive design',
      'Contact form + WhatsApp integration',
      '1 month post-delivery support',
      'On-page SEO foundation',
      'Google Analytics setup',
    ],
    notIncluded: [
      'Custom APIs or integrations',
      'Power Platform apps',
      'Dedicated retainer',
    ],
    cta: 'Get Started',
    style: 'bg-white border border-dark-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]',
    accent: 'text-blue-600 bg-blue-50',
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'A complete digital setup for growth',
    price: '₹45,000',
    from: true,
    features: [
      '10-page website + one automation workflow',
      '2 Power Automate flows',
      'WhatsApp & contact form integration',
      '3 months post-delivery support',
      'Advanced SEO + business listing',
      'Monthly performance report',
    ],
    notIncluded: [
      'Dedicated support manager',
      'Custom Power App development',
    ],
    cta: 'Start Now — Most Popular',
    style: 'bg-gradient-to-br from-indigo-600 to-primary-500 text-white shadow-[0_25px_70px_rgba(79,70,229,0.2)]',
    accent: 'text-white bg-white/10',
    popular: true,
  },
  {
    name: 'Scale',
    tagline: 'Enterprise-grade workflow transformation',
    price: '₹1,20,000',
    from: true,
    features: [
      'Full website with CMS',
      'Custom Power App or dashboard',
      '5+ automated workflows',
      'Priority support (48-hr response)',
      'Quarterly strategy review',
      'Project manager included',
    ],
    notIncluded: [],
    cta: "Let's Build Together",
    style: 'bg-white border border-dark-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]',
    accent: 'text-primary-600 bg-primary-50',
    popular: false,
  },
];

const faqs = [
  { q: 'Do prices include GST?', a: 'All prices are exclusive of GST (18%). Final invoice includes GST as applicable.' },
  { q: 'What is the payment structure?', a: '50% upfront, 50% on delivery. For larger scope we can do milestone payments.' },
  { q: 'How long does a typical project take?', a: 'Starter: 1–2 weeks. Growth: 3–5 weeks. Scale: 6–10 weeks. Exact timelines are scoped after your audit.' },
  { q: 'Can I customize a package?', a: 'Yes. Book the free audit and we will design a package for your exact needs.' },
  { q: 'Do you offer maintenance after delivery?', a: 'Yes — retainers start at ₹3,000/month for updates, fixes, and priority support.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Transparent Pricing - Website, Automation & Power Apps"
        description="Simple, honest pricing for business automation, Excel VBA, Power Platform, and website development. No hidden fees."
        canonical="/pricing"
      />

      <section className="relative overflow-hidden bg-dark-950 pt-24 pb-20">
        <div className="absolute inset-x-0 top-10 h-96 bg-gradient-to-b from-primary-700/20 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-accent shadow-sm shadow-accent/10 mb-4">
            Transparent Pricing
          </span>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
            Pricing that tells the truth.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-dark-300 leading-relaxed">
            Choose the package that matches your business stage. Every quote starts with a free audit, so you won’t pay for anything you don’t need.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 xl:grid-cols-3">
          {plans.map(plan => (
            <div key={plan.name} className={`rounded-[32px] p-8 transition-transform duration-300 hover:-translate-y-1 ${plan.style}`}>
              {plan.popular && (
                <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white mb-6">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <p className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${plan.accent}`}>{plan.name}</p>
              </div>
              <div className="mb-2">
                <p className="text-4xl sm:text-5xl font-bold leading-tight">{plan.price}</p>
                <p className="text-sm uppercase tracking-[0.25em] text-dark-300">{plan.from ? 'starting from' : 'flat fee'}</p>
              </div>
              <p className="text-sm text-dark-400 mb-8">{plan.tagline}</p>

              <div className="space-y-3 mb-8">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-dark-700">
                    <CheckCircle size={18} className="mt-1 text-primary-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {plan.notIncluded.length > 0 && (
                <div className="mb-8 rounded-3xl bg-dark-950/5 p-4 text-sm text-dark-500 space-y-3">
                  {plan.notIncluded.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <X size={16} className="mt-1 text-dark-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="/contact"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-3xl px-6 py-4 text-sm font-semibold transition ${plan.popular ? 'bg-white text-dark-950 hover:bg-white/90' : 'bg-dark-950 text-white hover:bg-dark-900'}`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] border border-dark-200 bg-gradient-to-r from-blue-50 via-white to-coral-50 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-primary-600 font-semibold mb-3">Need a custom quote?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 leading-tight">We can tailor a package for your exact operations.</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-3xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
            >
              Book a free audit
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="rounded-3xl border border-dark-200 bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between text-left gap-4 text-dark-950"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && <p className="mt-4 text-sm text-dark-600 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
