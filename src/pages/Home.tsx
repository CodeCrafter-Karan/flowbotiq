import { ArrowRight, CheckCircle, Star, ChevronDown, Play, Globe, FileSpreadsheet, LayoutGrid, Workflow, TrendingUp, Clock, Users, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const painPoints = [
  {
    pain: 'Manual data entry wastes 3+ hours daily',
    solution: 'We automate that in 1 week with Excel VBA — zero errors, zero extra hires.',
    icon: '📊',
  },
  {
    pain: 'No system to track leads and follow-ups',
    solution: 'Custom Power Apps CRM built in Microsoft 365 — you already pay for it.',
    icon: '📋',
  },
  {
    pain: 'Your website looks like it was built in 2015',
    solution: 'Fast, mobile-first website live in 4 weeks — designed to rank and convert.',
    icon: '💻',
  },
];

const services = [
  {
    icon: Globe,
    title: 'Your Business, Online & Selling 24/7',
    service: 'Website Development',
    metric: 'Avg. 4-week delivery',
    desc: 'Your competitor has a website that books clients at 2am. Do you? We design fast, mobile-first websites that rank on Google and convert visitors into paying customers.',
    color: 'bg-blue-50 text-blue-600',
    href: '/services/websites',
  },
  {
    icon: FileSpreadsheet,
    title: 'Stop Burning Hours on Spreadsheet Work',
    service: 'Excel & VBA Automation',
    metric: 'ROI in under 30 days',
    desc: 'If someone on your team manually copies data between files, that\'s money being burned. We build Excel tools and VBA scripts that do it in seconds — with zero errors.',
    color: 'bg-green-50 text-green-600',
    href: '/services/excel-vba',
  },
  {
    icon: LayoutGrid,
    title: 'Enterprise Power at SMB Cost',
    service: 'Power Platform',
    metric: 'Uses your Microsoft 365',
    desc: 'Custom apps, automated approvals, real-time dashboards — built on Microsoft\'s Power Platform. If you have Microsoft 365, you\'re already paying for this.',
    color: 'bg-amber-50 text-amber-600',
    href: '/services/power-platform',
  },
  {
    icon: Workflow,
    title: 'Systems That Run Themselves',
    service: 'Workflow Automation',
    metric: 'Eliminate repetitive tasks',
    desc: 'Invoice sent. Follow-up done. Report generated. Lead captured. All automatic. We map your operations and remove every manual step that\'s slowing your growth.',
    color: 'bg-coral-50 text-coral-500',
    href: '/services/workflow',
  },
];

const caseStudies = [
  {
    industry: 'CA Firm',
    location: 'Pune',
    problem: 'Report generation was taking 6 hours manually every week',
    solution: 'Custom Excel automation with VBA macros',
    result: '6 hours → 12 minutes',
    resultDetail: '95% time saved',
    tag: 'Excel & VBA',
    tagColor: 'bg-green-100 text-green-700',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    industry: 'Manufacturing SMB',
    location: 'Nashik',
    problem: 'No digital presence — losing clients to competitors online',
    solution: 'SEO-optimised website with quote request system',
    result: '3x more enquiries',
    resultDetail: 'in 60 days',
    tag: 'Website',
    tagColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    industry: 'Trading Company',
    location: 'Mumbai',
    problem: 'Sales team had no lead tracking — deals slipping through gaps',
    solution: 'Power Apps CRM built on Microsoft 365',
    result: '40% faster deal closure',
    resultDetail: 'full pipeline visibility',
    tag: 'Power Platform',
    tagColor: 'bg-amber-100 text-amber-700',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const testimonials = [
  {
    name: 'Rajesh M.',
    role: 'CA Firm Owner, Pune',
    text: 'Our monthly reporting used to take an entire Friday. Now it\'s done before lunch. The Excel automation OpsForge built has genuinely changed how we operate.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'E-commerce Founder, Mumbai',
    text: 'Our new website started ranking on Google within 6 weeks and we got our first organic enquiry in 8 weeks. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Vikram T.',
    role: 'Operations Head, Nashik',
    text: 'The Power Automate flows they built save my team at least 2 hours every single day. That\'s 10+ hours a week we spend on actual work now.',
    rating: 5,
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '₹15,000',
    desc: 'Perfect for getting your first digital system in place',
    features: ['5-page website OR single automation', 'Mobile responsive design', '1 month of support', 'Basic SEO setup', 'Google Analytics integration'],
    notIncluded: ['Custom integrations', 'Power Platform apps', 'Ongoing maintenance'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹45,000',
    desc: 'Full digital setup for a growing business',
    features: ['10-page website + automation', '2 Power Automate flows', 'Contact form + WhatsApp integration', '3 months of support', 'Advanced SEO + Google My Business', 'Monthly performance report'],
    notIncluded: ['Dedicated support manager', 'Custom app development'],
    cta: 'Most Popular — Start Now',
    popular: true,
  },
  {
    name: 'Scale',
    price: '₹1,20,000',
    desc: 'Complete digital transformation package',
    features: ['Full website + CMS', 'Custom Power App or dashboard', '5+ automated workflows', 'Priority support (48hr response)', 'Quarterly strategy call', 'Full documentation + training'],
    notIncluded: [],
    cta: "Let's Build Together",
    popular: false,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Websites take 3–5 weeks. Excel automation projects are usually done in 1–2 weeks. Power Platform apps vary — typically 3–6 weeks depending on complexity.',
  },
  {
    q: 'Do I need to have Microsoft 365 for Power Platform?',
    a: 'Yes, Power Platform works best with Microsoft 365 Business Standard or Premium. If you don\'t have it yet, we can advise on the right plan — it\'s often cheaper than you think.',
  },
  {
    q: 'What if I don\'t know exactly what I need?',
    a: "That's exactly what our Free Process Audit is for. We'll spend 15 minutes understanding your operations and tell you exactly what would help most — no sales pitch.",
  },
  {
    q: 'Do you offer ongoing support after delivery?',
    a: 'Yes. All packages include a support period. After that, we offer monthly retainer plans or pay-as-you-go support hours.',
  },
];

export default function Home() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-dark-950 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(26,111,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/50 to-dark-950" />

        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Digital solutions for Indian SMBs
            </div>

            <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6">
              Your Business Is{' '}
              <span className="text-accent">Leaking Hours</span>{' '}
              Every Day.{' '}
              <span className="text-dark-400">Let's Fix That.</span>
            </h1>

            <p className="text-lg sm:text-xl text-dark-400 leading-relaxed mb-8 max-w-2xl">
              We build websites, automate Excel workflows, and deploy Power Platform apps so your team can focus on growth — not repetitive tasks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                Get a Free Process Audit
                <ArrowRight size={16} />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all"
              >
                <Play size={14} />
                See Our Work
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-dark-500">
              {[
                { icon: Users, text: '10+ businesses automated' },
                { icon: TrendingUp, text: '₹40L+ saved in manual hours' },
                { icon: Award, text: '100% project completion' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a href="#problems" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dark-600 hover:text-dark-400 transition-colors">
          <span className="text-xs">scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── PAIN POINTS → SOLUTIONS ── */}
      <section id="problems" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-dark-950 mb-3">
              Sound familiar?
            </h2>
            <p className="text-dark-600 text-lg max-w-xl mx-auto">
              Most Indian SMBs are stuck with the same operational bottlenecks. Here's how we solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="card-flip cursor-pointer h-52"
                onMouseEnter={() => setFlippedCard(i)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(flippedCard === i ? null : i)}
              >
                <div className={`card-flip-inner w-full h-full ${flippedCard === i ? 'rotate-y-180' : ''}`}
                  style={{ transform: flippedCard === i ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 0.6s', transformStyle: 'preserve-3d', position: 'relative' }}>
                  {/* Front */}
                  <div className="card-front absolute inset-0 bg-dark-50 border border-dark-200 rounded-2xl p-6 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <p className="font-syne font-semibold text-dark-900 leading-snug mb-2">{item.pain}</p>
                      <p className="text-xs text-dark-500">Hover to see how we fix this →</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="card-back absolute inset-0 bg-accent rounded-2xl p-6 flex flex-col justify-between" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <CheckCircle className="text-white/60" size={24} />
                    <div>
                      <p className="font-syne font-semibold text-white leading-snug mb-3">{item.solution}</p>
                      <a href="/contact" className="inline-flex items-center gap-1 text-white/80 text-sm hover:text-white transition-colors">
                        Get this done <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-3">
              What We Do
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-dark-950 mb-3">
              Services built for real businesses
            </h2>
            <p className="text-dark-600 max-w-xl mx-auto">
              Not buzzwords. Not templates. Custom-built systems that solve specific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                className="group bg-white border border-dark-200 rounded-2xl p-7 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${svc.color} flex items-center justify-center shrink-0`}>
                    <svc.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-semibold text-dark-500 uppercase tracking-wider">{svc.service}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-dark-100 rounded-full text-xs text-dark-600">
                        <Clock size={10} />
                        {svc.metric}
                      </span>
                    </div>
                    <h3 className="font-syne font-bold text-dark-950 text-lg leading-snug">{svc.title}</h3>
                  </div>
                </div>
                <p className="text-dark-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
                Real Results
              </div>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-dark-950">
                What we've built
              </h2>
            </div>
            <a href="/case-studies" className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all">
              All case studies <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="group bg-white border border-dark-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-950/40" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${cs.tagColor}`}>
                      {cs.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-syne font-bold text-lg">{cs.result}</span>
                    <span className="ml-2 text-white/70 text-sm">{cs.resultDetail}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-1">{cs.industry} · {cs.location}</div>
                  <p className="text-sm font-medium text-dark-800 mb-1">{cs.problem}</p>
                  <p className="text-xs text-dark-500">{cs.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-dark-600 text-sm font-medium">5.0 on Google</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-dark-950 mb-3">
              Clients who stopped drowning in manual work
            </h2>
            <p className="text-dark-600">Real results from real Indian businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-dark-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-dark-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-syne font-semibold text-dark-950 text-sm">{t.name}</div>
                  <div className="text-dark-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-3">
              Transparent Pricing
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-dark-950 mb-3">
              Honest pricing. No surprises.
            </h2>
            <p className="text-dark-600 max-w-xl mx-auto">
              Starting prices for common packages. Every project is scoped before we quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-7 border transition-all ${
                  plan.popular
                    ? 'bg-accent border-accent shadow-2xl shadow-accent/20 -translate-y-2'
                    : 'bg-white border-dark-200 hover:border-accent/40 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm font-semibold mb-1 ${plan.popular ? 'text-white/70' : 'text-dark-500'}`}>
                  {plan.name}
                </div>
                <div className={`font-syne font-extrabold text-3xl mb-1 ${plan.popular ? 'text-white' : 'text-dark-950'}`}>
                  {plan.price}
                </div>
                <p className={`text-xs mb-5 ${plan.popular ? 'text-white/60' : 'text-dark-500'}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-2 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-dark-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <ul className="space-y-1.5 mb-5 opacity-50">
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm line-through">
                        <span className={plan.popular ? 'text-white' : 'text-dark-500'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="/contact"
                  className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-white text-accent hover:bg-white/90'
                      : 'bg-accent text-white hover:bg-accent-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h3 className="font-syne font-bold text-dark-950 text-xl mb-4 text-center">Common questions</h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-dark-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-dark-900 text-sm">{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-dark-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-dark-600 leading-relaxed border-t border-dark-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(26,111,255,0.4) 0%, transparent 60%)`,
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 bg-coral-500/10 text-coral-500 text-sm font-semibold rounded-full mb-4 border border-coral-500/20">
            Limited spots this month
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready to stop doing things manually?
          </h2>
          <p className="text-dark-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free 15-minute process audit. We'll tell you exactly what to fix first — no pitch, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Book a Free Call
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20process%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
