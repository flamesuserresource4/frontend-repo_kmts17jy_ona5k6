import { motion } from 'framer-motion';
import { MonitorSmartphone, Megaphone, Billboard, Sparkles } from 'lucide-react';

const items = [
  {
    icon: MonitorSmartphone,
    title: 'Digital',
    desc: 'Programmatic, social, search, CTV, experiential microsites — designed to capture and convert attention.',
    gradient: 'from-fuchsia-500/20 to-blue-500/20',
  },
  {
    icon: Megaphone,
    title: 'Traditional',
    desc: 'OOH, print, radio, and partnerships. City-wide billboard takeovers to street-level wildposting.',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    icon: Billboard,
    title: 'Out-of-Home',
    desc: 'Dynamic DOOH, 3D billboards, transit wraps, and pop-up installations that stop traffic—literally.',
    gradient: 'from-amber-500/20 to-pink-500/20',
  },
  {
    icon: Sparkles,
    title: 'Creative Lab',
    desc: '3D, motion, and interactive design. We prototype with real-time engines to ship faster.',
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Full-stack advertising, one team
        </motion.h2>
        <p className="mt-3 text-slate-300">
          Strategy, media, and production under one roof. Futuristic, measurable, unforgettable.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur"
          >
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl`} />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
