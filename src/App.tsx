import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SkipToContent from './components/SkipToContent';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Blog from './pages/Blog';
import VideoHub from './pages/VideoHub';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Navbar />
      <main className="flex-1" id="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/videos" element={<VideoHub />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
