import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Website Development', href: '/services/websites' },
      { label: 'Excel & VBA Automation', href: '/services/excel-vba' },
      { label: 'Power Platform', href: '/services/power-platform' },
      { label: 'Workflow Automation', href: '/services/workflow' },
    ],
  },
  { label: 'The Ops Playbook', href: '/blog' },
  { label: 'Video Hub', href: '/videos' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-dark-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-syne font-900 text-xl bg-gradient-to-r from-dark-950 to-primary-600 bg-clip-text text-transparent">
            Flowbotiq
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-2 px-1 py-2 text-sm font-600 text-dark-700 hover:text-primary-600 transition-colors duration-200 group">
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-dark-100 py-3 z-50 animate-fade-in-down">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-3 text-sm font-500 text-dark-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-600 text-dark-700 hover:text-primary-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-700 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-200 rounded-xl"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2.5 rounded-lg text-dark-700 hover:bg-dark-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-dark-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          />
          <div id="mobile-menu" className="relative bg-white/96 backdrop-blur-xl border border-dark-100 shadow-2xl animate-fade-in-down mx-4 my-4 rounded-3xl overflow-hidden">
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href || '/'}
                    className="block px-4 py-3 text-sm font-semibold text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-colors duration-150"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-colors duration-150"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1 border-t border-dark-200">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  Get Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
