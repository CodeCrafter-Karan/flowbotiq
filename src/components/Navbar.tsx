import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-dark-200' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-syne font-800 text-lg text-dark-950">
            OpsForge<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark-700 hover:text-accent transition-colors rounded-lg hover:bg-accent-50">
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-dark-200 py-1.5 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-dark-700 hover:text-accent hover:bg-accent-50 transition-colors"
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
                className="px-3 py-2 text-sm font-medium text-dark-700 hover:text-accent transition-colors rounded-lg hover:bg-accent-50"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-600 transition-all rounded-lg shadow-sm hover:shadow-accent/20 hover:shadow-md"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-dark-700 hover:bg-dark-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-dark-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href || '/'}
                  className="block px-3 py-2.5 text-sm font-medium text-dark-700 hover:text-accent hover:bg-accent-50 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-dark-600 hover:text-accent hover:bg-accent-50 rounded-lg transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-600 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
