import { ArrowRight, TrendingUp } from 'lucide-react';

const studies = [
  {
    industry: 'CA Firm',
    location: 'Pune',
    service: 'Excel & VBA Automation',
    serviceColor: 'bg-green-100 text-green-700',
    problem: 'The firm had 3 partners and 8 staff. Every month-end, two staff members would spend an entire Friday manually compiling client MIS reports from multiple Excel sheets. It was error-prone, exhausting, and left no time for actual advisory work.',
    solution: 'We built a VBA macro system that pulls data from all source sheets, validates it, formats it to firm standards, and generates individual client PDFs — with one button click.',
    results: [
      { metric: '95%', label: 'time saved on reporting' },
      { metric: '6hrs → 12min', label: 'monthly report generation' },
      { metric: '0 errors', label: 'vs. avg. 4/month before' },
    ],
    quote: 'Our team now uses Friday afternoon for client advisory calls instead of data entry. The ROI was clear within the first week.',
    quotePerson: 'Managing Partner, CA Firm Pune',
    image: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Manufacturing SMB',
    location: 'Nashik',
    service: 'Website Development',
    serviceColor: 'bg-blue-100 text-blue-700',
    problem: 'A 15-year-old manufacturing company had no website. All business came through referrals. New buyers were searching online for suppliers and the company was completely invisible — losing contracts to younger competitors.',
    solution: 'We built a fast, SEO-optimised 8-page website with product catalogue, client enquiry form, and Google My Business integration. Targeted keywords for their product category in the Indian market.',
    results: [
      { metric: '3x', label: 'more monthly enquiries' },
      { metric: 'Page 1', label: 'Google ranking in 8 weeks' },
      { metric: '₹12L', label: 'first online contract won' },
    ],
    quote: 'We went from being invisible online to getting calls from buyers in 3 states. Best investment we made this year.',
    quotePerson: 'Director, Manufacturing Company Nashik',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Trading Company',
    location: 'Mumbai',
    service: 'Power Platform',
    serviceColor: 'bg-amber-100 text-amber-700',
    problem: 'A 20-person trading company was tracking leads on WhatsApp and a shared Excel sheet. Deals were slipping through gaps, follow-ups weren\'t happening, and the sales head had no visibility into pipeline status.',
    solution: 'We built a custom CRM app using Power Apps (they already had Microsoft 365 Business) with pipeline stages, automated follow-up reminders via Power Automate, and a Power BI dashboard for management.',
    results: [
      { metric: '40%', label: 'faster deal closure' },
      { metric: '100%', label: 'pipeline visibility' },
      { metric: '₹0 extra', label: 'software cost (used M365)' },
    ],
    quote: 'We were paying for Microsoft 365 but not using half of it. OpsForge built us a CRM we\'d have paid lakhs for elsewhere — using tools we already owned.',
    quotePerson: 'Sales Head, Trading Company Mumbai',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm font-semibold rounded-full mb-4">
              Real Results
            </div>
            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Before & After: What We've Built
            </h1>
            <p className="text-dark-400 text-lg">
              Real projects for real Indian businesses. Every number here is verified.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {studies.map((study, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-72 lg:h-80">
                  <img
                    src={study.image}
                    alt={study.industry}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent rounded-2xl" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    {study.results.map((r, j) => (
                      <div key={j} className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-1">
                        <TrendingUp size={12} className="text-accent shrink-0" />
                        <span className="font-syne font-bold text-dark-950 text-sm">{r.metric}</span>
                        <span className="text-dark-500 text-xs">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${study.serviceColor}`}>
                    {study.service}
                  </span>
                  <span className="text-dark-500 text-sm">{study.industry} · {study.location}</span>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-1">The Problem</div>
                  <p className="text-dark-700 text-sm leading-relaxed">{study.problem}</p>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-1">Our Solution</div>
                  <p className="text-dark-700 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <blockquote className="border-l-2 border-accent pl-4 mb-6">
                  <p className="text-dark-700 text-sm italic leading-relaxed">"{study.quote}"</p>
                  <footer className="text-dark-500 text-xs mt-1">— {study.quotePerson}</footer>
                </blockquote>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white font-semibold text-sm rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Get similar results <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-dark-950 rounded-2xl p-10 text-center">
          <h3 className="font-syne font-bold text-white text-2xl sm:text-3xl mb-3">
            Your business could be next.
          </h3>
          <p className="text-dark-400 mb-6 max-w-lg mx-auto">
            Book a free 15-minute process audit. We'll identify the single highest-impact change we can make for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get a Free Audit <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
