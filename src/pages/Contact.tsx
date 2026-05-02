import { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { saveContactSubmission } from '../lib/supabase';
import { SEO } from '../lib/seo';

const challenges = [
  'Excel / data work taking too long',
  'Need a website or landing page',
  'Want to automate a process',
  'Need a Power App or dashboard',
  'Not sure yet — just exploring',
];

const magnets = [
  { title: 'GST Invoice Generator (Excel)', desc: 'Auto-generates invoices from data sheet', icon: '📊' },
  { title: 'Automation Readiness Checklist', desc: '20 signs your business is ready for automation', icon: '✅' },
  { title: 'Power Automate Starter Pack', desc: '5 ready-to-import flows for SMBs', icon: '⚡' },
  { title: 'Website Launch Checklist', desc: '30 things to check before going live', icon: '📋' },
];

export default function Contact() {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMagnet, setSelectedMagnet] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !selectedChallenge) return;
    
    setIsLoading(true);
    
    try {
      // Save to Supabase
      await saveContactSubmission({
        name,
        phone,
        challenge: selectedChallenge,
        magnet: selectedMagnet || undefined,
      });
    } catch (error) {
      console.error('Failed to save contact:', error);
    }
    
    setStep('success');
    
    // Redirect to WhatsApp
    const message = encodeURIComponent(`Hi, I just submitted the audit form. I need help with: ${selectedChallenge}. My name is ${name}.`);
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Free Business Process Audit - Schedule Your Consultation"
        description="Get a free 15-minute audit of your business operations. Understand bottlenecks and get an honest recommendation on automation and workflow optimization."
        canonical="/contact"
      />
      <div className="bg-dark-950 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Free Process Audit
            </div>
            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Let's talk about your business.
            </h1>
            <p className="text-dark-400 text-lg">
              15 minutes. No pitch. Just an honest look at what would help most — and whether we're the right fit.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="bg-white border border-dark-200 rounded-2xl p-8">
                <h2 className="font-syne font-bold text-dark-950 text-xl mb-1">Start your free audit</h2>
                <p className="text-dark-500 text-sm mb-6">We'll reply on WhatsApp within 2 hours.</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1.5">Your name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Rajesh Sharma"
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1.5">WhatsApp number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">What's your biggest operational challenge?</label>
                    <div className="space-y-2">
                      {challenges.map(challenge => (
                        <label
                          key={challenge}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                            selectedChallenge === challenge
                              ? 'border-accent bg-accent/5 text-accent'
                              : 'border-dark-200 text-dark-700 hover:border-dark-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="challenge"
                            value={challenge}
                            checked={selectedChallenge === challenge}
                            onChange={() => setSelectedChallenge(challenge)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedChallenge === challenge ? 'border-accent' : 'border-dark-300'
                          }`}>
                            {selectedChallenge === challenge && (
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{challenge}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Want a free resource while we connect? <span className="text-dark-400 font-normal">(optional)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {magnets.map(m => (
                        <label
                          key={m.title}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${
                            selectedMagnet === m.title
                              ? 'border-accent bg-accent/5'
                              : 'border-dark-200 hover:border-dark-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="magnet"
                            checked={selectedMagnet === m.title}
                            onChange={() => setSelectedMagnet(m.title)}
                            className="sr-only"
                          />
                          <span className="text-base">{m.icon}</span>
                          <span className="text-dark-700 font-medium leading-tight">{m.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!name || !phone || !selectedChallenge || isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent hover:bg-accent-600 disabled:bg-dark-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all text-sm"
                  >
                    {isLoading ? 'Saving...' : 'Send & Open WhatsApp'} {!isLoading && <ArrowRight size={15} />}
                  </button>

                  <p className="text-center text-xs text-dark-400">
                    We'll message you on WhatsApp within 2 hours. No spam, ever.
                  </p>
                </div>
              </form>
            ) : (
              <div className="bg-white border border-dark-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="font-syne font-bold text-dark-950 text-xl mb-2">You're all set, {name.split(' ')[0]}!</h2>
                <p className="text-dark-600 text-sm mb-4">
                  We're opening WhatsApp now. Reply to start your free process audit.
                </p>
                <p className="text-dark-500 text-xs">
                  Didn't get redirected?{' '}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    Click here to open WhatsApp
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-6">
            {/* What happens next */}
            <div className="bg-dark-50 border border-dark-200 rounded-2xl p-6">
              <h3 className="font-syne font-bold text-dark-950 mb-4">What happens next?</h3>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'We reply on WhatsApp', desc: 'Within 2 hours of your submission (Mon–Sat, 9am–7pm)' },
                  { num: '2', title: 'Free 15-min audit call', desc: 'We understand your operations and pinpoint the biggest bottleneck' },
                  { num: '3', title: 'Honest recommendation', desc: 'We tell you exactly what to do — even if it\'s not us. No pitch.' },
                  { num: '4', title: 'Detailed proposal', desc: 'If there\'s a fit, we send a scoped proposal within 24 hours' },
                ].map(step => (
                  <div key={step.num} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 font-syne">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-medium text-dark-900 text-sm">{step.title}</div>
                      <div className="text-dark-500 text-xs leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white border border-dark-200 rounded-2xl p-6">
              <h3 className="font-syne font-bold text-dark-950 mb-4">Reach us directly</h3>
              <div className="space-y-3 text-sm">
                <a href="mailto:hello@opsforge.in" className="flex items-center gap-3 text-dark-700 hover:text-accent transition-colors">
                  <Mail size={15} className="text-accent shrink-0" />
                  hello@opsforge.in
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-dark-700 hover:text-accent transition-colors">
                  <Phone size={15} className="text-accent shrink-0" />
                  +91 98765 43210
                </a>
                <div className="flex items-start gap-3 text-dark-700">
                  <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                  Pune, Maharashtra, India
                </div>
                <div className="flex items-center gap-3 text-dark-700">
                  <Clock size={15} className="text-accent shrink-0" />
                  Mon–Sat, 9am–7pm IST
                </div>
              </div>
            </div>

            {/* Prefer WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20process%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-dark-950 text-sm">Prefer WhatsApp?</div>
                <div className="text-dark-600 text-xs">Chat with us — we reply in under 2 hours</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
