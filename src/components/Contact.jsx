import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Fake delay to simulate request
      await new Promise((r) => setTimeout(r, 800));
      setStatus('We received your request. We will get back within 24 hours.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">Let’s build something unforgettable</h3>
            <p className="mt-2 text-slate-300">Tell us about your brand and where you want to show up—streets, screens, or both.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Global media buying</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">3D & motion design</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Programmatic DOOH</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">CTV & streaming</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="jane@brand.com" />
            </div>
            <div>
              <label className="text-sm text-slate-300">What do you need?</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="OOH takeover + UGC flywheel..." />
            </div>
            <motion.button whileTap={{ scale: 0.98 }} type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 px-5 py-3 font-medium text-white shadow-lg">
              <Send className="h-4 w-4" /> Send request
            </motion.button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
