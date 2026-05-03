import { Globe, FileSpreadsheet, LayoutGrid, Workflow, ArrowRight, CheckCircle } from 'lucide-react';
import { SEO } from '../lib/seo';

const services = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Development',
    headline: 'Your Business, Online & Selling 24/7',
    desc: 'Your competitor has a website that books clients at 2am. Do you? We design fast, mobile-first websites that rank on Google and convert visitors into paying customers — not just digital brochures.',
    color: 'from-blue-400 to-blue-600 text-blue-600',
    features: [
      'Mobile-first, responsive design',
      'On-page SEO foundation built in',
      'Contact form + WhatsApp integration',
      'Google Analytics & Search Console setup',
      'Fast loading (target sub-3s on mobile)',
      'CMS for easy content updates',
    ],
    deliveryTime: '3–5 weeks',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'excel-vba',
    icon: FileSpreadsheet,
    title: 'Excel & VBA Automation',
    headline: 'Stop Burning Hours on Spreadsheet Work',
    desc: 'If someone on your team manually copies data between files, that\'s money being burned. We build Excel tools and VBA scripts that do it in seconds — with zero errors and no extra hires.',
    color: 'from-green-400 to-green-600 text-green-600',
    features: [
      'Custom VBA macros and scripts',
      'MIS report automation',
      'GST invoice generation',
      'Data validation and error-checking',
      'Dashboard creation with dynamic charts',
      'Staff training included',
    ],
    deliveryTime: '1–2 weeks',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'power-platform',
    icon: LayoutGrid,
    title: 'Power Platform Solutions',
    headline: 'Enterprise Power at SMB Cost',
    desc: 'Custom apps, automated approvals, real-time dashboards — built on Microsoft\'s Power Platform. If you have Microsoft 365, you\'re already paying for this. We unlock it for you.',
    color: 'from-amber-400 to-amber-600 text-amber-600',
    features: [
      'Custom Power Apps (mobile + desktop)',
      'Power Automate workflow setup',
      'Power BI dashboards and reports',
      'SharePoint integration',
      'Teams integration',
      'Full documentation and training',
    ],
    deliveryTime: '3–6 weeks',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'workflow',
    icon: Workflow,
    title: 'Workflow Automation',
    headline: 'Systems That Run Themselves',
    desc: 'Invoice sent. Follow-up done. Report generated. Lead captured. All automatic. We map your operations and remove every manual step that\'s slowing your growth.',
    color: 'from-primary-400 to-primary-600 text-primary-600',
    features: [
      'Full process mapping and audit',
      'Automation using Power Automate, Zapier, or Make',
      'CRM and lead capture automation',
      'Invoice and payment workflow',
      'Email and WhatsApp follow-up sequences',
      'Ongoing monitoring and tweaks',
    ],
    deliveryTime: '2–4 weeks',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Services - Website Design, Excel Automation, Power Apps"
        description="Website development, Excel VBA automation, Power Platform apps, and workflow automation for Indian SMBs. Fast, affordable, results-driven."
        canonical="/services"
      />

      <section className="relative overflow-hidden bg-dark-950 pt-24 pb-20">
        <div className="absolute right-0 top-10 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-coral-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(46,117,255,0.14), transparent 35%), radial-gradient(circle at 70% 70%, rgba(255,77,109,0.08), transparent 40%)',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-200 mb-4">
              Services
            </span>
            <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Custom systems for real businesses.
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl leading-relaxed">
              Not templates. Not buzzwords. Everything we build is scoped for your specific operations and team.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10">
          {services.map(svc => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-[32px] border border-dark-200 bg-white shadow-2xl shadow-dark-950/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-80 overflow-hidden bg-dark-950">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  <div className="absolute left-6 bottom-6 rounded-3xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                    <div className={`inline-flex items-center justify-center rounded-3xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r ${svc.color}`}>
                      <Icon size={18} />
                      <span className="ml-2">{svc.title}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    <span>{svc.id.replace('-', ' ')}</span>
                  </div>
                  <h2 className="font-syne text-3xl font-bold text-dark-950 mb-4 leading-tight">{svc.headline}</h2>
                  <p className="text-dark-600 text-sm leading-relaxed mb-8">{svc.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {svc.features.map(feature => (
                      <div key={feature} className="flex items-start gap-3 rounded-3xl border border-dark-100 bg-dark-50 p-4 text-sm text-dark-700">
                        <CheckCircle size={18} className="mt-1 text-primary-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary-500/20">
                      Get a Quote
                      <ArrowRight size={16} />
                    </a>
                    <span className="text-sm text-dark-500">Typical delivery: {svc.deliveryTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[36px] border border-dark-200 bg-gradient-to-br from-white to-dark-50 p-10 text-center shadow-2xl shadow-dark-950/5">
          <h2 className="font-syne text-3xl font-bold text-dark-950 mb-4">Ready to stop the manual work that’s holding your team back?</h2>
          <p className="text-dark-500 mb-8 max-w-2xl mx-auto">Book a free consultation and we’ll map the exact automation path for your business.</p>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary-500/20">
            Book Your Free Audit <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </div>
  );
}
