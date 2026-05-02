import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { subscribeNewsletter } from '../lib/supabase';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await subscribeNewsletter(email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-4">
        <Mail size={24} className="text-accent" />
        <h3 className="font-syne font-bold text-xl text-dark-950">
          The Ops Playbook (Weekly)
        </h3>
      </div>

      <p className="text-dark-600 mb-6">
        Get automation ideas, business tips, and case studies every week. No spam, ever.
      </p>

      {submitted ? (
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <CheckCircle size={20} />
          <span>Subscribed! Check your email to confirm.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 border border-dark-200 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !email}
            className="px-6 py-3 bg-accent hover:bg-accent-600 disabled:bg-dark-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all whitespace-nowrap text-sm"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
