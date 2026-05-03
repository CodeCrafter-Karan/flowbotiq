import { useState } from 'react';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { SEO } from '../lib/seo';

const categories = ['All', 'Excel Mastery', 'Power Platform', 'Business Automation', 'Website & Digital'];

const posts = [
  {
    title: 'How to Automate MIS Reports in Excel (No VBA Knowledge Needed)',
    excerpt: 'Build fully automated monthly reports using Excel formulas and Power Query — no coding required.',
    category: 'Excel Mastery',
    readTime: '8 min read',
    date: 'Apr 28, 2025',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    slug: 'automate-mis-reports-excel',
  },
  {
    title: 'What is Power Automate and How Can a Small Business Use It in 2025?',
    excerpt: 'A plain-English guide to Microsoft Power Automate — what it does, how much it costs, and 5 use cases for Indian SMBs.',
    category: 'Power Platform',
    readTime: '6 min read',
    date: 'Apr 22, 2025',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'power-automate-small-business-2025',
  },
  {
    title: 'How Much Does a Business Website Cost in India in 2025? (Honest Breakdown)',
    excerpt: 'A real cost breakdown for business websites in India — freelancer vs agency vs DIY builders.',
    category: 'Website & Digital',
    readTime: '7 min read',
    date: 'Apr 18, 2025',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'website-cost-india-2025',
  },
  {
    title: '5 Signs Your Business Is Ready for Workflow Automation',
    excerpt: 'Not sure if automation is right for you? Answer these questions and find your best starting point.',
    category: 'Business Automation',
    readTime: '5 min read',
    date: 'Apr 14, 2025',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: '5-signs-ready-for-automation',
  },
  {
    title: 'Excel VBA Tutorial: Auto-Generate GST Invoices in Under 10 Seconds',
    excerpt: 'Full walkthrough: build a VBA macro that generates GST invoices from your data sheet.',
    category: 'Excel Mastery',
    readTime: '12 min read',
    date: 'Apr 10, 2025',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'excel-vba-gst-invoice-tutorial',
  },
  {
    title: 'Power Apps vs Custom Website: What Does Your Business Actually Need?',
    excerpt: 'A decision guide with a comparison table for the right solution based on use case, budget, and team.',
    category: 'Power Platform',
    readTime: '6 min read',
    date: 'Apr 5, 2025',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'power-apps-vs-website',
  },
  {
    title: 'How a 3-Person CA Firm Cut Reporting Time by 80% With Excel Automation',
    excerpt: 'A real story from Pune: how a CA firm eliminated manual report compilation and reclaimed 6 hours every week.',
    category: 'Business Automation',
    readTime: '5 min read',
    date: 'Mar 30, 2025',
    image: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'ca-firm-excel-automation-case-study',
  },
  {
    title: 'Top 10 Free Microsoft 365 Tools Indian SMBs Are Not Using (But Should)',
    excerpt: 'If you pay for Microsoft 365, you are sitting on unused tools. Here are the 10 most valuable ones.',
    category: 'Power Platform',
    readTime: '9 min read',
    date: 'Mar 25, 2025',
    image: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'microsoft-365-tools-indian-smbs',
  },
];

const catColors: Record<string, string> = {
  'Excel Mastery': 'bg-green-100 text-green-700',
  'Power Platform': 'bg-amber-100 text-amber-700',
  'Business Automation': 'bg-blue-100 text-blue-700',
  'Website & Digital': 'bg-coral-50 text-coral-500',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.find(post => post.featured) || posts[0];
  const rest = filtered.filter(post => post.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="The Ops Playbook - Business Automation & Excel Tips"
        description="Actionable guides on Excel automation, Power Platform, workflow automation, and website systems for Indian SMBs."
        canonical="/blog"
        keywords="Excel VBA tutorial, Power Automate guide, business automation, workflow automation, excel tips, power platform"
      />

      <section className="relative overflow-hidden bg-dark-950 pt-24 pb-20">
        <div className="absolute inset-x-0 top-10 h-96 bg-gradient-to-b from-accent/20 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-accent shadow-sm shadow-accent/10 mb-4">
            The Ops Playbook
          </span>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
            Business playbooks for smarter teams.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-dark-300 leading-relaxed">
            Learn the exact systems, automations, and website decisions that help Indian SMBs reduce effort and grow faster.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-[32px] overflow-hidden border border-dark-200 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img src={featured.image} alt={featured.title} className="h-96 w-full object-cover" />
            <div className="bg-white p-10">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${catColors[featured.category]}`}>{featured.category}</span>
              <h2 className="mt-6 text-4xl font-bold text-dark-950 leading-tight">{featured.title}</h2>
              <p className="mt-4 text-dark-600 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-dark-500">
                <span>{featured.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-2"><Clock size={14} />{featured.readTime}</span>
              </div>
              <a href={`/blog/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all shadow-lg shadow-accent/20">
                Read full story <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-dark-200 bg-dark-50 p-6">
              <h3 className="text-lg font-semibold text-dark-950 mb-4">Filter the playbook</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === cat ? 'bg-accent text-white' : 'bg-white text-dark-700 hover:bg-dark-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-dark-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <label className="text-sm font-semibold text-dark-900">Search articles</label>
              <div className="mt-3 relative">
                <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search by topic or keyword"
                  className="w-full rounded-3xl border border-dark-200 bg-white px-12 py-3 text-sm text-dark-900 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-[32px] border border-dark-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${catColors[post.category]}`}>{post.category}</span>
                <h3 className="mt-4 text-lg font-semibold text-dark-950 leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm text-dark-500 leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-dark-400">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-[32px] border border-dark-200 bg-dark-50 p-12 text-center text-dark-500">
            <p className="font-semibold text-dark-900 mb-2">No articles found</p>
            <p>Try another category or search keyword.</p>
          </div>
        )}

        <div className="rounded-[32px] border border-dark-200 bg-gradient-to-r from-primary-50 via-white to-coral-50 p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.05)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">Free GST invoice template</h2>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto">Download a ready-to-use invoice template that auto-generates GST invoices from your Excel data.</p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all">
            Download free template <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </div>
  );
}
