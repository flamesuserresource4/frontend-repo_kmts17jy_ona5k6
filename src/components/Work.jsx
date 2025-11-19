import { motion } from 'framer-motion';

const work = [
  {
    title: 'NeoCity Launch',
    desc: '3D anamorphic billboard + TikTok media blitz. 42M impressions in 10 days.',
    tag: 'DOOH + Social',
  },
  {
    title: 'Orbit Cola',
    desc: 'Retro-future CTV spot and city bus wraps. 12% brand lift.',
    tag: 'CTV + OOH',
  },
  {
    title: 'Pulse Festival',
    desc: 'Interactive microsite and AR street poster hunt.',
    tag: 'Web + AR',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {work.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
            <div className="relative">
              <span className="text-xs text-fuchsia-300">{w.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{w.title}</h3>
              <p className="mt-2 text-slate-300">{w.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
