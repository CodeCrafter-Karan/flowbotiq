import { ArrowRight } from 'lucide-react';
import { SEO } from '../lib/seo';

const studies = [
  {
    industry: 'CA Firm',
    location: 'Pune',
    service: 'Excel & VBA Automation',
    serviceColor: 'bg-green-100 text-green-700',
    problem: 'The firm spent every month-end manually compiling client MIS reports from multiple Excel sheets. It was error-prone, exhausting, and left no time for advisory work.',
    solution: 'We built a VBA macro system that pulls data from all source sheets, validates entries, formats reports, and generates client PDFs with one click.',
    results: [
      { metric: '95%', label: 'time saved on reporting' },
      { metric: '6 hrs', label: 'vs 12 min after automation' },
      { metric: '0 errors', label: 'vs 4/month before' },
    ],
    quote: 'We now use Friday afternoon for client advisory calls instead of data entry. ROI was clear in week one.',
    quotePerson: 'Managing Partner, CA Firm Pune',
    image: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Manufacturing SMB',
    location: 'Nashik',
    service: 'Website Development',
    serviceColor: 'bg-blue-100 text-blue-700',
    problem: 'A 15-year-old supplier had no website. All business came through referrals, leaving them invisible to online buyers and losing contracts to younger competitors.',
    solution: 'We launched an 8-page SEO website with a product catalogue, enquiry form, and Google My Business setup tailored for B2B buyers.',
    results: [
      { metric: '3x', label: 'monthly enquiries' },
      { metric: 'Page 1', label: 'Google ranking in 8 weeks' },
      { metric: '₹12L', label: 'first online contract won' },
    ],
    quote: 'We went from invisible to receiving calls from buyers across three states. Best investment this year.',
    quotePerson: 'Director, Manufacturing Company Nashik',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Trading Company',
    location: 'Mumbai',
    service: 'Power Platform',
    serviceColor: 'bg-amber-100 text-amber-700',
    problem: 'A 20-person trading company tracked leads on WhatsApp and shared Excel. Deals slipped through gaps, follow-ups didn’t happen, and management had no pipeline visibility.',
    solution: 'We built a custom Power App CRM with automated follow-up reminders and a Power BI dashboard for real-time pipeline visibility.',
    results: [
      { metric: '40%', label: 'faster deal closure' },
      { metric: '100%', label: 'pipeline visibility' },
      { metric: '₹0 extra', label: 'software cost with existing M365' },
    ],
    quote: 'We were already paying for M365. OpsForge built us a CRM we would have paid lakhs for elsewhere.',
    quotePerson: 'Sales Head, Trading Company Mumbai',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Case Studies - Real Results from Excel Automation, Websites & Power Apps"
        description="See real Indian SMBs transform with automation, websites, and Power Platform apps. Verified results and business outcomes."
        canonical="/case-studies"
      />

      <section className="relative overflow-hidden bg-dark-950 pt-24 pb-20">
        <div className="absolute inset-x-0 top-10 h-[420px] bg-gradient-to-b from-primary-600/20 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-200 shadow-sm shadow-green-500/10 mb-4">
            Real Results
          </span>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
            Case studies that prove the business impact.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-dark-300 leading-relaxed">
            These are not marketing stories. They are real operations improvements that saved time, reduced errors, and made teams more confident.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {studies.map((study, idx) => (
          <div key={study.industry} className={`grid gap-8 lg:grid-cols-2 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)] relative">
              <img src={study.image} alt={study.industry} className="h-96 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 rounded-3xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-dark-500 font-semibold">Results</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.results.map(result => (
                    <span key={result.label} className="rounded-full bg-dark-950/10 px-3 py-1 text-xs font-semibold text-dark-950">
                      {result.metric} {result.label ? `• ${result.label}` : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className={`rounded-full px-3 py-1 font-semibold ${study.serviceColor}`}>{study.service}</span>
                <span className="text-dark-400">{study.industry} · {study.location}</span>
              </div>

              <div className="space-y-5">
                <div>
                  <h2 className="text-3xl font-bold text-dark-950">The Problem</h2>
                  <p className="mt-4 text-sm leading-relaxed text-dark-600">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-dark-950">Our solution</h3>
                  <p className="mt-4 text-sm leading-relaxed text-dark-600">{study.solution}</p>
                </div>
              </div>

              <blockquote className="rounded-3xl border-l-4 border-accent bg-accent/10 p-6 text-dark-800">
                <p className="text-sm italic leading-relaxed">“{study.quote}”</p>
                <footer className="mt-4 text-xs font-semibold text-dark-600">— {study.quotePerson}</footer>
              </blockquote>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-600 transition-all"
              >
                Get similar results
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}

        <div className="rounded-[32px] border border-dark-200 bg-gradient-to-br from-white via-blue-50 to-coral-50 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.05)] text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-primary-600 font-semibold mb-4">Your business could be next</p>
          <h2 className="text-4xl font-bold text-dark-950 mb-4">Book a free process audit and uncover the highest-impact automation opportunity.</h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-3xl bg-primary-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
          >
            Book the audit
            <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </div>
  );
}
