import { ArrowRight, CheckCircle, Star, ChevronDown, Play, Globe, FileSpreadsheet, LayoutGrid, Workflow, TrendingUp, Clock, Users, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SEO, StructuredData, getOrganizationSchema } from '../lib/seo';

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
    color: 'from-blue-400 to-blue-600 text-blue-600',
    bgColor: 'bg-blue-50',
    href: '/services/websites',
  },
  {
    icon: FileSpreadsheet,
    title: 'Stop Burning Hours on Spreadsheet Work',
    service: 'Excel & VBA Automation',
    metric: 'ROI in under 30 days',
    desc: 'If someone on your team manually copies data between files, that\'s money being burned. We build Excel tools and VBA scripts that do it in seconds — with zero errors.',
    color: 'from-green-400 to-green-600 text-green-600',
    bgColor: 'bg-green-50',
    href: '/services/excel-vba',
  },
  {
    icon: LayoutGrid,
    title: 'Enterprise Power at SMB Cost',
    service: 'Power Platform',
    metric: 'Uses your Microsoft 365',
    desc: 'Custom apps, automated approvals, real-time dashboards — built on Microsoft\'s Power Platform. If you have Microsoft 365, you\'re already paying for this.',
    color: 'from-amber-400 to-amber-600 text-amber-600',
    bgColor: 'bg-amber-50',
    href: '/services/power-platform',
  },
  {
    icon: Workflow,
    title: 'Systems That Run Themselves',
    service: 'Workflow Automation',
    metric: 'Eliminate repetitive tasks',
    desc: 'Invoice sent. Follow-up done. Report generated. Lead captured. All automatic. We map your operations and remove every manual step that\'s slowing your growth.',
    color: 'from-primary-400 to-primary-600 text-primary-600',
    bgColor: 'bg-primary-50',
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
      <SEO
        title="Business Automation & Website Development for Indian SMBs"
        description="Automate your business with Excel VBA, Power Platform, and custom websites. 4-week delivery. See results in 30 days."
        canonical="/"
        keywords="business automation, excel vba, power platform, website development, indian sme, business automation india"
      />
      <StructuredData data={getOrganizationSchema()} />
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float" />
        
        {/* Grid background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(46,117,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(46,117,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-40">
          <div className="max-w-4xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              Digital solutions for Indian SMBs
            </div>

            {/* Main headline */}
            <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-8">
              Your Business Is{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-pulse">
                Leaking Hours
              </span>{' '}
              Every Day.
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-dark-300 leading-relaxed mb-8 max-w-3xl font-light">
              We build websites, automate Excel workflows, and deploy Power Platform apps so your team can focus on growth — not repetitive tasks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/40 hover:-translate-y-1 group shadow-glow-lg"
              >
                Get a Free Process Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm group"
              >
                <Play size={16} />
                See Our Work
              </a>
            </div>

            {/* Trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { icon: Users, label: '10+ businesses automated', value: '₹40L+ saved' },
                { icon: TrendingUp, label: 'in manual hours', value: '100% projects' },
                { icon: Award, label: 'completed on time', value: '5.0 rating' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={18} className="text-primary-400" />
                  <div>
                    <div className="text-sm text-dark-400">{label}</div>
                    <div className="font-semibold text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#problems" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors group">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform animate-bounce" />
        </a>
      </section>

      {/* ── PAIN POINTS TO SOLUTIONS ── */}
      <section id="problems" className="py-32 bg-gradient-to-b from-white to-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">Common Pain Points</span>
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-dark-950 mb-4">
              Sound familiar?
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Most Indian SMBs are stuck with the same operational bottlenecks. Here's how we solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setFlippedCard(i)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(flippedCard === i ? null : i)}
                className="group cursor-pointer h-64 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative w-full h-full transition-transform duration-500" style={{
                  transform: flippedCard === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transformStyle: 'preserve-3d' as any,
                  perspective: '1000px',
                }}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-white border-2 border-dark-200 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="text-5xl">{item.icon}</div>
                    <div>
                      <p className="font-syne font-bold text-dark-900 text-lg leading-snug mb-3">{item.pain}</p>
                      <p className="text-xs text-primary-600 font-semibold">→ Hover to see solution</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 flex flex-col justify-between shadow-lg" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}>
                    <CheckCircle className="text-white/70" size={28} />
                    <div>
                      <p className="font-syne font-bold text-white text-lg leading-snug mb-4">{item.solution}</p>
                      <a href="/contact" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                        Get this done <ArrowRight size={14} />
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
      <section id="services" className="py-32 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(46,117,255,0.2) 0%, transparent 50%)`,
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-primary-400 text-sm font-bold uppercase tracking-widest mb-4">What We Do</span>
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-4">
              Services built for real businesses
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Not buzzwords. Not templates. Custom-built systems that solve specific problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} ${svc.bgColor} flex items-center justify-center shrink-0 shadow-lg`}>
                    <svc.icon size={24} className={svc.color.split(' ')[2]} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-xs font-extrabold text-primary-400 uppercase tracking-wider">{svc.service}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-full text-xs text-dark-300 font-medium">
                        <Clock size={12} />
                        {svc.metric}
                      </span>
                    </div>
                    <h3 className="font-syne font-bold text-white text-lg leading-snug group-hover:text-primary-300 transition-colors">{svc.title}</h3>
                  </div>
                </div>
                <p className="text-dark-300 text-base leading-relaxed mb-6">{svc.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                  Learn more <ChevronRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
            <div className="animate-fade-in-up">
              <span className="inline-block text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">Real Results</span>
              <h2 className="font-syne text-4xl sm:text-5xl font-bold text-dark-950">
                What we've built
              </h2>
            </div>
            <a href="/case-studies" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all">
              View all cases <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-dark-200 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-dark-200">
                  <img
                    src={cs.image}
                    alt={cs.industry}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-lg backdrop-blur-sm ${cs.tagColor}`}>
                      {cs.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-syne font-bold text-white text-2xl mb-1">{cs.result}</div>
                    <span className="text-white/80 text-sm">{cs.resultDetail}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{cs.industry} · {cs.location}</div>
                  <p className="font-syne font-bold text-dark-950 mb-2 text-base">{cs.problem}</p>
                  <p className="text-sm text-dark-600 leading-relaxed">{cs.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 bg-gradient-to-b from-dark-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-dark-950 mb-3">
              Clients who stopped drowning in manual work
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Real results from real Indian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border-2 border-dark-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-dark-700 text-base leading-relaxed mb-6 italic font-light">"{t.text}"</p>
                <div className="border-t border-dark-200 pt-5">
                  <div className="font-syne font-bold text-dark-950 mb-1">{t.name}</div>
                  <div className="text-sm text-dark-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">Transparent Pricing</span>
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-dark-950 mb-4">
              Honest pricing. No surprises.
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Starting prices for common packages. Every project is scoped before we quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 animate-fade-in-up ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 border-primary-600 shadow-2xl shadow-primary-500/30 -translate-y-4 scale-105'
                    : 'bg-white border-dark-200 hover:border-primary-300 hover:shadow-xl hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className={`text-sm font-bold mb-2 uppercase tracking-wider ${plan.popular ? 'text-white/70' : 'text-primary-600'}`}>
                  {plan.name}
                </div>
                <div className={`font-syne font-extrabold text-4xl mb-2 ${plan.popular ? 'text-white' : 'text-dark-950'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm mb-7 ${plan.popular ? 'text-white/80' : 'text-dark-600'}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={18} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />
                      <span className={plan.popular ? 'text-white ' : 'text-dark-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <ul className="space-y-2 mb-8 opacity-60">
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm line-through">
                        <span className={plan.popular ? 'text-white' : 'text-dark-500'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="/contact"
                  className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all w-full ${
                    plan.popular
                      ? 'bg-white text-primary-600 hover:bg-white/90 shadow-lg'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-syne font-bold text-dark-950 text-2xl mb-8 text-center">Common questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border-2 border-dark-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-dark-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-syne font-bold text-dark-950">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-dark-600 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-dark-700 leading-relaxed border-t-2 border-dark-200 bg-dark-50 text-base">
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
      <section className="py-20 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(46,117,255,0.2) 0%, transparent 50%)`,
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 text-sm font-bold rounded-full mb-6 border border-primary-500/30 backdrop-blur-sm">
            Limited spots this month
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to stop doing things manually?
          </h2>
          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto font-light">
            Book a free 15-minute process audit. We'll tell you exactly what to fix first — no pitch, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/40 hover:-translate-y-1 shadow-glow"
            >
              Book a Free Call
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20process%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
