import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Blog from './pages/Blog';
import VideoHub from './pages/VideoHub';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Services from './pages/Services';

function getPage(path: string): string {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/blog')) return 'blog';
  if (path.startsWith('/videos')) return 'videos';
  if (path.startsWith('/case-studies')) return 'case-studies';
  if (path.startsWith('/pricing')) return 'pricing';
  if (path.startsWith('/contact')) return 'contact';
  if (path.startsWith('/services')) return 'services';
  return 'home';
}

export default function App() {
  const [page, setPage] = useState(() => getPage(window.location.pathname));

  useEffect(() => {
    const handleNav = () => setPage(getPage(window.location.pathname));
    window.addEventListener('popstate', handleNav);

    // Intercept link clicks for SPA navigation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#')) return;
      e.preventDefault();
      window.history.pushState({}, '', href);
      setPage(getPage(href));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handleNav);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'blog': return <Blog />;
      case 'videos': return <VideoHub />;
      case 'case-studies': return <CaseStudies />;
      case 'pricing': return <Pricing />;
      case 'contact': return <Contact />;
      case 'services': return <Services />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
