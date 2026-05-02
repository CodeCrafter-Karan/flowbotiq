import { useState } from 'react';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { SEO } from '../lib/seo';

const categories = ['All', 'Excel Mastery', 'Power Platform', 'Business Automation', 'Website & Digital'];

const posts = [
  {
    title: 'How to Automate MIS Reports in Excel (No VBA Knowledge Needed)',
    excerpt: 'Step-by-step guide to building fully automated monthly reports using Excel formulas and Power Query — no coding required.',
    category: 'Excel Mastery',
    readTime: '8 min read',
    date: 'Apr 28, 2025',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    slug: 'automate-mis-reports-excel',
  },
  {
    title: 'What is Power Automate and How Can a Small Business Use It in 2025?',
    excerpt: 'A plain-English guide to Microsoft Power Automate — what it does, how much it costs, and 5 ways an Indian SMB can use it today.',
    category: 'Power Platform',
    readTime: '6 min read',
    date: 'Apr 22, 2025',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'power-automate-small-business-2025',
  },
  {
    title: 'How Much Does a Business Website Cost in India in 2025? (Honest Breakdown)',
    excerpt: 'We break down the real cost of building a business website in India — freelancer vs agency vs DIY builders. No fluff.',
    category: 'Website & Digital',
    readTime: '7 min read',
    date: 'Apr 18, 2025',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'website-cost-india-2025',
  },
  {
    title: '5 Signs Your Business Is Ready for Workflow Automation',
    excerpt: 'Not sure if automation is right for you? Answer these 5 questions and find out exactly where to start.',
    category: 'Business Automation',
    readTime: '5 min read',
    date: 'Apr 14, 2025',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: '5-signs-ready-for-automation',
  },
  {
    title: 'Excel VBA Tutorial: Auto-Generate GST Invoices in Under 10 Seconds',
    excerpt: 'Full walkthrough: build a VBA macro that generates professional GST invoices from a data sheet — complete with download.',
    category: 'Excel Mastery',
    readTime: '12 min read',
    date: 'Apr 10, 2025',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'excel-vba-gst-invoice-tutorial',
  },
  {
    title: 'Power Apps vs Custom Website: What Does Your Business Actually Need?',
    excerpt: 'Decision guide with comparison table. Find out which solution fits your use case, budget, and team — without the jargon.',
    category: 'Power Platform',
    readTime: '6 min read',
    date: 'Apr 5, 2025',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'power-apps-vs-website',
  },
  {
    title: 'How a 3-Person CA Firm Cut Reporting Time by 80% With Excel Automation',
    excerpt: 'A real story from Pune: how we helped a CA firm eliminate manual report compilation and reclaim 6 hours every week.',
    category: 'Business Automation',
    readTime: '5 min read',
    date: 'Mar 30, 2025',
    image: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    slug: 'ca-firm-excel-automation-case-study',
  },
  {
    title: 'Top 10 Free Microsoft 365 Tools Indian SMBs Are Not Using (But Should)',
    excerpt: 'If you pay for Microsoft 365, you\'re sitting on tools that most businesses don\'t even open. Here are the 10 most valuable ones.',
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

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="The Ops Playbook - Business Automation & Excel Tips"
        description="Learn Excel automation, Power Platform, workflow automation, and website development for Indian SMBs. Read actionable guides and case studies."
        canonical="/blog"
        keywords="Excel VBA tutorial, Power Automate guide, business automation, workflow automation, excel tips, power platform"
      />
      {/* Header */}
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              The Ops Playbook
            </div>
            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Playbooks for growing businesses
            </h1>
            <p className="text-dark-400 text-lg">
              Practical guides on automation, Excel, Power Platform, and digital systems for Indian SMBs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-dark-200 rounded-lg text-sm text-dark-700 placeholder-dark-400 focus:outline-none focus:border-accent w-48"
            />
          </div>
        </div>

        {/* Featured post */}
        {featured && (
          <a href={`/blog/${featured.slug}`} className="group block mb-8">
            <div className="bg-dark-50 border border-dark-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 md:flex">
              <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full mb-3 ${catColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="font-syne font-bold text-2xl text-dark-950 mb-3 leading-snug group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-dark-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-dark-500">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-dark-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${catColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-syne font-bold text-dark-950 text-base leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-dark-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-dark-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-dark-500">
            <p className="font-syne font-semibold text-dark-900 mb-1">No articles found</p>
            <p className="text-sm">Try a different category or search term.</p>
          </div>
        )}

        {/* Lead magnet banner */}
        <div className="mt-16 bg-dark-950 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="font-syne font-bold text-white text-2xl mb-2">Download the Free GST Invoice Template</h3>
          <p className="text-dark-400 mb-6">Auto-generates invoices from your data. Used by 500+ Indian businesses.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all"
          >
            Download Free Template <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
