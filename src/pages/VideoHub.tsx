import { useState } from 'react';
import { Play, ArrowRight, Youtube } from 'lucide-react';
import { SEO } from '../lib/seo';

const categories = ['All', 'Tutorials', 'Case Studies', 'Shorts', 'Business Tips'];

const videos = [
  {
    title: 'How to Build an Automated MIS Report in Excel — Full Tutorial',
    category: 'Tutorials',
    duration: '11:24',
    views: '4.2K views',
    date: 'Apr 28, 2025',
    thumb: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'CA Firm Saves 6 Hours/Week — Power BI Automation Case Study',
    category: 'Case Studies',
    duration: '8:47',
    views: '2.8K views',
    date: 'Apr 22, 2025',
    thumb: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: '60-Second Excel Trick: Auto-Fill GST Details',
    category: 'Shorts',
    duration: '0:58',
    views: '12K views',
    date: 'Apr 20, 2025',
    thumb: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: '5 Signs Your Business Needs Automation Right Now',
    category: 'Business Tips',
    duration: '6:12',
    views: '3.1K views',
    date: 'Apr 18, 2025',
    thumb: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Build a Lead Tracker in Power Apps — Step by Step',
    category: 'Tutorials',
    duration: '14:33',
    views: '5.7K views',
    date: 'Apr 14, 2025',
    thumb: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Power Automate in 60 Seconds: Automated Email Reports',
    category: 'Shorts',
    duration: '0:55',
    views: '9.4K views',
    date: 'Apr 12, 2025',
    thumb: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Manufacturing SMB Gets 3x More Leads After Website Redesign',
    category: 'Case Studies',
    duration: '7:18',
    views: '1.9K views',
    date: 'Apr 8, 2025',
    thumb: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Is Your Business Losing Money to Manual Processes?',
    category: 'Business Tips',
    duration: '5:44',
    views: '2.3K views',
    date: 'Apr 5, 2025',
    thumb: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function VideoHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = videos.filter(video => activeCategory === 'All' || video.category === activeCategory);
  const featured = filtered[0] || videos[0];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Video Hub - Excel, Power Platform & Business Automation Tutorials"
        description="Watch practical video tutorials on Excel, Power Platform, workflow automation, and website systems for Indian SMBs."
        canonical="/videos"
      />

      <section className="relative overflow-hidden bg-dark-950 pt-24 pb-20">
        <div className="absolute inset-x-0 top-10 h-96 bg-gradient-to-b from-coral-500/20 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-500/15 px-4 py-2 text-sm font-semibold text-coral-200 shadow-sm shadow-coral-500/10 mb-4">
            Video Hub
          </span>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
            Learn faster with short, business-focused videos.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-dark-300 leading-relaxed">
            Tutorials, case studies, and quick tips for growing businesses that want better processes without wasting time.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img src={featured.thumb} alt={featured.title} className="h-96 w-full object-cover" />
            <div className="bg-white p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-dark-500 mb-4">
                <span className="rounded-full bg-coral-50 px-3 py-1 font-semibold text-coral-600">{featured.category}</span>
                <span>{featured.duration} · {featured.views}</span>
              </div>
              <h2 className="font-syne text-3xl font-bold text-dark-950 mb-4">{featured.title}</h2>
              <p className="text-dark-600 leading-relaxed mb-8">Watch this step-by-step walkthrough for the most useful automation and reporting systems we build for small businesses.</p>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-3xl bg-dark-950 px-6 py-4 text-sm font-semibold text-white hover:bg-dark-900 transition-all shadow-lg shadow-dark-950/10">
                Hire us to build it <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-dark-200 bg-dark-50 p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-dark-950 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500 text-white">
                  <Youtube size={18} />
                </div>
                <div>
                  <p>Join 500+ business owners</p>
                  <p className="text-sm text-dark-500">New videos every week.</p>
                </div>
              </div>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-all">
                <Youtube size={16} /> Subscribe on YouTube
              </a>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-lg font-semibold text-dark-950 mb-4">Filter videos</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === cat ? 'bg-accent text-white' : 'bg-dark-100 text-dark-600 hover:bg-dark-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((video, idx) => (
            <a key={`${video.title}-${idx}`} href="/contact" className="group block overflow-hidden rounded-[28px] border border-dark-200 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <img src={video.thumb} alt={video.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-dark-950/20" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark-900">
                    <Play size={12} /> Watch
                  </span>
                </div>
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark-900">
                  {video.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-syne text-lg font-semibold text-dark-950 mb-3">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-dark-500">
                  <span>{video.views}</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-[32px] border border-dark-200 bg-gradient-to-r from-primary-50 to-coral-50 p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.05)]">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-950 mb-4">Learn first. Build next.</h2>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto">Watch the videos. Book a free consultation. We’ll show you how to turn what you learned into a system that works for your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl bg-red-500 px-6 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-all">
              Subscribe Now
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-3xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-all">
              Hire Us to Build It <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
