import { Globe, FileSpreadsheet, LayoutGrid, Workflow, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Development',
    headline: 'Your Business, Online & Selling 24/7',
    desc: 'Your competitor has a website that books clients at 2am. Do you? We design fast, mobile-first websites that rank on Google and convert visitors into paying customers — not just digital brochures.',
    color: 'bg-blue-50 text-blue-600',
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
    color: 'bg-green-50 text-green-600',
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
    color: 'bg-amber-50 text-amber-600',
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
    color: 'bg-red-50 text-coral-500',
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
      {/* Header */}
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Services
            </div>
            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Custom systems for real businesses.
            </h1>
            <p className="text-dark-400 text-lg">
              Not templates. Not buzzwords. Everything we build is scoped for your specific operations and team.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {services.map((svc, i) => (
            <div key={svc.id} id={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <div className="rounded-2xl overflow-hidden h-72 lg:h-80">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className={`w-12 h-12 rounded-2xl ${svc.color} flex items-center justify-center mb-4`}>
                  <svc.icon size={22} />
                </div>
                <div className="text-xs font-bold text-dark-500 uppercase tracking-wider mb-1">{svc.title}</div>
                <h2 className="font-syne font-bold text-dark-950 text-2xl sm:text-3xl mb-3 leading-snug">{svc.headline}</h2>
                <p className="text-dark-600 text-sm leading-relaxed mb-5">{svc.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  {svc.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-dark-700">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white font-semibold text-sm rounded-xl transition-all"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </a>
                  <span className="text-dark-500 text-xs">Typical delivery: {svc.deliveryTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
