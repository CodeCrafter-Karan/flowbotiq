import { useState } from 'react';
import { CheckCircle, X, ChevronDown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Get your first digital system in place',
    price: '₹15,000',
    from: true,
    features: [
      '5-page website OR single Excel automation',
      'Mobile responsive design',
      'Contact form integration',
      '1 month of post-delivery support',
      'Basic on-page SEO',
      'Google Analytics setup',
    ],
    notIncluded: [
      'Custom integrations or APIs',
      'Power Platform apps',
      'Ongoing maintenance retainer',
    ],
    cta: 'Get Started',
    color: 'border-dark-200',
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'Full digital setup for a scaling business',
    price: '₹45,000',
    from: true,
    features: [
      '10-page website + one automation workflow',
      '2 Power Automate flows',
      'WhatsApp & contact form integration',
      '3 months of post-delivery support',
      'Advanced SEO + Google My Business',
      'Monthly performance report',
      'Staff training (1 session)',
    ],
    notIncluded: [
      'Dedicated support manager',
      'Custom Power App development',
    ],
    cta: 'Start Now — Most Popular',
    color: 'border-accent',
    popular: true,
  },
  {
    name: 'Scale',
    tagline: 'Complete digital transformation',
    price: '₹1,20,000',
    from: true,
    features: [
      'Full website with CMS',
      'Custom Power App or dashboard',
      '5+ automated workflows',
      'Priority support (48-hr response)',
      'Quarterly strategy review call',
      'Full documentation & team training',
      'Dedicated project manager',
    ],
    notIncluded: [],
    cta: "Let's Build Together",
    color: 'border-dark-200',
    popular: false,
  },
];

const faqs = [
  { q: 'Do prices include GST?', a: 'All prices shown are exclusive of GST (18%). Final invoice will include GST as applicable.' },
  { q: 'What\'s the payment structure?', a: '50% upfront to start, 50% on delivery. For larger projects, we can discuss milestone-based payments.' },
  { q: 'How long does a typical project take?', a: 'Starter: 1–2 weeks. Growth: 3–5 weeks. Scale: 6–10 weeks. Exact timelines are confirmed during scoping.' },
  { q: 'What if I need something not listed?', a: "Book a free audit call — we scope custom projects all the time. We'll send a detailed proposal within 24 hours." },
  { q: 'Do you offer a maintenance plan after delivery?', a: 'Yes. Monthly retainer plans start at ₹3,000/month and include bug fixes, minor updates, and priority support.' },
  { q: 'Is there a refund policy?', a: 'We deliver against a signed scope document. If we don\'t deliver what was agreed, we fix it at no extra charge. We don\'t offer refunds on completed work.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Transparent Pricing
          </div>
          <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Honest pricing. No surprises.
          </h1>
          <p className="text-dark-400 text-lg max-w-xl mx-auto">
            Every project is scoped before we quote. These are starting prices for common packages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border-2 p-8 ${plan.color} ${
                plan.popular ? 'shadow-2xl shadow-accent/10 bg-dark-950' : 'bg-white hover:shadow-lg'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${plan.popular ? 'text-accent' : 'text-dark-500'}`}>
                {plan.name}
              </div>
              <div className={`font-syne font-extrabold text-3xl sm:text-4xl mb-1 ${plan.popular ? 'text-white' : 'text-dark-950'}`}>
                {plan.price}
              </div>
              <div className={`text-xs mb-1 ${plan.popular ? 'text-dark-500' : 'text-dark-400'}`}>
                {plan.from ? 'starting from' : ''}
              </div>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-dark-400' : 'text-dark-600'}`}>
                {plan.tagline}
              </p>

              <div className="space-y-2.5 mb-6">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle size={15} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-accent' : 'text-green-500'}`} />
                    <span className={plan.popular ? 'text-dark-300' : 'text-dark-700'}>{f}</span>
                  </div>
                ))}
              </div>

              {plan.notIncluded.length > 0 && (
                <div className="space-y-2 mb-6 opacity-50">
                  {plan.notIncluded.map(f => (
                    <div key={f} className="flex items-start gap-2.5 text-sm">
                      <X size={15} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-dark-500' : 'text-dark-400'}`} />
                      <span className={`line-through ${plan.popular ? 'text-dark-500' : 'text-dark-400'}`}>{f}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="/contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent-600 text-white'
                    : 'bg-dark-950 hover:bg-dark-800 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Not sure */}
        <div className="bg-dark-50 border border-dark-200 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="font-syne font-bold text-dark-950 text-xl mb-1">Not sure which plan fits?</h3>
            <p className="text-dark-600 text-sm">Let's talk for 15 minutes — no pitch, just honest advice about what would help your business most.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white font-semibold text-sm rounded-xl transition-all"
            >
              Book Free Call <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20looking%20at%20your%20pricing%20and%20want%20honest%20advice%20on%20the%20right%20plan%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm rounded-xl transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-bold text-dark-950 text-2xl mb-6 text-center">Pricing FAQs</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-dark-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-dark-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-dark-900 text-sm">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-dark-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-dark-600 leading-relaxed border-t border-dark-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
