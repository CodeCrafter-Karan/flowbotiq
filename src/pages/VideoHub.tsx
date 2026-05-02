import { useState } from 'react';
import { Play, ArrowRight, Youtube } from 'lucide-react';
import { SEO } from '../lib/seo';

const categories = ['All', 'Tutorials', 'Case Studies', 'Shorts', 'Business Tips'];

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'How to Build an Automated MIS Report in Excel — Full Tutorial',
    category: 'Tutorials',
    duration: '11:24',
    views: '4.2K views',
    date: 'Apr 28, 2025',
    thumb: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'CA Firm Saves 6 Hours/Week — Power BI Automation Case Study',
    category: 'Case Studies',
    duration: '8:47',
    views: '2.8K views',
    date: 'Apr 22, 2025',
    thumb: 'https://images.pexels.com/photos/7948049/pexels-photo-7948049.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: '60-Second Excel Trick: Auto-Fill GST Details',
    category: 'Shorts',
    duration: '0:58',
    views: '12K views',
    date: 'Apr 20, 2025',
    thumb: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: '5 Signs Your Business Needs Automation Right Now',
    category: 'Business Tips',
    duration: '6:12',
    views: '3.1K views',
    date: 'Apr 18, 2025',
    thumb: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Build a Lead Tracker in Power Apps — Step by Step',
    category: 'Tutorials',
    duration: '14:33',
    views: '5.7K views',
    date: 'Apr 14, 2025',
    thumb: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Power Automate in 60 Seconds: Automated Email Reports',
    category: 'Shorts',
    duration: '0:55',
    views: '9.4K views',
    date: 'Apr 12, 2025',
    thumb: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Manufacturing SMB Gets 3x More Leads After Website Redesign',
    category: 'Case Studies',
    duration: '7:18',
    views: '1.9K views',
    date: 'Apr 8, 2025',
    thumb: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Is Your Business Losing Money to Manual Processes?',
    category: 'Business Tips',
    duration: '5:44',
    views: '2.3K views',
    date: 'Apr 5, 2025',
    thumb: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Excel VBA Tutorial: Generate Invoices in 10 Seconds Flat',
    category: 'Tutorials',
    duration: '10:05',
    views: '6.8K views',
    date: 'Mar 30, 2025',
    thumb: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function VideoHub() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = videos.filter(v => activeCategory === 'All' || v.category === activeCategory);

  const featured = videos[0];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Video Hub - Excel, Power Platform & Business Automation Tutorials"
        description="Learn business automation, Excel VBA, Power Automate, and workflow optimization through videos. Quick tutorials, case studies, and business tips."
        canonical="/videos"
      />
      {/* Header */}
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-coral-500/10 text-coral-500 text-sm font-semibold rounded-full mb-4">
              Video Hub
            </div>
            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Watch. Learn. Or let us build it for you.
            </h1>
            <p className="text-dark-400 text-lg">
              Tutorials, case studies, and quick tips to help Indian businesses run smarter operations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured video */}
        <div className="mb-10 bg-dark-950 rounded-2xl overflow-hidden relative group cursor-pointer">
          <img
            src={featured.thumb}
            alt={featured.title}
            className="w-full h-72 sm:h-96 object-cover opacity-60 group-hover:opacity-50 transition-opacity"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="mb-3">
              <span className="px-2.5 py-1 bg-coral-500 text-white text-xs font-semibold rounded-full">
                {featured.category}
              </span>
            </div>
            <h2 className="font-syne font-bold text-white text-2xl sm:text-3xl mb-2 max-w-lg">
              {featured.title}
            </h2>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-dark-950 font-semibold text-sm rounded-xl hover:bg-dark-100 transition-colors">
                <Play size={14} fill="currentColor" /> Watch Now
              </button>
              <span className="text-dark-400 text-sm">{featured.duration} · {featured.views}</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
          </div>
        </div>

        {/* Subscribe banner */}
        <div className="bg-dark-50 border border-dark-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
              <Youtube size={18} className="text-white" />
            </div>
            <div>
              <div className="font-syne font-semibold text-dark-950 text-sm">Join 500+ business owners</div>
              <div className="text-dark-500 text-xs">watching new tutorials every week</div>
            </div>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <Youtube size={14} /> Subscribe on YouTube
          </a>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video, i) => (
            <div key={i} className="group bg-white border border-dark-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-950/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={18} className="text-dark-950 ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-dark-950/80 text-white text-xs px-2 py-0.5 rounded-md">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-white/90 text-dark-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-syne font-semibold text-dark-950 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-dark-400">
                  <span>{video.views}</span>
                  <span>{video.date}</span>
                </div>
                <a
                  href="/contact"
                  className="mt-3 block text-center text-xs font-semibold text-accent border border-accent/30 py-2 rounded-lg hover:bg-accent hover:text-white transition-all"
                >
                  Get This Built →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-500 text-sm mb-4">
            Watch → Learn → Build it yourself <span className="text-dark-400">OR</span> hire us to build it for you
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
            >
              <Youtube size={16} /> Subscribe for More
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors"
            >
              Hire Us to Build It <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
