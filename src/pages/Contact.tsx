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
  { title: 'GST Invoice Generator (Excel)', desc: 'Auto-generates invoices from your data sheet', icon: '📊' },
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
    const message = encodeURIComponent(`Hi, I just submitted the audit form. I need help with: ${selectedChallenge}. My name is ${name}.`);
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-hidden">
      <SEO
        title="Free Business Process Audit - Schedule Your Consultation"
        description="Get a free 15-minute audit of your business operations. Understand bottlenecks and get an honest recommendation on automation and workflow optimization."
        canonical="/contact"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 pt-24 pb-20">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-coral-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(46,117,255,0.16), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,77,109,0.1), transparent 45%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            <div className="xl:col-span-7 space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-200 shadow-sm shadow-primary-500/10">
                Free Process Audit
              </span>
              <h1 className="font-syne text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
                Let’s map your business and stop the manual work.
              </h1>
              <p className="max-w-2xl text-lg text-dark-300 sm:text-xl leading-relaxed">
                Book a free 15-minute audit. We’ll pinpoint the biggest bottleneck and tell you exactly what to fix first — no fluff, no hard sell.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: '15-min audit', value: 'Free' },
                  { label: 'WhatsApp follow-up', value: 'Fast reply' },
                  { label: 'No pitch', value: 'Honest advice' },
                ].map(item => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-primary-200 mb-2">{item.label}</p>
                    <p className="font-semibold text-white text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-5">
              <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-primary-500/10 backdrop-blur-xl">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-200 mb-3">Start your audit</p>
                  <h2 className="font-syne text-3xl font-bold text-white leading-tight">
                    Fill in a few details, and we’ll take care of the rest.
                  </h2>
                </div>

                {step === 'form' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark-100">Your full name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Rajesh Sharma"
                        className="w-full rounded-3xl border border-white/10 bg-dark-950/80 px-4 py-3 text-sm text-white placeholder-dark-400 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-dark-100">WhatsApp number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-3xl border border-white/10 bg-dark-950/80 px-4 py-3 text-sm text-white placeholder-dark-400 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-dark-100">
                        <span className="font-medium">Main challenge</span>
                        <span className="text-dark-400">Choose one</span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {challenges.map(challenge => (
                          <button
                            type="button"
                            key={challenge}
                            onClick={() => setSelectedChallenge(challenge)}
                            className={`w-full rounded-3xl border px-4 py-4 text-left transition-all duration-200 ${
                              selectedChallenge === challenge
                                ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/10'
                                : 'border-white/10 bg-dark-950/90 hover:border-white/20'
                            }`}
                          >
                            <span className={`block text-sm font-semibold ${selectedChallenge === challenge ? 'text-white' : 'text-dark-100'}`}>
                              {challenge}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-dark-100">
                        <span className="font-medium">Free resource</span>
                        <span className="text-dark-400">Optional</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {magnets.map(m => (
                          <button
                            key={m.title}
                            type="button"
                            onClick={() => setSelectedMagnet(m.title)}
                            className={`w-full rounded-3xl border p-4 text-left transition-all duration-200 ${
                              selectedMagnet === m.title
                                ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/10'
                                : 'border-white/10 bg-dark-950/90 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{m.icon}</span>
                              <div>
                                <p className={`text-sm font-semibold ${selectedMagnet === m.title ? 'text-white' : 'text-dark-100'}`}>{m.title}</p>
                                <p className="text-xs text-dark-400 leading-relaxed">{m.desc}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!name || !phone || !selectedChallenge || isLoading}
                      className="flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? 'Saving details...' : 'Send & Open WhatsApp'}
                      {!isLoading && <ArrowRight size={16} />}
                    </button>

                    <p className="text-center text-xs text-dark-400">
                      We'll message you on WhatsApp within 2 hours. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-500/15 text-primary-400">
                      <CheckCircle size={30} />
                    </div>
                    <h2 className="font-syne text-3xl font-bold text-white mb-4">You're all set, {name.split(' ')[0]}!</h2>
                    <p className="text-dark-300 mb-6">We're opening WhatsApp now. Reply to start your free process audit.</p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-3xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600"
                    >
                      Open WhatsApp
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-primary-500/10 backdrop-blur-xl">
                <h3 className="font-syne text-2xl font-bold text-white mb-5">What happens next?</h3>
                <div className="space-y-4 text-sm text-dark-300">
                  {[
                    { num: '1', title: 'We reply on WhatsApp', desc: 'Within 2 hours of your submission (Mon–Sat, 9am–7pm)' },
                    { num: '2', title: 'Free 15-min audit call', desc: 'We understand your operations and pinpoint the biggest bottleneck' },
                    { num: '3', title: 'Honest recommendation', desc: 'We tell you exactly what to do — even if it\'s not us. No pitch.' },
                    { num: '4', title: 'Detailed proposal', desc: 'If there\'s a fit, we send a scoped proposal within 24 hours' },
                  ].map(step => (
                    <div key={step.num} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-primary-500 text-white font-syne font-bold">{step.num}</div>
                      <div>
                        <div className="font-semibold text-white">{step.title}</div>
                        <div className="text-dark-300 leading-relaxed">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-dark-950 p-8 shadow-2xl shadow-black/20">
                <h3 className="font-syne text-2xl font-bold text-white mb-5">Reach us directly</h3>
                <div className="space-y-4 text-sm text-dark-300">
                  <a href="mailto:hello@flowbotiq.in" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail size={16} className="text-primary-400" />
                    hello@flowbotiq.in
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone size={16} className="text-primary-400" />
                    +91 98765 43210
                  </a>
                  <div className="flex items-start gap-3 text-dark-300">
                    <MapPin size={16} className="text-primary-400 mt-1" />
                    Pune, Maharashtra, India
                  </div>
                  <div className="flex items-center gap-3 text-dark-300">
                    <Clock size={16} className="text-primary-400" />
                    Mon–Sat, 9am–7pm IST
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20process%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-[#25D366]/40 bg-[#25D366]/10 p-5 transition-all hover:bg-[#25D366]/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#25D366] text-white shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Prefer WhatsApp?</div>
                  <div className="text-dark-300 text-sm">Chat with us — we reply in under 2 hours.</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
