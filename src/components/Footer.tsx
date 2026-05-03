import { Zap, Mail, Phone, MapPin, Youtube, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark-950 to-dark-900 text-dark-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <span className="font-syne font-900 text-xl bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent">
                Flowbotiq
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-dark-400 font-light">
              We build digital systems for Indian SMBs — websites, automations, and Power Apps — that pay for themselves in 30 days.
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-all duration-200 text-dark-400 hover:text-primary-400">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-all duration-200 text-dark-400 hover:text-primary-400">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center transition-all duration-200 text-dark-400 hover:text-primary-400">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['Website Development', '/services/websites'],
                ['Excel & VBA Automation', '/services/excel-vba'],
                ['Power Platform', '/services/power-platform'],
                ['Workflow Automation', '/services/workflow'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center group">
                    {label}
                    <ArrowRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['The Ops Playbook', '/blog'],
                ['Video Hub', '/videos'],
                ['Case Studies', '/case-studies'],
                ['Pricing', '/pricing'],
                ['Free Audit', '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center group">
                    {label}
                    <ArrowRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-dark-400 group-hover:text-dark-300 transition-colors">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="shrink-0 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <a href="mailto:hello@flowbotiq.in" className="text-dark-400 hover:text-primary-400 transition-colors truncate">hello@flowbotiq.in</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="shrink-0 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <a href="tel:+919876543210" className="text-dark-400 hover:text-primary-400 transition-colors">+91 98765 43210</a>
              </li>
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-600">
          <span>© {new Date().getFullYear()} Flowbotiq. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
