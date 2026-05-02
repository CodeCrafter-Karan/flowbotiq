import { Zap, Mail, Phone, MapPin, Youtube, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-syne font-bold text-lg text-white">
                OpsForge<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-dark-500">
              We build digital systems for Indian SMBs — websites, automations, and Power Apps — that pay for themselves in 30 days.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-dark-800 hover:bg-accent flex items-center justify-center transition-colors">
                <Youtube size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-dark-800 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-dark-800 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Website Development', '/services/websites'],
                ['Excel & VBA Automation', '/services/excel-vba'],
                ['Power Platform', '/services/power-platform'],
                ['Workflow Automation', '/services/workflow'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-accent transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-syne font-semibold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['The Ops Playbook', '/blog'],
                ['Video Hub', '/videos'],
                ['Case Studies', '/case-studies'],
                ['Pricing', '/pricing'],
                ['Free Process Audit', '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-accent transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-accent" />
                <a href="mailto:hello@opsforge.in" className="hover:text-accent transition-colors">hello@opsforge.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
            </ul>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-600">
          <span>© {new Date().getFullYear()} OpsForge. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-dark-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-dark-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
